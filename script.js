// Guarda os ícones usados somente nas categorias.
const ICONS = {
  mouse: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="2" width="12" height="20" rx="6"/><path d="M12 2v8"/></svg>`,
  keyboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M18 13h.01M9 13h6"/></svg>`,
  headset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 13a9 9 0 0118 0"/><rect x="2" y="13" width="5" height="7" rx="1.5"/><rect x="17" y="13" width="5" height="7" rx="1.5"/><path d="M21 19v1a3 3 0 01-3 3h-2"/></svg>`,
  monitor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="4" width="20" height="13" rx="1.5"/><path d="M8 21h8M12 17v4"/></svg>`,
  chair: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h12l-1 8H7L6 3zM5 11h14l-1.5 6a2 2 0 01-2 1.6H8.5A2 2 0 016.5 17L5 11zM7 18l-1.5 4M17 18l1.5 4"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8h4M8 6v4M15.5 9.5h.01M18 12h.01"/><path d="M17.32 5H6.68a4 4 0 00-3.94 3.33l-.9 5.4A3 3 0 004.8 17.4 3 3 0 007 16.2l1.2-1.7a2 2 0 011.6-.8h4.4a2 2 0 011.6.8l1.2 1.7a3 3 0 002.2 1.2 3 3 0 002.94-3.67l-.9-5.4A4 4 0 0017.32 5z"/></svg>`
};
/* ---------- Tabela: categorias - Remover apos back existir ---------- */
// Lista as categorias disponíveis no catálogo.
let CATEGORIAS = [
  { id:1, nome:'Mouses',    icone:'mouse',    descricao:'Precisão e velocidade para cada clique.' },
  { id:2, nome:'Teclados',  icone:'keyboard', descricao:'Switches, RGB e resposta instantânea.' },
  { id:3, nome:'Headsets',  icone:'headset',  descricao:'Áudio imersivo e microfone nítido.' },
  { id:4, nome:'Monitores', icone:'monitor',  descricao:'Taxas de atualização para reflexos reais.' },
  { id:5, nome:'Cadeiras',  icone:'chair',    descricao:'Conforto para sessões longas.' },
  { id:6, nome:'Controles', icone:'gamepad',  descricao:'Ergonomia sem fio para qualquer plataforma.' },
];

/* ---------- Tabela: marcas  -  remover apos back existir --------- */
// Relaciona cada marca ao identificador usado pelos produtos.
let MARCAS = [
  { id:1, nome:'Logitech' },
  { id:2, nome:'Razer' },
  { id:3, nome:'Avell' },
  { id:4, nome:'ViewSonic' },
  { id:5, nome:'AOC' },
  { id:6, nome:'Herman Miller' },
  { id:7, nome:'IKEA' },
  { id:8, nome:'Sony' },
  { id:9, nome:'Nintendo' },
];

/* ---------- Tabela: produtos (+ specs de exibição) - Remover apos back existi ---------- */
// Mantém os dados dos produtos enquanto não existe banco de dados.
let PRODUTOS = [
  { id:1,  categoria_id:1, marca_id:1, nome:'Logitech PRO X SUPERLIGHT 2', descricao:'Mouse competitivo sem fio, leve e voltado para movimentos rápidos.', preco:899.91, estoque:34, destaque:true,  ativo:true, specs:'60 g · HERO 2 até 44.000 DPI · 5 botões · até 95 h', imagem:'assets/produtos/mouse-logitech-pro-x-superlight-2.jpg', alt:'Mouse Logitech PRO X SUPERLIGHT 2 magenta visto de cima ao lado de uma placa informativa' },
  { id:2,  categoria_id:1, marca_id:2, nome:'Razer Basilisk V3', descricao:'Mouse com fio para destros, com botões extras e rolagem configurável.', preco:329.90, estoque:12, destaque:false, ativo:true, specs:'26.000 DPI · 11 botões · HyperScroll · 101 g', imagem:'assets/produtos/mouse-razer-basilisk-v3.jpg', alt:'Mouse Razer Basilisk V3 preto visto de cima, com apoio para o polegar e iluminação RGB' },
  { id:13, categoria_id:1, marca_id:2, nome:'Razer DeathAdder V2 Pro', descricao:'Mouse ergonômico que pode ser usado sem fio ou conectado por cabo.', preco:789.90, estoque:60, destaque:false, ativo:true, specs:'20.000 DPI · 8 botões · 88 g · HyperSpeed e Bluetooth', imagem:'assets/produtos/mouse-razer-deathadder-v2-pro.jpg', alt:'Mouse Razer DeathAdder V2 Pro preto sobre mousepad preto com borda vermelha' },
  { id:3,  categoria_id:2, marca_id:1, nome:'Logitech G515 LIGHTSPEED TKL', descricao:'Teclado mecânico compacto e baixo, sem o bloco numérico.', preco:854.91, estoque:20, destaque:false, ativo:true, specs:'LIGHTSPEED · Bluetooth · USB · switches GL táteis · até 36 h', imagem:'assets/produtos/teclado-logitech-g515-lightspeed-tkl.jpg', alt:'Teclado Logitech G515 LIGHTSPEED TKL preto visto de cima, sem bloco numérico' },
  { id:4,  categoria_id:2, marca_id:1, nome:'Logitech G PRO Mechanical TKL', descricao:'Teclado mecânico compacto com fio e cabo removível.', preco:656.91, estoque:8, destaque:false, ativo:true, specs:'Layout americano · switches GX Blue · LIGHTSYNC · 3 inclinações', imagem:'assets/produtos/teclado-logitech-g-pro-mechanical-tkl.jpg', alt:'Teclado mecânico Logitech G PRO TKL preto, com layout americano e iluminação branca' },
  { id:5,  categoria_id:3, marca_id:3, nome:'Avell Fusion Wireless', descricao:'Headset leve e dobrável com três formas de conexão.', preco:387.78, estoque:25, destaque:false, ativo:true, specs:'176 g · 2,4 GHz · Bluetooth · cabo · 7.1 virtual · até 50 h', imagem:'assets/produtos/headset-avell-fusion-wireless.jpg', alt:'Headset sem fio Avell Fusion preto dobrado, com almofadas em tecido e controles na concha' },
  { id:6,  categoria_id:3, marca_id:1, nome:'Logitech G733 LIGHTSPEED', descricao:'Headset sem fio com microfone removível e iluminação configurável.', preco:829.99, estoque:15, destaque:true, ativo:true, specs:'278 g · drivers de 40 mm · RGB · até 29 h sem iluminação', imagem:'assets/produtos/headset-logitech-g733.jpg', alt:'Headset Logitech G733 preto apoiado em suporte, com microfone removível' },
  { id:14, categoria_id:3, marca_id:1, nome:'Logitech G435 LIGHTSPEED', descricao:'Headset leve que pode ser conectado por LIGHTSPEED ou Bluetooth.', preco:629.91, estoque:40, destaque:false, ativo:true, specs:'Drivers de 40 mm · microfones integrados · até 18 h', imagem:'assets/produtos/headset-logitech-g435.jpg', alt:'Caixa do headset Logitech G435 ao lado do produto embalado sobre uma mesa' },
  { id:7,  categoria_id:4, marca_id:4, nome:'ViewSonic VX2452mh', descricao:'Monitor Full HD com conexões de vídeo variadas e alto-falantes integrados.', preco:1018.19, estoque:9, destaque:false, ativo:true, specs:'23,6 polegadas · TN · Full HD · 60 Hz · 2 ms · HDMI, DVI e VGA', imagem:'assets/produtos/monitor-viewsonic-vx2452mh.jpg', alt:'Parte frontal inferior do monitor ViewSonic VX2452mh preto, com botões e base sobre uma mesa clara' },
  { id:8,  categoria_id:4, marca_id:5, nome:'AOC AGON PRO PD32M', descricao:'Monitor 4K de grande formato com painel Mini-LED e alta taxa de atualização.', preco:5999.99, estoque:14, destaque:false, ativo:true, specs:'31,5 polegadas · IPS Mini-LED · 4K · 144 Hz · 1 ms · HDR 1400', imagem:'assets/produtos/monitor-aoc-agon-pro-pd32m.jpg', alt:'Monitor AOC AGON PRO PD32M visto por trás, com suporte metálico e iluminação RGB' },
  { id:9,  categoria_id:5, marca_id:6, nome:'Herman Miller Aeron', descricao:'Cadeira ergonômica de tela com ajustes para diferentes posições de trabalho.', preco:13336.50, estoque:6, destaque:false, ativo:true, specs:'3 tamanhos · PostureFit SL · ajustes de braços e inclinação', imagem:'assets/produtos/cadeira-herman-miller-aeron.jpg', alt:'Cadeira Herman Miller Aeron preta vista em ângulo, com encosto e assento em tela' },
  { id:10, categoria_id:5, marca_id:7, nome:'IKEA MARKUS', descricao:'Cadeira giratória de encosto alto com apoio lombar e regulagem de altura.', preco:3099.00, estoque:4, destaque:false, ativo:true, specs:'Encosto em tela · inclinação ajustável · capacidade declarada de 110 kg', imagem:'assets/produtos/cadeira-ikea-markus.jpg', alt:'Cadeira IKEA MARKUS preta e cinza vista de frente, com encosto alto em tela e apoio de cabeça' },
  { id:11, categoria_id:6, marca_id:8, nome:'Sony DualSense branco', descricao:'Controle sem fio do PlayStation 5 com recursos táteis e microfone integrado.', preco:394.25, estoque:18, destaque:false, ativo:true, specs:'Resposta tátil · gatilhos adaptáveis · touchpad · microfone · USB-C', imagem:'assets/produtos/controle-sony-dualsense-branco.jpg', alt:'Controle Sony DualSense branco e preto visto de frente, com dois analógicos e touchpad central' },
  { id:12, categoria_id:6, marca_id:9, nome:'Nintendo Switch Pro Controller', descricao:'Controle sem fio oficial para Nintendo Switch, com bateria recarregável.', preco:369.00, estoque:0, destaque:false, ativo:true, specs:'Movimento · vibração HD · NFC · USB-C · autonomia aproximada de 40 h', imagem:'assets/produtos/controle-nintendo-switch-pro.jpg', alt:'Controle Nintendo Switch Pro preto visto de frente sobre fundo branco, com analógicos assimétricos' },
];

/* ---------- Tabela: avaliacoes (seed) ---------- */
// Armazena as avaliações simuladas e permite adicionar novas durante a sessão.
let AVALIACOES = [
  { id:1, usuario_id:1, produto_id:1, nome_usuario:'Rafa_BR', nota:5, comentario:'Muito leve e confortável para movimentos rápidos.' },
  { id:2, usuario_id:2, produto_id:1, nome_usuario:'Ju.Silva', nota:4, comentario:'Boa precisão, mas o formato exige adaptação.' },
  { id:3, usuario_id:3, produto_id:6, nome_usuario:'Kaduh', nota:5, comentario:'Conexão estável e confortável durante o uso.' },
  { id:4, usuario_id:1, produto_id:3, nome_usuario:'Rafa_BR', nota:4, comentario:'O formato compacto deixou mais espaço na mesa.' },
  { id:5, usuario_id:4, produto_id:7, nome_usuario:'Mira.gg', nota:5, comentario:'A tela Full HD atendeu bem ao uso diário.' },
];

/* ---------- Tabela: cupons ---------- */
// Define os cupons aceitos pelo carrinho simulado.
const CUPONS = [
  { id:1, codigo:'NEXUS10',   desconto:10, ativo:true },
  { id:2, codigo:'BEMVINDO15', desconto:15, ativo:true },
];

/* ---------- Estado em memória (usuarios, carrinhos, favoritos, pedidos...) ---------- */
// Centraliza os dados que podem mudar enquanto a página está aberta.

//Filtro temporário e atual (memória de curto prazo) para simular login, carrinho, favoritos e pedidos.
const state = {
  usuarios: [],
  usuarioAtualId: null, // null = não logado
  apiDisponivel: false,
  enderecos: [],
  carrinho: [],      // { produto_id, quantidade }
  favoritos: [],     // produto_id[]
  pedidos: [],       // { id, itens, endereco, metodo, cupom, total, status, data }
  cupomAplicado: null,
  categoriaAtiva: null,
  buscaAtual: '',
  filtroMarca: '',
  filtroOrdem: 'relevancia',
  viewAtiva: 'loja',
  temporizadorToast: null,
  focoAnterior: null,
  ultimoElementoLido: null,
  momentoUltimaLeitura: 0,
 //filtros de acessibilidade (a11y) para simular preferências do usuário
  a11y: {
    alto_contraste:false,
    modo_escuro:true,
    tamanho_fonte:'media',
    reduzir_animacoes:false,
    leitor_tela:false,
    leitura_voz:false
  }
};

// Centraliza as chamadas e transforma erros da API em mensagens simples.
async function chamarApi(caminho, opcoes = {}, aceitarSemLogin = false){
  const configuracao = { ...opcoes };
  if(configuracao.body){
    configuracao.headers = { 'Content-Type':'application/json', ...configuracao.headers };
  }
  const resposta = await fetch(caminho, configuracao);
  if(aceitarSemLogin && resposta.status === 401) return null;
  if(resposta.status === 204) return null;
  const resultado = await resposta.json();
  if(!resposta.ok) throw new Error(resultado.message || 'Não foi possível concluir a operação');
  return resultado.data;
}

async function carregarDadosDoUsuario(){
  if(!usuarioLogado()) return;
  const [favoritos, carrinho, pedidos, preferencias] = await Promise.all([
    chamarApi('/api/favoritos'),
    chamarApi('/api/carrinho'),
    chamarApi('/api/pedidos'),
    chamarApi('/api/acessibilidade')
  ]);
  state.favoritos = favoritos;
  state.carrinho = carrinho.map(item=>({ produto_id:item.produto_id, quantidade:item.quantidade }));
  state.pedidos = pedidos;
  if(preferencias){
    state.a11y = {
      alto_contraste: preferencias.alto_contraste,
      modo_escuro: preferencias.modo_escuro,
      tamanho_fonte: preferencias.tamanho_fonte,
      reduzir_animacoes: preferencias.reduzir_animacoes,
      leitor_tela: preferencias.leitor_tela,
      leitura_voz: preferencias.leitura_voz
    };
  }
}

async function carregarCatalogoDaApi(){
  if(!location.protocol.startsWith('http')) return false;
  try{
    const [categorias, marcas, produtos, avaliacoes, usuario] = await Promise.all([
      chamarApi('/api/categorias'),
      chamarApi('/api/marcas'),
      chamarApi('/api/produtos'),
      chamarApi('/api/avaliacoes'),
      chamarApi('/api/auth/sessao', {}, true)
    ]);
    CATEGORIAS = categorias;
    MARCAS = marcas;
    PRODUTOS = produtos;
    AVALIACOES = avaliacoes;
    state.apiDisponivel = true;
    if(usuario){
      state.usuarios = [usuario];
      state.usuarioAtualId = usuario.id;
      await carregarDadosDoUsuario();
    }
    return true;
  }catch(error){
    console.error('Falha ao carregar dados da API:', error);
    return false;
  }
}

// Formata números como valores em reais.
const fmtMoeda = v => v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
// Seleciona o primeiro elemento que corresponde ao seletor.
const $ = sel => document.querySelector(sel);
// Seleciona todos os elementos e devolve um array.
const $$ = sel => Array.from(document.querySelectorAll(sel));

// Protege textos digitados antes de inseri-los em um template HTML.
function escaparHtml(texto){
  // Texto digitado deve aparecer como texto, nunca como código HTML.
  //converte em caracteres especiais
  return String(texto)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

// Envia textos invisíveis para leitores de tela de pessoas com deficiência visual.
function anunciar(msg){
  const live = document.getElementById('liveRegion');
  live.textContent = '';
  requestAnimationFrame(()=>{ live.textContent = msg; });
}

//Mostra aquelas pequenas notificações pop-up rápidas na tela (ex: "Adicionado ao carrinho") e as esconde após 2,6 segundos.
function toast(mensagem){
  const elementoToast = $('#toast');
  $('#toastMessage').textContent = mensagem;
  elementoToast.classList.add('show');
  clearTimeout(state.temporizadorToast);
  state.temporizadorToast = setTimeout(()=>elementoToast.classList.remove('show'), 2600);
  anunciar(mensagem);
}

/* =====================================================================
   HERO
   ===================================================================== */
// Procura o primeiro produto com destaque: true e monta o banner principal da loja (Hero Section) com botão de comprar e detalhes.
function renderHero(){
  const destaque = PRODUTOS.find(p=>p.destaque) || PRODUTOS[0];
  const marca = MARCAS.find(m=>m.id===destaque.marca_id).nome;
  $('#heroSection').innerHTML = `
    <div class="hero-grid">
      <div>
        <span class="hero-eyebrow">Produto em destaque · ${marca}</span>
        <h1>Reflexo de <em>1ms</em>, decisão sua.</h1>
        <p>${destaque.descricao}</p>
        <div class="hero-price">
          <span class="val">${fmtMoeda(destaque.preco)}</span>
        </div>
        <div class="specs-readout">${destaque.specs}</div>
        <div class="hero-actions" style="margin-top:1.3rem;">
          <button class="btn btn-primary" onclick="abrirProduto(${destaque.id})">Ver produto</button>
          <button class="btn btn-ghost" onclick="adicionarAoCarrinho(${destaque.id},1)">Adicionar ao carrinho</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="device-tile"><img class="imagem-produto" src="${destaque.imagem}" alt="${destaque.alt}" width="800" height="600"></div>
      </div>
    </div>`;
}

/* =====================================================================
   CATEGORIAS
   ===================================================================== */
// Monta os botões de categoria e liga o filtro de cada botão.
function renderCategorias(){
  const chips = CATEGORIAS.map(c=>`
    <button class="cat-chip ${state.categoriaAtiva===c.id?'active':''}" data-cat="${c.id}" aria-pressed="${state.categoriaAtiva===c.id}">
      ${ICONS[c.icone]}<span>${c.nome}</span>
    </button>`).join('');
  $('#catStrip').innerHTML = `
    <button class="cat-chip ${state.categoriaAtiva===null?'active':''}" data-cat="" aria-pressed="${state.categoriaAtiva===null}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
      <span>Tudo</span>
    </button>${chips}`;
  $$('.cat-chip').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const v = btn.dataset.cat;
      state.categoriaAtiva = v === '' ? null : Number(v);
      renderCategorias();
      renderProdutos();
    });
  });
}

/* =====================================================================
   FILTROS
   ===================================================================== */
// Adiciona as marcas disponíveis ao seletor de filtro.
function popularFiltroMarcas(){
  const sel = $('#filtroMarca');
  sel.innerHTML = '<option value="">Todas as marcas</option>' +
    MARCAS.map(m=>`<option value="${m.id}">${m.nome}</option>`).join('');
}

// Calcula a média das avaliações de um produto.
function mediaAvaliacao(produtoId){
  const lista = AVALIACOES.filter(a=>a.produto_id===produtoId);
  if(!lista.length) return null;
  return lista.reduce((s,a)=>s+a.nota,0) / lista.length;
}

// Aplica categoria, marca, busca e ordenação ao catálogo.
function produtosFiltrados(){
  let lista = PRODUTOS.filter(p=>p.ativo);
  if(state.viewAtiva === 'ofertas') lista = lista.filter(p=>p.em_oferta);
  if(state.categoriaAtiva) lista = lista.filter(p=>p.categoria_id===state.categoriaAtiva);
  if(state.filtroMarca) lista = lista.filter(p=>String(p.marca_id)===String(state.filtroMarca));
  if(state.buscaAtual){
    const q = state.buscaAtual.toLowerCase();
    lista = lista.filter(p=> p.nome.toLowerCase().includes(q) || p.descricao.toLowerCase().includes(q));
  }
  if(state.filtroOrdem==='menor-preco') lista = [...lista].sort((a,b)=>a.preco-b.preco);
  if(state.filtroOrdem==='maior-preco') lista = [...lista].sort((a,b)=>b.preco-a.preco);
  if(state.filtroOrdem==='avaliacao') lista = [...lista].sort((a,b)=>(mediaAvaliacao(b.id)||0)-(mediaAvaliacao(a.id)||0));
  return lista;
}

/* =====================================================================
   CARD DE PRODUTO
   ===================================================================== */
// Cria o HTML de um produto usado no catálogo e nos favoritos.
function cardProduto(p, contexto){
  const marca = MARCAS.find(m=>m.id===p.marca_id)?.nome || '';
  const idNome = `${contexto}ProdutoNome-${p.id}`;
  const media = mediaAvaliacao(p.id);
  const nAval = AVALIACOES.filter(a=>a.produto_id===p.id).length;
  const isFav = state.favoritos.includes(p.id);
  const estoqueTxt = p.estoque===0 ? '<span class="card-stock out">Sem estoque</span>'
    : p.estoque<=5 ? `<span class="card-stock low">Só ${p.estoque} em estoque</span>`
    : `<span class="card-stock">Em estoque</span>`;
  return `
  <article class="card" role="listitem" aria-labelledby="${idNome}">
    <div class="card-media">
      ${p.destaque?'<span class="tag-destaque">Destaque</span>':''}
      <button class="fav-btn ${isFav?'active':''}" data-favorito="${p.id}" aria-pressed="${isFav}" aria-label="${isFav?'Remover':'Adicionar'} ${p.nome} ${isFav?'dos':'aos'} favoritos" onclick="toggleFavorito(${p.id})">
        <svg viewBox="0 0 24 24" fill="${isFav?'currentColor':'none'}" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 000-7.8z"/></svg>
      </button>
      <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;"><img class="imagem-produto" src="${p.imagem}" alt="${p.alt}" width="800" height="600"></div>
    </div>
    <div class="card-body">
      <span class="card-brand">${marca}</span>
      <h3 class="card-title" id="${idNome}"><button class="product-link" onclick="abrirProduto(${p.id})">${p.nome}</button></h3>
      ${media!==null ? `<span class="card-rating"><svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1z"/></svg> ${media.toFixed(1)} (${nAval})</span>` : `<span class="card-rating">Sem avaliações</span>`}
      <div class="card-specs">${p.specs}</div>
      <div class="card-footer">
        <div>
          <div class="card-price">${fmtMoeda(p.preco)}</div>
          ${estoqueTxt}
        </div>
        <button class="btn btn-primary btn-sm" aria-label="Adicionar ${p.nome} ao carrinho" ${p.estoque===0?'disabled':''} onclick="adicionarAoCarrinho(${p.id},1)">
          ${p.estoque===0?'Indisponível':'Adicionar'}
        </button>
      </div>
    </div>
  </article>`;
}

// Atualiza a lista de produtos mostrada na tela.
function renderProdutos(){
  const lista = produtosFiltrados();
  $('#filterCount').textContent = `${lista.length} produto${lista.length===1?'':'s'}`;
  $('#prodTitle').textContent = state.viewAtiva === 'ofertas'
    ? 'Produtos em oferta'
    : state.categoriaAtiva ? CATEGORIAS.find(c=>c.id===state.categoriaAtiva).nome : 'Todos os produtos';
  $('#gridProdutos').innerHTML = lista.length
    ? lista.map(produto=>cardProduto(produto, 'catalogo')).join('')
    : `<div class="empty-state" style="grid-column:1/-1"><h3>Nada por aqui</h3><p>Tente outra categoria, marca ou termo de busca.</p></div>`;
}

/* =====================================================================
   FAVORITOS
   ===================================================================== */
// Adiciona ou remove um produto da lista de favoritos.
async function toggleFavorito(id){
  if(!usuarioLogado()){
    renderAuth();
    abrirModal('authOverlay');
    toast('Entre na conta para usar os favoritos.');
    return;
  }
  const gradeAtiva = document.activeElement.closest('#gridFavoritos') ? '#gridFavoritos' : '#gridProdutos';
  const i = state.favoritos.indexOf(id);
  try{
    if(i>-1){
      await chamarApi(`/api/favoritos/${id}`, { method:'DELETE' });
      state.favoritos.splice(i,1);
      toast('Removido dos favoritos');
    } else {
      await chamarApi(`/api/favoritos/${id}`, { method:'POST' });
      state.favoritos.push(id);
      toast('Adicionado aos favoritos');
    }
  }catch(error){
    toast(error.message);
    return;
  }
  atualizarContadores();
  renderProdutos();
  renderFavoritos();
  if($('#prodOverlay').classList.contains('open')) abrirProduto(window._produtoAberto);
  else requestAnimationFrame(()=>document.querySelector(`${gradeAtiva} [data-favorito="${id}"]`)?.focus());
}

// Mostra somente os produtos que foram marcados como favoritos.
function renderFavoritos(){
  const lista = PRODUTOS.filter(p=>state.favoritos.includes(p.id));
  $('#gridFavoritos').innerHTML = lista.length
    ? lista.map(produto=>cardProduto(produto, 'favorito')).join('')
    : `<div class="empty-state" style="grid-column:1/-1"><h3>Sua lista está vazia</h3><p>Toque no coração de um produto para guardá-lo aqui.</p></div>`;
}

/* =====================================================================
   MODAL DE PRODUTO + AVALIAÇÕES
   ===================================================================== */
// Preenche e abre a janela com os detalhes do produto escolhido.
function abrirProduto(id){
  const modalJaAberto = $('#prodOverlay').classList.contains('open');
  window._produtoAberto = id;
  const p = PRODUTOS.find(x=>x.id===id);
  const marca = MARCAS.find(m=>m.id===p.marca_id)?.nome || '';
  const avals = AVALIACOES.filter(a=>a.produto_id===id);
  const media = mediaAvaliacao(id);
  const isFav = state.favoritos.includes(id);
  const qtd = (state.carrinho.find(i=>i.produto_id===id)||{quantidade:1}).quantidade;

  $('#prodModal').innerHTML = `
    <button class="modal-close" onclick="fecharModal('prodOverlay')" aria-label="Fechar detalhes de ${p.nome}"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    <div class="prod-modal">
      <div class="prod-gallery">
        <div class="main-img"><img class="imagem-produto" src="${p.imagem}" alt="${p.alt}" width="800" height="600"></div>
        <div class="specs-readout">${p.specs}</div>
      </div>
      <div class="prod-info">
        <span class="card-brand">${marca}</span>
        <h2 id="prodModalTitle" tabindex="-1">${p.nome}</h2>
        ${media!==null ? `<span class="card-rating"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1z"/></svg> ${media.toFixed(1)} · ${avals.length} avaliação${avals.length===1?'':'es'}</span>` : '<span class="card-rating">Sem avaliações ainda</span>'}
        <p class="prod-desc">${p.descricao}</p>
        <div class="prod-price-row"><span class="val">${fmtMoeda(p.preco)}</span>${p.estoque<=5 && p.estoque>0 ? `<span class="card-stock low">Só ${p.estoque} em estoque</span>`:''}${p.estoque===0?'<span class="card-stock out">Sem estoque</span>':''}</div>
        <div class="qty-row">
          <div class="qty-control">
            <button aria-label="Diminuir quantidade" onclick="mudarQtdModal(-1)">−</button>
            <span id="qtdModalVal" aria-live="polite" aria-atomic="true">1</span>
            <button aria-label="Aumentar quantidade" onclick="mudarQtdModal(1)">+</button>
          </div>
          <button class="btn btn-primary" ${p.estoque===0?'disabled':''} onclick="adicionarAoCarrinho(${p.id}, Number(document.getElementById('qtdModalVal').textContent))">Adicionar ao carrinho</button>
          <button class="fav-btn ${isFav?'active':''}" style="position:static;" aria-label="${isFav?'Remover':'Adicionar'} ${p.nome} ${isFav?'dos':'aos'} favoritos" onclick="toggleFavorito(${p.id})">
            <svg viewBox="0 0 24 24" fill="${isFav?'currentColor':'none'}" stroke="currentColor" stroke-width="1.8" width="18" height="18"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 000-7.8z"/></svg>
          </button>
        </div>

        <div class="reviews">
          <h3 style="font-size:.95rem;color:#fff;text-transform:none;letter-spacing:0;margin-bottom:.6rem;">Avaliações simuladas</h3>
          ${avals.length ? avals.map(avaliacao=>`
            <div class="review-item">
              <div class="review-head"><strong style="color:var(--text)">${escaparHtml(avaliacao.nome_usuario)}</strong><span class="review-stars">${'★'.repeat(avaliacao.nota)}${'☆'.repeat(5-avaliacao.nota)}</span></div>
              <p style="margin:0;font-size:.85rem;">${escaparHtml(avaliacao.comentario)}</p>
            </div>`).join('') : '<p style="color:var(--text-muted);font-size:.85rem;">Seja o primeiro a avaliar este produto.</p>'}

          <form class="review-form" onsubmit="return enviarAvaliacao(event, ${p.id})">
            <label class="sr-only" for="notaProduto-${p.id}">Nota da avaliação</label>
            <select id="notaProduto-${p.id}" name="nota">
              <option value="5">★★★★★</option>
              <option value="4">★★★★☆</option>
              <option value="3">★★★☆☆</option>
              <option value="2">★★☆☆☆</option>
              <option value="1">★☆☆☆☆</option>
            </select>
            <label class="sr-only" for="comentarioProduto-${p.id}">Comentário da avaliação</label>
            <input id="comentarioProduto-${p.id}" type="text" name="comentario" placeholder="Escreva um comentário" required>
            <button class="btn btn-ghost btn-sm" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>`;
  abrirModal('prodOverlay');
  if(modalJaAberto) focarElemento('prodModalTitle');
}

// Altera a quantidade exibida dentro dos detalhes do produto.
function mudarQtdModal(delta){
  const el = $('#qtdModalVal');
  const produto = PRODUTOS.find(item=>item.id===window._produtoAberto);
  const novo = Math.max(1, Math.min(produto.estoque, Number(el.textContent)+delta));
  el.textContent = novo;
}

// Salva uma avaliação simulada e atualiza o produto na página.
async function enviarAvaliacao(ev, produtoId){
  ev.preventDefault();
  const form = ev.target;
  const nota = Number(form.nota.value);
  const comentario = form.comentario.value.trim();
  if(!comentario) return false;
  if(!usuarioLogado()){
    fecharModal('prodOverlay');
    renderAuth();
    abrirModal('authOverlay');
    toast('Entre na conta para enviar uma avaliação.');
    return false;
  }
  try{
    await chamarApi(`/api/produtos/${produtoId}/avaliacoes`, {
      method:'POST', body:JSON.stringify({ nota, comentario })
    });
    AVALIACOES = await chamarApi('/api/avaliacoes');
    toast('Avaliação enviada, obrigado!');
    abrirProduto(produtoId);
    renderProdutos();
  }catch(error){
    toast(error.message);
  }
  return false;
}

/* =====================================================================
   CARRINHO / ITENS_CARRINHO
   ===================================================================== */
// Inclui um produto no carrinho sem ultrapassar o estoque.
async function adicionarAoCarrinho(produtoId, quantidade){
  const produto = PRODUTOS.find(p=>p.id===produtoId);
  quantidade = Number(quantidade);
  if(!produto || produto.estoque===0 || !Number.isInteger(quantidade) || quantidade < 1) return;
  const item = state.carrinho.find(i=>i.produto_id===produtoId);
  if(item){ item.quantidade = Math.min(produto.estoque, item.quantidade+quantidade); }
  else{ state.carrinho.push({ produto_id:produtoId, quantidade:Math.min(quantidade, produto.estoque) }); }
  if(usuarioLogado()){
    try{
      const itemAtual = state.carrinho.find(itemCarrinho=>itemCarrinho.produto_id===produtoId);
      await chamarApi(`/api/carrinho/itens/${produtoId}`, {
        method:'PUT', body:JSON.stringify({ quantidade:itemAtual.quantidade })
      });
    }catch(error){
      toast(error.message);
      return;
    }
  }
  atualizarContadores();
  renderCarrinho();
  toast(`${produto.nome} adicionado ao carrinho`);
}

// Aumenta ou diminui um item do carrinho dentro do limite de estoque.
async function mudarQtdCarrinho(produtoId, delta){
  const produto = PRODUTOS.find(p=>p.id===produtoId);
  const item = state.carrinho.find(i=>i.produto_id===produtoId);
  if(!item) return;
  item.quantidade = Math.max(1, Math.min(produto.estoque, item.quantidade+delta));
  if(usuarioLogado()){
    try{
      await chamarApi(`/api/carrinho/itens/${produtoId}`, {
        method:'PUT', body:JSON.stringify({ quantidade:item.quantidade })
      });
    }catch(error){ toast(error.message); return; }
  }
  atualizarContadores();
  renderCarrinho();
}

// Remove completamente um produto do carrinho.
async function removerDoCarrinho(produtoId){
  if(usuarioLogado()){
    try{ await chamarApi(`/api/carrinho/itens/${produtoId}`, { method:'DELETE' }); }
    catch(error){ toast(error.message); return; }
  }
  state.carrinho = state.carrinho.filter(i=>i.produto_id!==produtoId);
  atualizarContadores();
  renderCarrinho();
}

// Soma preço e quantidade de todos os itens do carrinho.
function subtotalCarrinho(){
  return state.carrinho.reduce((s,i)=>{
    const p = PRODUTOS.find(pp=>pp.id===i.produto_id);
    return s + (p ? p.preco*i.quantidade : 0);
  },0);
}

// Atualiza itens, cupom, totais e botão de checkout do carrinho.
function renderCarrinho(){
  const itens = state.carrinho;
  $('#cartBody').innerHTML = itens.length ? itens.map(i=>{
    const p = PRODUTOS.find(pp=>pp.id===i.produto_id);
    return `
    <div class="cart-item" role="listitem">
      <div class="thumb-mini"><img class="imagem-produto" src="${p.imagem}" alt="" width="800" height="600"></div>
      <div class="cart-item-info">
        <div class="name">${p.nome}</div>
        <div class="price mono">${fmtMoeda(p.preco)}</div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button aria-label="Diminuir quantidade de ${p.nome}" onclick="mudarQtdCarrinho(${p.id},-1)">−</button>
            <span aria-live="polite" aria-atomic="true">${i.quantidade}</span>
            <button aria-label="Aumentar quantidade de ${p.nome}" onclick="mudarQtdCarrinho(${p.id},1)">+</button>
          </div>
          <button class="remove-link" onclick="removerDoCarrinho(${p.id})">Remover</button>
        </div>
      </div>
    </div>`;
  }).join('') : `<div class="empty-state"><h3>Carrinho vazio</h3><p>Adicione periféricos para continuar.</p></div>`;

  const subtotal = subtotalCarrinho();
  const desconto = state.cupomAplicado ? subtotal*(state.cupomAplicado.desconto/100) : 0;
  const total = subtotal - desconto;

  $('#cartFoot').innerHTML = `
    <div class="coupon-row">
      <label class="sr-only" for="cupomInput">Cupom de desconto</label>
      <input type="text" id="cupomInput" placeholder="Cupom de desconto" value="${state.cupomAplicado?state.cupomAplicado.codigo:''}" ${state.cupomAplicado?'disabled':''}>
      ${state.cupomAplicado
        ? `<button class="btn btn-ghost btn-sm" onclick="removerCupom()">Remover</button>`
        : `<button class="btn btn-ghost btn-sm" onclick="aplicarCupom()">Aplicar</button>`}
    </div>
    <div id="cupomMsg" role="status" aria-live="polite"></div>
    <div class="totais">
      <div class="linha"><span>Subtotal</span><span class="mono">${fmtMoeda(subtotal)}</span></div>
      ${state.cupomAplicado ? `<div class="linha"><span>Desconto (${state.cupomAplicado.codigo})</span><span class="mono">−${fmtMoeda(desconto)}</span></div>`:''}
      <div class="linha total"><span>Total</span><span class="mono">${fmtMoeda(total)}</span></div>
    </div>
    <button class="btn btn-primary btn-block" ${itens.length?'':'disabled'} onclick="iniciarCheckout()">Finalizar compra</button>
  `;
}

// Confere o código digitado e aplica o desconto correspondente.
async function aplicarCupom(){
  const val = $('#cupomInput').value.trim().toUpperCase();
  const msg = $('#cupomMsg');
  if(!val){ return; }
  try{
    const cupom = state.apiDisponivel
      ? await chamarApi(`/api/cupons/${encodeURIComponent(val)}`)
      : CUPONS.find(item=>item.codigo===val && item.ativo);
    if(!cupom) throw new Error('Cupom inválido ou expirado.');
    state.cupomAplicado = { codigo:cupom.codigo, desconto:cupom.desconto };
    renderCarrinho();
    toast(`Cupom ${cupom.codigo} aplicado (-${cupom.desconto}%)`);
  }catch(error){
    msg.textContent = error.message;
    msg.className = 'msg-inline erro';
    anunciar('Cupom inválido ou expirado.');
  }
}
// Limpa o cupom aplicado e recalcula o carrinho.
function removerCupom(){ state.cupomAplicado = null; renderCarrinho(); }

// Atualiza os números mostrados nos botões de carrinho e favoritos.
function atualizarContadores(){
  const totalItens = state.carrinho.reduce((s,i)=>s+i.quantidade,0);
  const cc = $('#cartCount'); cc.textContent = totalItens; cc.style.display = totalItens?'flex':'none';
  const fc = $('#favCount'); fc.textContent = state.favoritos.length; fc.style.display = state.favoritos.length?'flex':'none';
}

/* =====================================================================
   AUTENTICAÇÃO (usuarios)
   ===================================================================== */
// Procura o usuário atualmente identificado na sessão.
function usuarioLogado(){ return state.usuarios.find(u=>u.id===state.usuarioAtualId) || null; }

// Mostra o cadastro ou os dados da conta, conforme o estado atual.
function renderAuth(){
  const logado = usuarioLogado();
  $('#authLabel').textContent = logado ? logado.nome : 'Entrar';
  if(logado){
    const nomeCompleto = escaparHtml(`${logado.nome} ${logado.sobrenome}`.trim());
    const email = escaparHtml(logado.email);
    $('#authTitle').textContent = 'Minha conta';
    $('#authFormWrap').innerHTML = `
      <div class="form-grid single">
        <div class="field"><label for="contaNome">Nome</label><input id="contaNome" value="${nomeCompleto}" disabled></div>
        <div class="field"><label for="contaEmail">E-mail</label><input id="contaEmail" value="${email}" disabled></div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-ghost" onclick="fecharModal('authOverlay')">Fechar</button>
        <button class="btn btn-primary" onclick="sair()">Sair da conta</button>
      </div>`;
  } else {
    $('#authTitle').textContent = 'Entrar ou criar conta';
    $('#authFormWrap').innerHTML = `
      <form class="form-grid single" onsubmit="return entrarUsuario(event)">
        <div class="field"><label for="loginEmail">E-mail</label><input id="loginEmail" type="email" name="email" required></div>
        <div class="field"><label for="loginSenha">Senha</label><input id="loginSenha" type="password" name="senha" required minlength="8"></div>
        <button class="btn btn-primary btn-block" type="submit">Entrar</button>
      </form>
      <p class="auth-separator">Ou crie uma conta</p>
      <form class="form-grid" onsubmit="return cadastrarUsuario(event)">
        <div class="field"><label for="cadastroNome">Nome</label><input id="cadastroNome" name="nome" required></div>
        <div class="field"><label for="cadastroSobrenome">Sobrenome</label><input id="cadastroSobrenome" name="sobrenome"></div>
        <div class="field full"><label for="cadastroEmail">E-mail</label><input id="cadastroEmail" type="email" name="email" required></div>
        <div class="field"><label for="cadastroSenha">Senha</label><input id="cadastroSenha" type="password" name="senha" required minlength="8"></div>
        <div class="field"><label for="cadastroTelefone">Telefone</label><input id="cadastroTelefone" name="telefone" placeholder="(00) 00000-0000"></div>
        <div class="field"><label for="cadastroCpf">CPF</label><input id="cadastroCpf" name="cpf" placeholder="000.000.000-00"></div>
        <div class="field"><label for="cadastroNascimento">Data de nascimento</label><input id="cadastroNascimento" type="date" name="data_nascimento"></div>
        <div class="field full" style="margin-top:.3rem;">
          <button class="btn btn-primary btn-block" type="submit">Criar conta e entrar</button>
        </div>
      </form>`;
  }
}

async function atualizarInterfaceAposLogin(usuario){
  const carrinhoConvidado = [...state.carrinho];
  state.usuarios = [usuario];
  state.usuarioAtualId = usuario.id;
  await carregarDadosDoUsuario();
  for(const item of carrinhoConvidado){
    const itemSalvo = state.carrinho.find(atual=>atual.produto_id===item.produto_id);
    const quantidade = itemSalvo ? itemSalvo.quantidade + item.quantidade : item.quantidade;
    const produto = PRODUTOS.find(atual=>atual.id===item.produto_id);
    await chamarApi(`/api/carrinho/itens/${item.produto_id}`, {
      method:'PUT', body:JSON.stringify({ quantidade:Math.min(quantidade, produto.estoque) })
    });
  }
  if(carrinhoConvidado.length) await carregarDadosDoUsuario();
  sincronizarControlesA11y();
  aplicarAcessibilidade();
  renderAuth();
  renderCarrinho();
  renderFavoritos();
  renderPedidos();
  atualizarContadores();
}

// Cadastra o usuário no banco e usa a sessão criada pelo servidor.
async function cadastrarUsuario(ev){
  ev.preventDefault();
  const f = ev.target;
  const novo = {
    nome: f.nome.value.trim(), sobrenome: f.sobrenome.value.trim(),
    email: f.email.value.trim(), senha: f.senha.value,
    telefone: f.telefone.value, cpf: f.cpf.value,
    data_nascimento: f.data_nascimento.value
  };
  try{
    const usuario = await chamarApi('/api/auth/cadastro', { method:'POST', body:JSON.stringify(novo) });
    await atualizarInterfaceAposLogin(usuario);
    fecharModal('authOverlay');
    toast(`Bem-vindo(a), ${usuario.nome}!`);
  }catch(error){ toast(error.message); }
  return false;
}

async function entrarUsuario(ev){
  ev.preventDefault();
  const formulario = ev.target;
  try{
    const usuario = await chamarApi('/api/auth/login', {
      method:'POST',
      body:JSON.stringify({ email:formulario.email.value.trim(), senha:formulario.senha.value })
    });
    await atualizarInterfaceAposLogin(usuario);
    fecharModal('authOverlay');
    toast(`Bem-vindo(a), ${usuario.nome}!`);
  }catch(error){ toast(error.message); }
  return false;
}

async function sair(){
  try{ await chamarApi('/api/auth/logout', { method:'POST' }); }
  catch(error){ toast(error.message); return; }
  state.usuarios = [];
  state.usuarioAtualId = null;
  state.favoritos = [];
  state.carrinho = [];
  state.pedidos = [];
  renderAuth();
  renderCarrinho();
  renderFavoritos();
  renderPedidos();
  atualizarContadores();
  fecharModal('authOverlay');
  toast('Você saiu da conta.');
}

/* =====================================================================
   CHECKOUT (enderecos, pedidos, itens_pedido, pagamentos, pedido_cupom)
   ===================================================================== */
// Inicia o checkout quando existe pelo menos um item no carrinho.
function iniciarCheckout(){
  if(!state.carrinho.length) return;
  if(!usuarioLogado()){
    fecharDrawer();
    renderAuth();
    abrirModal('authOverlay');
    toast('Entre na conta antes de finalizar a compra.');
    return;
  }
  fecharDrawer();
  renderCheckoutEndereco();
  abrirModal('checkoutOverlay');
}

// Mostra o formulário de endereço da compra simulada.
function renderCheckoutEndereco(){
  $('#checkoutContent').innerHTML = `
    <div class="modal-title-bar"><h2 id="checkoutTitle" tabindex="-1">Endereço de entrega</h2><p>Para onde enviamos seu pedido?</p></div>
    <form class="form-grid" id="formEndereco" onsubmit="return salvarEnderecoEIrPagamento(event)">
      <div class="field"><label for="enderecoApelido">Apelido</label><input id="enderecoApelido" name="apelido" placeholder="Casa, Trabalho…" required></div>
      <div class="field"><label for="enderecoCep">CEP</label><input id="enderecoCep" name="cep" required placeholder="00000-000"></div>
      <div class="field full"><label for="enderecoLogradouro">Logradouro</label><input id="enderecoLogradouro" name="logradouro" required></div>
      <div class="field"><label for="enderecoNumero">Número</label><input id="enderecoNumero" name="numero" required></div>
      <div class="field"><label for="enderecoComplemento">Complemento</label><input id="enderecoComplemento" name="complemento"></div>
      <div class="field"><label for="enderecoBairro">Bairro</label><input id="enderecoBairro" name="bairro" required></div>
      <div class="field"><label for="enderecoCidade">Cidade</label><input id="enderecoCidade" name="cidade" required></div>
      <div class="field"><label for="enderecoEstado">Estado (UF)</label><input id="enderecoEstado" name="estado" maxlength="2" required></div>
      <div class="modal-actions" style="grid-column:1/-1;">
        <button type="button" class="btn btn-ghost" onclick="fecharModal('checkoutOverlay')">Cancelar</button>
        <button type="submit" class="btn btn-primary">Continuar para pagamento</button>
      </div>
    </form>`;
  if($('#checkoutOverlay').classList.contains('open')) focarElemento('checkoutTitle');
}

// Salva o endereço na memória e avança para a escolha de pagamento.
function salvarEnderecoEIrPagamento(ev){
  ev.preventDefault();
  const f = ev.target;
  const endereco = {
    id: state.enderecos.length+1,
    apelido:f.apelido.value, cep:f.cep.value, logradouro:f.logradouro.value,
    numero:f.numero.value, complemento:f.complemento.value, bairro:f.bairro.value,
    cidade:f.cidade.value, estado:f.estado.value.toUpperCase(), principal:true
  };
  state.enderecos.push(endereco);
  renderCheckoutPagamento(endereco);
  return false;
}

// Mostra pagamento, endereço e resumo dos valores do pedido.
function renderCheckoutPagamento(endereco){
  const subtotal = subtotalCarrinho();
  const desconto = state.cupomAplicado ? subtotal*(state.cupomAplicado.desconto/100) : 0;
  const total = subtotal - desconto;
  const logradouro = escaparHtml(endereco.logradouro);
  const numero = escaparHtml(endereco.numero);
  const cidade = escaparHtml(endereco.cidade);
  const estado = escaparHtml(endereco.estado);
  $('#checkoutContent').innerHTML = `
    <div class="modal-title-bar"><h2 id="checkoutTitle" tabindex="-1">Pagamento simulado</h2><p>Entrega em: ${logradouro}, ${numero} — ${cidade}/${estado}</p></div>
    <div class="pay-methods" role="radiogroup" aria-label="Forma de pagamento" style="margin-top:1rem;">
      <label><input type="radio" name="metodo" value="cartao" checked><span>💳 Cartão</span></label>
      <label><input type="radio" name="metodo" value="pix"><span>⚡ Pix</span></label>
      <label><input type="radio" name="metodo" value="boleto"><span>🧾 Boleto</span></label>
    </div>
    <div class="totais" style="padding:1.2rem 1.8rem 0;">
      <div class="linha"><span>Subtotal</span><span class="mono">${fmtMoeda(subtotal)}</span></div>
      ${state.cupomAplicado?`<div class="linha"><span>Desconto</span><span class="mono">−${fmtMoeda(desconto)}</span></div>`:''}
      <div class="linha total"><span>Total a pagar</span><span class="mono">${fmtMoeda(total)}</span></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="renderCheckoutEndereco()">Voltar</button>
      <button class="btn btn-primary" onclick="finalizarPedido(${endereco.id})">Confirmar pedido</button>
    </div>`;
  focarElemento('checkoutTitle');
}

// Envia o pedido ao servidor, que valida e reduz o estoque em uma transação.
async function finalizarPedido(enderecoId){
  const metodo = document.querySelector('input[name="metodo"]:checked')?.value || 'cartao';
  const endereco = state.enderecos.find(item=>item.id===enderecoId);
  const itens = state.carrinho.map(item=>({ produto_id:item.produto_id, quantidade:item.quantidade }));
  let pedido;
  try{
    pedido = await chamarApi('/api/pedidos', {
      method:'POST',
      body:JSON.stringify({
        itens,
        cupom_codigo:state.cupomAplicado?.codigo,
        endereco,
        metodo_pagamento:metodo
      })
    });
    PRODUTOS = await chamarApi('/api/produtos');
    await carregarDadosDoUsuario();
    state.cupomAplicado = null;
    atualizarContadores();
    renderHero();
    renderProdutos();
    renderCarrinho();
    renderPedidos();
  }catch(error){
    toast(error.message);
    return;
  }

  $('#checkoutContent').innerHTML = `
    <div class="confirm-box">
      <div class="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"/></svg></div>
      <h2 id="pedidoConfirmadoTitulo" tabindex="-1">Pedido confirmado!</h2>
      <div class="order-id">#${pedido.id}</div>
      <p>Pagamento simulado via ${metodo === 'pix' ? 'Pix' : metodo === 'boleto' ? 'boleto' : 'cartão'} no valor de ${fmtMoeda(pedido.valor_total)}. Você pode acompanhar o status em "Meus pedidos".</p>
      <button class="btn btn-primary" style="margin-top:1.4rem;" onclick="fecharModal('checkoutOverlay')">Continuar comprando</button>
    </div>`;
  focarElemento('pedidoConfirmadoTitulo');
  toast(`Pedido #${pedido.id} realizado com sucesso!`);
}

// Mostra os pedidos criados durante a sessão atual.
function renderPedidos(){
  const box = $('#listaPedidos');
  if(!state.pedidos.length){
    box.innerHTML = `<div class="empty-state"><h3>Nenhum pedido ainda</h3><p>Seus pedidos aparecerão aqui depois da compra.</p></div>`;
    return;
  }
  box.innerHTML = state.pedidos.map(pedido=>{
    const endereco = pedido.endereco_entrega || state.enderecos.find(item=>item.id===pedido.endereco_id);
    const itensHtml = pedido.itens.map(item=>{
      const produto = PRODUTOS.find(produtoAtual=>produtoAtual.id===item.produto_id);
      return `<div class="linha"><span>${item.quantidade}× ${produto?.nome || item.nome}</span><span class="mono">${fmtMoeda(item.preco_unitario*item.quantidade)}</span></div>`;
    }).join('');
    return `
    <div class="card" style="padding:1.2rem 1.4rem;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem;flex-wrap:wrap;gap:.5rem;">
        <strong class="mono" style="color:#fff;">Pedido #${pedido.id}</strong>
        <span class="mono" style="color:var(--cyan);text-transform:uppercase;font-size:.75rem;">${pedido.status}</span>
      </div>
      <div class="totais">${itensHtml}
        <div class="linha total"><span>Total</span><span class="mono">${fmtMoeda(pedido.valor_total)}</span></div>
      </div>
      ${endereco?`<p style="font-size:.78rem;color:var(--text-muted);margin-top:.6rem;">Entrega: ${escaparHtml(endereco.logradouro)}, ${escaparHtml(endereco.numero)} — ${escaparHtml(endereco.cidade)}/${escaparHtml(endereco.estado)}</p>`:''}
    </div>`;
  }).join('');
}

/* =====================================================================
   MODAIS / DRAWER — abrir/fechar
   ===================================================================== */
// Impede que o teclado e o leitor acessem o conteúdo atrás de uma janela aberta.
function definirFundoInerte(inativo){
  $$('header, main, footer, #btnA11y, #a11yPanel').forEach(elemento=>{
    elemento.inert = inativo;
  });
}

// Move o foco para um título depois que um conteúdo dinâmico é atualizado.
function focarElemento(id){
  requestAnimationFrame(()=>$('#'+id)?.focus());
}

// Abre uma janela, leva o foco para ela e guarda o foco anterior.
function abrirModal(idOverlay){
  const overlay = $('#'+idOverlay);
  if(overlay.classList.contains('open')) return;
  state.focoAnterior = document.activeElement;
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  definirFundoInerte(true);
  requestAnimationFrame(()=>overlay.querySelector('button, input, select, textarea, a[href]')?.focus());
}

// Fecha uma janela e devolve o foco ao controle que a abriu.
function fecharModal(idOverlay){
  const overlay = $('#'+idOverlay);
  if(!overlay.classList.contains('open')) return;
  overlay.classList.remove('open');
  definirFundoInerte(false);
  if(state.focoAnterior?.isConnected) state.focoAnterior.focus();
  overlay.setAttribute('aria-hidden', 'true');
  state.focoAnterior = null;
}

// Abre o carrinho lateral e move o foco para o botão de fechar.
function abrirDrawer(){
  const drawer = $('#cartDrawer');
  if(drawer.classList.contains('open')) return;
  state.focoAnterior = document.activeElement;
  drawer.inert = false;
  drawer.setAttribute('aria-hidden', 'false');
  drawer.classList.add('open');
  $('#cartOverlay').classList.add('open');
  definirFundoInerte(true);
  requestAnimationFrame(()=>$('#btnCloseCart').focus());
}

// Fecha o carrinho lateral e devolve o foco ao botão anterior.
function fecharDrawer(){
  const drawer = $('#cartDrawer');
  if(!drawer.classList.contains('open')) return;
  drawer.classList.remove('open');
  $('#cartOverlay').classList.remove('open');
  definirFundoInerte(false);
  if(state.focoAnterior?.isConnected) state.focoAnterior.focus();
  drawer.setAttribute('aria-hidden', 'true');
  drawer.inert = true;
  state.focoAnterior = null;
}

/* =====================================================================
   NAVEGAÇÃO ENTRE VIEWS
   ===================================================================== */
// Alterna entre catálogo, ofertas, favoritos e pedidos.
function irPara(view){
  state.viewAtiva = view;
  ['loja','favoritos','pedidos'].forEach(v=>{
    document.getElementById('view-'+v).style.display = (v===view) ? '' : 'none';
  });
  $$('#mainNav button').forEach(botao=>{
    const paginaAtual = botao.dataset.view===view;
    botao.classList.toggle('active', paginaAtual);
    if(paginaAtual) botao.setAttribute('aria-current', 'page');
    else botao.removeAttribute('aria-current');
  });
  if(view==='loja'){ renderProdutos(); }
  if(view==='ofertas'){ state.categoriaAtiva=null; renderCategorias(); renderProdutos(); document.getElementById('view-loja').style.display=''; }
  if(view==='favoritos') renderFavoritos();
  if(view==='pedidos') renderPedidos();
  window.scrollTo({top:0,behavior: state.a11y.reduzir_animacoes ? 'auto' : 'smooth'});
}

/* =====================================================================
   ACESSIBILIDADE (tabela: acessibilidade)
   ===================================================================== */
// Aplica ao documento as preferências escolhidas no painel.
function aplicarAcessibilidade(){
  const b = document.body;
  b.classList.toggle('contraste-alto', state.a11y.alto_contraste);
  b.classList.toggle('modo-claro', !state.a11y.modo_escuro);
  document.documentElement.classList.toggle('sem-animacao', state.a11y.reduzir_animacoes);
  b.classList.toggle('leitor-tela', state.a11y.leitor_tela);
  const escalas = { pequena:.9, media:1, grande:1.15, extra:1.32 };
  document.documentElement.style.fontSize = `${escalas[state.a11y.tamanho_fonte] * 100}%`;
}

function sincronizarControlesA11y(){
  $('#tglContraste').checked = state.a11y.alto_contraste;
  $('#tglEscuro').checked = state.a11y.modo_escuro;
  $('#tglAnimacoes').checked = state.a11y.reduzir_animacoes;
  $('#tglLeitor').checked = state.a11y.leitor_tela;
  $('#tglLeituraVoz').checked = state.a11y.leitura_voz;
  $('#btnPararLeitura').disabled = !state.a11y.leitura_voz;
  $('#selFonte').value = state.a11y.tamanho_fonte;
}

async function salvarPreferenciasAcessibilidade(){
  if(!usuarioLogado()) return;
  try{
    await chamarApi('/api/acessibilidade', {
      method:'PUT', body:JSON.stringify(state.a11y)
    });
  }catch(error){
    toast(error.message);
  }
}

// Fecha o painel de acessibilidade e sincroniza seu estado anunciado.
function fecharPainelAcessibilidade(devolverFoco){
  const painel = $('#a11yPanel');
  if(!painel.classList.contains('open')) return;
  painel.classList.remove('open');
  $('#btnA11y').setAttribute('aria-expanded', 'false');
  if(devolverFoco) $('#btnA11y').focus();
}

// Encontra o nome que identifica o controle para o usuário.
function obterTextoParaLeitura(elemento){
  if(!elemento || elemento.closest('[aria-hidden="true"], [hidden], [inert]')) return '';
  if(elemento.matches('input[type="password"]')) return '';

  let texto = elemento.getAttribute('aria-label')?.trim();

  if(!texto && elemento.id){
    texto = document.querySelector(`label[for="${elemento.id}"]`)?.textContent.trim();
  }
  if(!texto) texto = elemento.closest('label')?.textContent.trim();
  if(!texto && elemento instanceof HTMLImageElement) texto = elemento.alt.trim();
  if(!texto) texto = elemento.textContent.trim();
  if(!texto) texto = elemento.getAttribute('title')?.trim();

  if(elemento instanceof HTMLSelectElement){
    const opcao = elemento.selectedOptions[0]?.textContent.trim();
    if(opcao && texto && !texto.includes(opcao)) texto += `: ${opcao}`;
    else if(opcao && !texto) texto = opcao;
  }

  return texto ? texto.replace(/\s+/g, ' ').trim() : '';
}

function pararLeitura(){
  if('speechSynthesis' in window) window.speechSynthesis.cancel();
}

// Cancela a fala anterior para não acumular mensagens.
function falarTexto(texto){
  if(!state.a11y.leitura_voz || !texto) return;
  pararLeitura();
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = 'pt-BR';
  fala.rate = 1;
  fala.pitch = 1;
  fala.volume = 1;
  window.speechSynthesis.speak(fala);
}

function ativarLeituraPorVoz(){
  state.a11y.leitura_voz = true;
  $('#btnPararLeitura').disabled = false;
  falarTexto('Leitura por voz ativada');
  anunciar('Leitura por voz ativada');
  salvarPreferenciasAcessibilidade();
}

function desativarLeituraPorVoz(){
  state.a11y.leitura_voz = false;
  $('#tglLeituraVoz').checked = false;
  $('#btnPararLeitura').disabled = true;
  pararLeitura();
  state.ultimoElementoLido = null;
  anunciar('Leitura por voz desativada');
  salvarPreferenciasAcessibilidade();
}

function lerElementoInteragido(evento){
  if(!state.a11y.leitura_voz || !(evento.target instanceof Element)) return;

  const elemento = evento.target.closest('button, a[href], input, select, textarea')
    || evento.target.closest('img[alt]');
  if(!elemento || elemento.id === 'tglLeituraVoz') return;

  const agora = Date.now();
  const cliqueRepetido = evento.type === 'click'
    && elemento === state.ultimoElementoLido
    && agora - state.momentoUltimaLeitura < 700;
  if(cliqueRepetido) return;

  const texto = obterTextoParaLeitura(elemento);
  if(!texto) return;
  state.ultimoElementoLido = elemento;
  state.momentoUltimaLeitura = agora;
  falarTexto(texto);
}

// Os eventos no documento também alcançam produtos renderizados depois.
function ligarLeituraPorVoz(){
  const controle = $('#tglLeituraVoz');
  const possuiSuporte = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;

  if(!possuiSuporte){
    controle.disabled = true;
    $('#descLeituraVoz').textContent = 'Não disponível neste navegador';
    return;
  }

  controle.addEventListener('change', ()=>{
    if(controle.checked) ativarLeituraPorVoz();
    else desativarLeituraPorVoz();
  });
  $('#btnPararLeitura').addEventListener('click', desativarLeituraPorVoz);
  document.addEventListener('focusin', lerElementoInteragido);
  document.addEventListener('click', lerElementoInteragido);
}

// Liga os controles do painel às respectivas preferências.
function ligarControlesA11y(){
  $('#tglContraste').addEventListener('change', e=>{ state.a11y.alto_contraste = e.target.checked; aplicarAcessibilidade(); salvarPreferenciasAcessibilidade(); anunciar('Alto contraste ' + (e.target.checked?'ativado':'desativado')); });
  $('#tglEscuro').addEventListener('change', e=>{ state.a11y.modo_escuro = e.target.checked; aplicarAcessibilidade(); salvarPreferenciasAcessibilidade(); anunciar('Modo escuro ' + (e.target.checked?'ativado':'desativado')); });
  $('#tglAnimacoes').addEventListener('change', e=>{ state.a11y.reduzir_animacoes = e.target.checked; aplicarAcessibilidade(); salvarPreferenciasAcessibilidade(); anunciar('Redução de animações ' + (e.target.checked?'ativada':'desativada')); });
  $('#tglLeitor').addEventListener('change', e=>{ state.a11y.leitor_tela = e.target.checked; aplicarAcessibilidade(); salvarPreferenciasAcessibilidade(); anunciar('Apoio visual ao leitor de tela ' + (e.target.checked?'ativado':'desativado')); });
  $('#selFonte').addEventListener('change', e=>{ state.a11y.tamanho_fonte = e.target.value; aplicarAcessibilidade(); salvarPreferenciasAcessibilidade(); anunciar('Tamanho da fonte: ' + e.target.options[e.target.selectedIndex].text); });

  $('#btnResetA11y').addEventListener('click', ()=>{
    state.a11y = { alto_contraste:false, modo_escuro:true, tamanho_fonte:'media', reduzir_animacoes:false, leitor_tela:false, leitura_voz:false };
    $('#tglContraste').checked = false;
    $('#tglEscuro').checked = true;
    $('#tglAnimacoes').checked = false;
    $('#tglLeitor').checked = false;
    $('#tglLeituraVoz').checked = false;
    $('#btnPararLeitura').disabled = true;
    $('#selFonte').value = 'media';
    pararLeitura();
    state.ultimoElementoLido = null;
    aplicarAcessibilidade();
    salvarPreferenciasAcessibilidade();
    toast('Preferências de acessibilidade restauradas');
  });

  const fab = $('#btnA11y'), panel = $('#a11yPanel');
  fab.addEventListener('click', ()=>{
    const abrir = !panel.classList.contains('open');
    panel.classList.toggle('open', abrir);
    fab.setAttribute('aria-expanded', abrir);
  });
  document.addEventListener('click', e=>{
    if(!panel.contains(e.target) && !fab.contains(e.target)) fecharPainelAcessibilidade(false);
  });
}

/* =====================================================================
   LIGAÇÕES GERAIS DE EVENTOS
   ===================================================================== */
// Registra os eventos gerais usados pela navegação e pelos painéis.
function ligarEventos(){
  $$('#mainNav button').forEach(b=> b.addEventListener('click', ()=> irPara(b.dataset.view)) );
  $('#btnCart').addEventListener('click', abrirDrawer);
  $('#btnCloseCart').addEventListener('click', fecharDrawer);
  $('#cartOverlay').addEventListener('click', fecharDrawer);
  $('#btnFavoritosTop').addEventListener('click', ()=>irPara('favoritos'));

  $('#btnAuth').addEventListener('click', ()=>{ renderAuth(); abrirModal('authOverlay'); });
  $('#btnCloseAuth').addEventListener('click', ()=>fecharModal('authOverlay'));
  $('#authOverlay').addEventListener('click', e=>{ if(e.target.id==='authOverlay') fecharModal('authOverlay'); });

  $('#prodOverlay').addEventListener('click', e=>{ if(e.target.id==='prodOverlay') fecharModal('prodOverlay'); });
  $('#checkoutOverlay').addEventListener('click', e=>{ if(e.target.id==='checkoutOverlay') fecharModal('checkoutOverlay'); });
  $('#btnCloseCheckout').addEventListener('click', ()=>fecharModal('checkoutOverlay'));

  document.addEventListener('keydown', e=>{
    if(e.key==='Escape'){
      fecharModal('prodOverlay'); fecharModal('authOverlay'); fecharModal('checkoutOverlay'); fecharDrawer();
      fecharPainelAcessibilidade(true);
      pararLeitura();
    }
  });

  $('#searchInput').addEventListener('input', e=>{ state.buscaAtual = e.target.value; renderProdutos(); });
  $('#filtroMarca').addEventListener('change', e=>{ state.filtroMarca = e.target.value; renderProdutos(); });
  $('#filtroOrdem').addEventListener('change', e=>{ state.filtroOrdem = e.target.value; renderProdutos(); });

  // ping fake, sutil, reforça identidade "gamer"
  setInterval(()=>{
    if(state.a11y.reduzir_animacoes) return;
    $('#pingVal').textContent = (Math.floor(Math.random()*8)+9)+'ms';
  }, 3200);
}

/* =====================================================================
   INICIALIZAÇÃO
   ===================================================================== */
// Monta a interface e ativa os eventos quando o arquivo é carregado.
async function init(){
  const carregouApi = await carregarCatalogoDaApi();
  if(!carregouApi && location.protocol.startsWith('http')){
    toast('A API não respondeu. Exibindo os dados locais de reserva.');
  }
  renderHero();
  renderCategorias();
  popularFiltroMarcas();
  renderProdutos();
  renderCarrinho();
  renderFavoritos();
  renderPedidos();
  renderAuth();
  atualizarContadores();
  ligarEventos();
  ligarControlesA11y();
  ligarLeituraPorVoz();
  sincronizarControlesA11y();
  aplicarAcessibilidade();
}
init();
