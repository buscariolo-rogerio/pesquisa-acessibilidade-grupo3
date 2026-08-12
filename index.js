import bcrypt from 'bcryptjs';
import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import { z } from 'zod';
import { pool } from './database/connection.js';

const app = express();
const port = Number(process.env.PORT) || 3000;
if (!process.env.SESSION_SECRET) throw new Error('SESSION_SECRET deve ser definido no ambiente');
const idSchema = z.coerce.number().int().positive();
const itemSchema = z.object({ produto_id: idSchema, quantidade: z.coerce.number().int().positive() });
const cadastroSchema = z.object({
  nome: z.string().trim().min(2).max(100),
  sobrenome: z.string().trim().max(100).optional().default(''),
  email: z.string().trim().email().max(150),
  senha: z.string().min(8).max(72),
  telefone: z.string().trim().max(30).optional().default(''),
  cpf: z.string().trim().max(20).optional().default(''),
  data_nascimento: z.string().date().optional().or(z.literal('')),
});
const loginSchema = cadastroSchema.pick({ email: true, senha: true });
const avaliacaoSchema = z.object({ nota: z.coerce.number().int().min(1).max(5), comentario: z.string().trim().min(1).max(1000) });
const preferenciasSchema = z.object({
  alto_contraste: z.boolean().default(false), modo_escuro: z.boolean().default(false),
  tamanho_fonte: z.enum(['pequena', 'media', 'grande', 'extra']).default('media'),
  reduzir_animacoes: z.boolean().default(false), leitor_tela: z.boolean().default(false), leitura_voz: z.boolean().default(false),
});

function produtoParaJson(produto) {
  return { ...produto, preco: Number(produto.preco) };
}

function validar(schema, value, res) {
  const parsed = schema.safeParse(value);
  if (!parsed.success) {
    res.status(400).json({ success: false, message: 'Dados inválidos', details: z.flattenError(parsed.error).fieldErrors });
    return null;
  }
  return parsed.data;
}

function exigirLogin(req, res, next) {
  if (!req.session.usuarioId) return res.status(401).json({ success: false, message: 'Autenticação necessária' });
  return next();
}

function usuarioPublico(usuario) {
  return {
    id: usuario.id,
    nome: usuario.nome,
    sobrenome: usuario.sobrenome,
    email: usuario.email,
    telefone: usuario.telefone,
    cpf: usuario.cpf,
    data_nascimento: usuario.data_nascimento,
    criado_em: usuario.criado_em,
  };
}

app.set('trust proxy', 1);
app.use(express.json({ limit: '100kb' }));
app.use(session({
  name: 'eren.sid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 1000 * 60 * 60 * 24 },
}));

async function verificarSaude(_req, res) {
  try {
    await pool.query('SELECT 1');
    res.json({ success: true, data: { status: 'ok' } });
  } catch {
    res.status(503).json({ success: false, message: 'Banco de dados indisponível' });
  }
}
app.get('/api/health', verificarSaude);
app.get('/api/saude', verificarSaude);

app.get('/api/categorias', async (_req, res, next) => {
  try { res.json({ success: true, data: (await pool.query('SELECT * FROM categorias ORDER BY id')).rows }); } catch (error) { next(error); }
});
app.get('/api/marcas', async (_req, res, next) => {
  try { res.json({ success: true, data: (await pool.query('SELECT * FROM marcas ORDER BY id')).rows }); } catch (error) { next(error); }
});
app.get('/api/produtos', async (req, res, next) => {
  try {
    const oferta = req.query.ofertas === 'true';
    const result = await pool.query(`SELECT * FROM produtos WHERE ativo = TRUE ${oferta ? 'AND em_oferta = TRUE' : ''} ORDER BY id`);
    res.json({ success: true, data: result.rows.map(produtoParaJson) });
  } catch (error) { next(error); }
});
app.get('/api/produtos/:id', async (req, res, next) => {
  const id = validar(idSchema, req.params.id, res); if (!id) return;
  try {
    const result = await pool.query('SELECT * FROM produtos WHERE id = $1 AND ativo = TRUE', [id]);
    if (!result.rowCount) return res.status(404).json({ success: false, message: 'Produto não encontrado' });
    return res.json({ success: true, data: produtoParaJson(result.rows[0]) });
  } catch (error) { return next(error); }
});

app.post('/api/auth/cadastro', async (req, res, next) => {
  const data = validar(cadastroSchema, req.body, res); if (!data) return;
  try {
    const senhaHash = await bcrypt.hash(data.senha, 12);
    const result = await pool.query(
      'INSERT INTO usuarios (nome, sobrenome, email, senha_hash, telefone, cpf, data_nascimento) VALUES ($1, $2, LOWER($3), $4, $5, $6, $7) RETURNING id, nome, sobrenome, email, telefone, cpf, data_nascimento, criado_em',
      [data.nome, data.sobrenome, data.email, senhaHash, data.telefone, data.cpf, data.data_nascimento || null],
    );
    req.session.usuarioId = result.rows[0].id;
    return res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    if (error.code === '23505') return res.status(409).json({ success: false, message: 'E-mail já cadastrado' });
    return next(error);
  }
});
app.post('/api/auth/login', async (req, res, next) => {
  const data = validar(loginSchema, req.body, res); if (!data) return;
  try {
    const result = await pool.query('SELECT * FROM usuarios WHERE email = LOWER($1)', [data.email]);
    const usuario = result.rows[0];
    if (!usuario || !(await bcrypt.compare(data.senha, usuario.senha_hash))) return res.status(401).json({ success: false, message: 'E-mail ou senha incorretos' });
    req.session.usuarioId = usuario.id;
    return res.json({ success: true, data: usuarioPublico(usuario) });
  } catch (error) { return next(error); }
});
app.get('/api/auth/sessao', exigirLogin, async (req, res, next) => {
  try {
    const result = await pool.query('SELECT id, nome, sobrenome, email, telefone, cpf, data_nascimento, criado_em FROM usuarios WHERE id = $1', [req.session.usuarioId]);
    if (!result.rowCount) return res.status(401).json({ success: false, message: 'Sessão inválida' });
    return res.json({ success: true, data: result.rows[0] });
  } catch (error) { return next(error); }
});
app.post('/api/auth/logout', (req, res, next) => req.session.destroy((error) => {
  if (error) return next(error);
  res.clearCookie('eren.sid');
  return res.status(204).end();
}));

app.get('/api/produtos/:id/avaliacoes', async (req, res, next) => {
  const id = validar(idSchema, req.params.id, res); if (!id) return;
  try {
    const result = await pool.query('SELECT a.id, a.usuario_id, a.produto_id, a.nota, a.comentario, a.criado_em, u.nome AS nome_usuario FROM avaliacoes a JOIN usuarios u ON u.id = a.usuario_id WHERE a.produto_id = $1 ORDER BY a.criado_em DESC', [id]);
    return res.json({ success: true, data: result.rows });
  } catch (error) { return next(error); }
});
app.get('/api/avaliacoes', async (_req, res, next) => {
  try {
    const result = await pool.query('SELECT a.id, a.usuario_id, a.produto_id, a.nota, a.comentario, a.criado_em, u.nome AS nome_usuario FROM avaliacoes a JOIN usuarios u ON u.id = a.usuario_id ORDER BY a.criado_em DESC');
    return res.json({ success: true, data: result.rows });
  } catch (error) { return next(error); }
});
app.post('/api/produtos/:id/avaliacoes', exigirLogin, async (req, res, next) => {
  const produtoId = validar(idSchema, req.params.id, res); const data = validar(avaliacaoSchema, req.body, res); if (!produtoId || !data) return;
  try {
    const result = await pool.query('INSERT INTO avaliacoes (usuario_id, produto_id, nota, comentario) VALUES ($1, $2, $3, $4) ON CONFLICT (usuario_id, produto_id) DO UPDATE SET nota = EXCLUDED.nota, comentario = EXCLUDED.comentario, criado_em = NOW() RETURNING *', [req.session.usuarioId, produtoId, data.nota, data.comentario]);
    return res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) { return next(error); }
});

app.get('/api/favoritos', exigirLogin, async (req, res, next) => {
  try { const result = await pool.query('SELECT produto_id FROM favoritos WHERE usuario_id = $1 ORDER BY criado_em', [req.session.usuarioId]); return res.json({ success: true, data: result.rows.map((row) => row.produto_id) }); } catch (error) { return next(error); }
});
app.post('/api/favoritos/:produtoId', exigirLogin, async (req, res, next) => {
  const produtoId = validar(idSchema, req.params.produtoId, res); if (!produtoId) return;
  try { await pool.query('INSERT INTO favoritos (usuario_id, produto_id) VALUES ($1, $2) ON CONFLICT DO NOTHING', [req.session.usuarioId, produtoId]); return res.status(201).json({ success: true }); } catch (error) { return next(error); }
});
app.delete('/api/favoritos/:produtoId', exigirLogin, async (req, res, next) => {
  const produtoId = validar(idSchema, req.params.produtoId, res); if (!produtoId) return;
  try { await pool.query('DELETE FROM favoritos WHERE usuario_id = $1 AND produto_id = $2', [req.session.usuarioId, produtoId]); return res.status(204).end(); } catch (error) { return next(error); }
});

app.get('/api/carrinho', exigirLogin, async (req, res, next) => {
  try {
    const result = await pool.query('SELECT ic.produto_id, ic.quantidade, p.nome, p.preco::float8 AS preco_unitario, p.estoque FROM carrinhos c JOIN itens_carrinho ic ON ic.carrinho_id = c.id JOIN produtos p ON p.id = ic.produto_id WHERE c.usuario_id = $1 ORDER BY ic.produto_id', [req.session.usuarioId]);
    return res.json({ success: true, data: result.rows });
  } catch (error) { return next(error); }
});
app.put('/api/carrinho/itens/:produtoId', exigirLogin, async (req, res, next) => {
  const produtoId = validar(idSchema, req.params.produtoId, res); const data = validar(z.object({ quantidade: z.coerce.number().int().positive() }), req.body, res); if (!produtoId || !data) return;
  try {
    const produto = await pool.query('SELECT estoque FROM produtos WHERE id = $1 AND ativo = TRUE', [produtoId]);
    if (!produto.rowCount) return res.status(404).json({ success: false, message: 'Produto não encontrado' });
    if (data.quantidade > produto.rows[0].estoque) return res.status(409).json({ success: false, message: 'Estoque insuficiente' });
    const carrinho = await pool.query('INSERT INTO carrinhos (usuario_id) VALUES ($1) ON CONFLICT (usuario_id) DO UPDATE SET atualizado_em = NOW() RETURNING id', [req.session.usuarioId]);
    await pool.query('INSERT INTO itens_carrinho (carrinho_id, produto_id, quantidade) VALUES ($1, $2, $3) ON CONFLICT (carrinho_id, produto_id) DO UPDATE SET quantidade = EXCLUDED.quantidade', [carrinho.rows[0].id, produtoId, data.quantidade]);
    return res.status(201).json({ success: true });
  } catch (error) { return next(error); }
});
app.delete('/api/carrinho/itens/:produtoId', exigirLogin, async (req, res, next) => {
  const produtoId = validar(idSchema, req.params.produtoId, res); if (!produtoId) return;
  try { await pool.query('DELETE FROM itens_carrinho WHERE produto_id = $1 AND carrinho_id = (SELECT id FROM carrinhos WHERE usuario_id = $2)', [produtoId, req.session.usuarioId]); return res.status(204).end(); } catch (error) { return next(error); }
});

app.get('/api/cupons/:codigo', async (req, res, next) => {
  try { const result = await pool.query('SELECT codigo, desconto_percentual::float8 AS desconto FROM cupons WHERE codigo = UPPER($1) AND ativo = TRUE', [req.params.codigo]); if (!result.rowCount) return res.status(404).json({ success: false, message: 'Cupom inválido' }); return res.json({ success: true, data: result.rows[0] }); } catch (error) { return next(error); }
});

app.post('/api/pedidos', exigirLogin, async (req, res, next) => {
  const enderecoSchema = z.object({
    apelido: z.string().trim().max(50), cep: z.string().trim().min(8).max(10),
    logradouro: z.string().trim().min(2).max(150), numero: z.string().trim().min(1).max(20),
    complemento: z.string().trim().max(100), bairro: z.string().trim().min(2).max(100),
    cidade: z.string().trim().min(2).max(100), estado: z.string().trim().length(2),
  });
  const pedidoSchema = z.object({
    itens: z.array(itemSchema).min(1),
    cupom_codigo: z.string().trim().max(40).optional(),
    endereco: enderecoSchema,
    metodo_pagamento: z.enum(['cartao', 'pix', 'boleto']),
  });
  const data = validar(pedidoSchema, req.body, res); if (!data) return;
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const ids = data.itens.map((item) => item.produto_id);
    const produtos = (await client.query('SELECT id, nome, preco, estoque FROM produtos WHERE id = ANY($1::int[]) AND ativo = TRUE FOR UPDATE', [ids])).rows;
    if (produtos.length !== ids.length) throw Object.assign(new Error('Produto não encontrado'), { status: 404 });
    const porId = new Map(produtos.map((produto) => [produto.id, produto]));
    let subtotal = 0;
    for (const item of data.itens) {
      const produto = porId.get(item.produto_id);
      if (item.quantidade > produto.estoque) throw Object.assign(new Error(`Estoque insuficiente para ${produto.nome}`), { status: 409 });
      subtotal += Number(produto.preco) * item.quantidade;
    }
    let desconto = 0; let cupom = null;
    if (data.cupom_codigo) {
      const result = await client.query('SELECT codigo, desconto_percentual FROM cupons WHERE codigo = UPPER($1) AND ativo = TRUE', [data.cupom_codigo]);
      if (!result.rowCount) throw Object.assign(new Error('Cupom inválido'), { status: 400 });
      cupom = result.rows[0].codigo; desconto = Number(result.rows[0].desconto_percentual);
    }
    const total = Number((subtotal * (1 - desconto / 100)).toFixed(2));
    const pedido = (await client.query(
      'INSERT INTO pedidos (usuario_id, cupom_codigo, endereco_entrega, metodo_pagamento, valor_total) VALUES ($1, $2, $3, $4, $5) RETURNING id, usuario_id, cupom_codigo, endereco_entrega, metodo_pagamento, valor_total::float8 AS valor_total, status, criado_em',
      [req.session.usuarioId, cupom, data.endereco, data.metodo_pagamento, total],
    )).rows[0];
    for (const item of data.itens) {
      const produto = porId.get(item.produto_id);
      await client.query('INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unitario) VALUES ($1, $2, $3, $4)', [pedido.id, item.produto_id, item.quantidade, produto.preco]);
      await client.query('UPDATE produtos SET estoque = estoque - $1 WHERE id = $2', [item.quantidade, item.produto_id]);
    }
    await client.query('DELETE FROM itens_carrinho WHERE carrinho_id = (SELECT id FROM carrinhos WHERE usuario_id = $1)', [req.session.usuarioId]);
    await client.query('COMMIT');
    return res.status(201).json({ success: true, data: pedido });
  } catch (error) {
    await client.query('ROLLBACK');
    return res.status(error.status || 500).json({ success: false, message: error.status ? error.message : 'Não foi possível finalizar o pedido' });
  } finally { client.release(); }
});
app.get('/api/pedidos', exigirLogin, async (req, res, next) => {
  try {
    const result = await pool.query(`
      SELECT p.id, p.cupom_codigo, p.endereco_entrega, p.metodo_pagamento,
        p.valor_total::float8 AS valor_total, p.status, p.criado_em,
        COALESCE(json_agg(json_build_object(
          'produto_id', ip.produto_id,
          'quantidade', ip.quantidade,
          'preco_unitario', ip.preco_unitario::float8,
          'nome', pr.nome
        ) ORDER BY ip.produto_id) FILTER (WHERE ip.produto_id IS NOT NULL), '[]') AS itens
      FROM pedidos p
      LEFT JOIN itens_pedido ip ON ip.pedido_id = p.id
      LEFT JOIN produtos pr ON pr.id = ip.produto_id
      WHERE p.usuario_id = $1
      GROUP BY p.id
      ORDER BY p.criado_em DESC`, [req.session.usuarioId]);
    return res.json({ success: true, data: result.rows });
  } catch (error) { return next(error); }
});

app.get('/api/acessibilidade', exigirLogin, async (req, res, next) => {
  try { const result = await pool.query('SELECT * FROM preferencias_acessibilidade WHERE usuario_id = $1', [req.session.usuarioId]); return res.json({ success: true, data: result.rows[0] || null }); } catch (error) { return next(error); }
});
app.put('/api/acessibilidade', exigirLogin, async (req, res, next) => {
  const data = validar(preferenciasSchema, req.body, res); if (!data) return;
  try {
    const result = await pool.query('INSERT INTO preferencias_acessibilidade (usuario_id, alto_contraste, modo_escuro, tamanho_fonte, reduzir_animacoes, leitor_tela, leitura_voz) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (usuario_id) DO UPDATE SET alto_contraste = EXCLUDED.alto_contraste, modo_escuro = EXCLUDED.modo_escuro, tamanho_fonte = EXCLUDED.tamanho_fonte, reduzir_animacoes = EXCLUDED.reduzir_animacoes, leitor_tela = EXCLUDED.leitor_tela, leitura_voz = EXCLUDED.leitura_voz RETURNING *', [req.session.usuarioId, data.alto_contraste, data.modo_escuro, data.tamanho_fonte, data.reduzir_animacoes, data.leitor_tela, data.leitura_voz]);
    return res.json({ success: true, data: result.rows[0] });
  } catch (error) { return next(error); }
});

app.use(express.static('.'));
app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ success: false, message: 'Erro interno do servidor' });
});

const server = app.listen(port, () => console.log(`EREN disponível em http://localhost:${port}`));
function encerrar() { server.close(() => pool.end(() => process.exit(0))); }
process.on('SIGINT', encerrar);
process.on('SIGTERM', encerrar);
