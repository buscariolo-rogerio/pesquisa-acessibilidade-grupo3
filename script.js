const ICONS = {
  mouse: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="2" width="12" height="20" rx="6"/><path d="M12 2v8"/></svg>`,
  keyboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M18 13h.01M9 13h6"/></svg>`,
  headset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 13a9 9 0 0118 0"/><rect x="2" y="13" width="5" height="7" rx="1.5"/><rect x="17" y="13" width="5" height="7" rx="1.5"/><path d="M21 19v1a3 3 0 01-3 3h-2"/></svg>`,
  monitor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="4" width="20" height="13" rx="1.5"/><path d="M8 21h8M12 17v4"/></svg>`,
  chair: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h12l-1 8H7L6 3zM5 11h14l-1.5 6a2 2 0 01-2 1.6H8.5A2 2 0 016.5 17L5 11zM7 18l-1.5 4M17 18l1.5 4"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8h4M8 6v4M15.5 9.5h.01M18 12h.01"/><path d="M17.32 5H6.68a4 4 0 00-3.94 3.33l-.9 5.4A3 3 0 004.8 17.4 3 3 0 007 16.2l1.2-1.7a2 2 0 011.6-.8h4.4a2 2 0 011.6.8l1.2 1.7a3 3 0 002.2 1.2 3 3 0 002.94-3.67l-.9-5.4A4 4 0 0017.32 5z"/></svg>`
};
const iconFor = cid => ICONS[CATEGORIAS.find(c=>c.id===cid)?.icone] || ICONS.mouse;

/* ---------- Tabela: categorias - Remover apos back existir ---------- */
const CATEGORIAS = [
  { id:1, nome:'Mouses',    icone:'mouse',    descricao:'Precisão e velocidade para cada clique.' },
  { id:2, nome:'Teclados',  icone:'keyboard', descricao:'Switches, RGB e resposta instantânea.' },
  { id:3, nome:'Headsets',  icone:'headset',  descricao:'Áudio imersivo e microfone nítido.' },
  { id:4, nome:'Monitores', icone:'monitor',  descricao:'Taxas de atualização para reflexos reais.' },
  { id:5, nome:'Cadeiras',  icone:'chair',    descricao:'Conforto para sessões longas.' },
  { id:6, nome:'Controles', icone:'gamepad',  descricao:'Ergonomia sem fio para qualquer plataforma.' },
];

/* ---------- Tabela: marcas  -  remover apos back existir --------- */
const MARCAS = [
  { id:1, nome:'Kryolith' },
  { id:2, nome:'VoltEdge' },
  { id:3, nome:'ArcPoint' },
  { id:4, nome:'Obsidian Tech' },
  { id:5, nome:'Nyxa' },
];

/* ---------- Tabela: produtos (+ specs de exibição) - Remover apos back existi ---------- */
const PRODUTOS = [
  { id:1,  categoria_id:1, marca_id:1, nome:'Viper Edge X1',      descricao:'Mouse leve para FPS competitivo, sensor óptico de alta precisão e switches ópticos de resposta instantânea.', preco:249.90, estoque:34, destaque:true,  ativo:true, specs:'8000 DPI · 1000Hz · 62g' },
  { id:2,  categoria_id:1, marca_id:2, nome:'Aegis Mini',          descricao:'Compacto e sem fio, ideal para quem prefere pegada garra com o mínimo de peso possível.', preco:179.90, estoque:12, destaque:false, ativo:true, specs:'16000 DPI · 8000Hz · 55g' },
  { id:13, categoria_id:1, marca_id:3, nome:'Glide XXL',           descricao:'Mousepad de superfície emborrachada, base antiderrapante e costura reforçada nas bordas.', preco:89.90,  estoque:60, destaque:false, ativo:true, specs:'900×400mm · Base antiderrapante' },
  { id:3,  categoria_id:2, marca_id:3, nome:'Kinetic TKL',         descricao:'Teclado tamanho compacto com switches ópticos hot-swap e iluminação RGB por tecla.', preco:399.90, estoque:20, destaque:false, ativo:true, specs:'Switches ópticos · Hot-swap · RGB' },
  { id:4,  categoria_id:2, marca_id:4, nome:'Cipher 60%',          descricao:'Layout 60% com gasket mount para um som e toque premium, perfeito para setups minimalistas.', preco:329.90, estoque:8,  destaque:false, ativo:true, specs:'60% · Gasket mount · RGB' },
  { id:5,  categoria_id:3, marca_id:5, nome:'Aurora 7.1',          descricao:'Headset com áudio surround virtual 7.1 e microfone retrátil com cancelamento de ruído.', preco:299.90, estoque:25, destaque:false, ativo:true, specs:'7.1 Surround · Mic retrátil · 40mm' },
  { id:6,  categoria_id:3, marca_id:1, nome:'Wraith Pro',          descricao:'Sem fio de baixa latência com até 40h de bateria e drivers de 50mm para graves potentes.', preco:459.90, estoque:15, destaque:true,  ativo:true, specs:'Wireless 2.4GHz · 40h bateria' },
  { id:14, categoria_id:3, marca_id:4, nome:'Echo Lite',           descricao:'Headset estéreo confortável para o dia a dia, com almofadas em memory foam.', preco:149.90, estoque:40, destaque:false, ativo:true, specs:'Estéreo · Memory foam' },
  { id:7,  categoria_id:4, marca_id:2, nome:'Prisma 27 240Hz',     descricao:'Monitor QHD de 27 polegadas com 240Hz e 1ms de resposta para competitivo de alto nível.', preco:1899.00, estoque:9,  destaque:false, ativo:true, specs:'27" QHD · 240Hz · 1ms' },
  { id:8,  categoria_id:4, marca_id:3, nome:'Nova 24 165Hz',       descricao:'Monitor Full HD custo-benefício com 165Hz, ótimo ponto de entrada para upgrade de tela.', preco:1199.00, estoque:14, destaque:false, ativo:true, specs:'24" FHD · 165Hz · 1ms' },
  { id:9,  categoria_id:5, marca_id:4, nome:'Orion Flex',          descricao:'Cadeira ergonômica com reclínio de 165° e apoio lombar ajustável para longas sessões.', preco:1599.00, estoque:6,  destaque:false, ativo:true, specs:'Reclínio 165° · Apoio lombar' },
  { id:10, categoria_id:5, marca_id:5, nome:'Titan Racer',         descricao:'Estilo racing em couro sintético, com ajuste 4D de braços e base reforçada.', preco:2199.00, estoque:4,  destaque:false, ativo:true, specs:'Couro sintético · Ajuste 4D' },
  { id:11, categoria_id:6, marca_id:1, nome:'Pulse GC',            descricao:'Controle sem fio com gatilhos adaptativos e resposta háptica para imersão total.', preco:349.90, estoque:18, destaque:false, ativo:true, specs:'Wireless · Gatilhos adaptativos' },
  { id:12, categoria_id:6, marca_id:2, nome:'Drift X',             descricao:'Controle Bluetooth multiplataforma com giroscópio embutido e bateria de longa duração.', preco:279.90, estoque:0,  destaque:false, ativo:true, specs:'Bluetooth · Giroscópio' },
];

/* ---------- Tabela: avaliacoes (seed) ---------- */
let AVALIACOES = [
  { id:1, usuario_id:1, produto_id:1, nome_usuario:'Rafa_BR', nota:5, comentario:'Sensor perfeito, zero acceleration perceptível.' },
  { id:2, usuario_id:2, produto_id:1, nome_usuario:'Ju.Silva', nota:4, comentario:'Ótimo mouse, só achei o clique um pouco alto.' },
  { id:3, usuario_id:3, produto_id:6, nome_usuario:'Kaduh',    nota:5, comentario:'Bateria dura muito, uso a semana toda sem carregar.' },
  { id:4, usuario_id:1, produto_id:3, nome_usuario:'Rafa_BR', nota:4, comentario:'RGB lindo, hot-swap facilitou trocar os switches.' },
  { id:5, usuario_id:4, produto_id:7, nome_usuario:'Mira.gg',  nota:5, comentario:'Diferença absurda de fluidez comparado ao 60Hz antigo.' },
];

/* ---------- Tabela: cupons ---------- */
const CUPONS = [
  { id:1, codigo:'NEXUS10',   desconto:10, ativo:true },
  { id:2, codigo:'BEMVINDO15', desconto:15, ativo:true },
];

/* ---------- Estado em memória (usuarios, carrinhos, favoritos, pedidos...) ---------- */
const state = {
  usuarios: [
    { id:1, nome:'Convidado', sobrenome:'', email:'', senha:'', telefone:'', cpf:'', nivel:'cliente' }
  ],
  usuarioAtualId: null, // null = não logado
  enderecos: [],
  carrinho: [],      // { produto_id, quantidade }
  favoritos: [],     // produto_id[]
  pedidos: [],       // { id, itens, endereco, metodo, cupom, total, status, data }
  cupomAplicado: null,
  categoriaAtiva: null,
  buscaAtual: '',
  filtroMarca: '',
  filtroOrdem: 'relevancia',
  a11y: {
    alto_contraste:false,
    modo_escuro:true,
    tamanho_fonte:'media',
    reduzir_animacoes:false,
    leitor_tela:false
  }
};

const fmtMoeda = v => v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

function anunciar(msg){
  const live = document.getElementById('liveRegion');
  live.textContent = '';
  requestAnimationFrame(()=>{ live.textContent = msg; });
}

function toast(msg){
  const t = $('#toast');
  t.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span>${msg}</span>`;
  t.classList.add('show');
  clearTimeout(toast._tm);
  toast._tm = setTimeout(()=>t.classList.remove('show'), 2600);
  anunciar(msg);
}

/* =====================================================================
   HERO
   ===================================================================== */
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
        <div class="device-tile">${iconFor(destaque.categoria_id)}</div>
      </div>
    </div>`;
}

/* =====================================================================
   CATEGORIAS
   ===================================================================== */
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
function popularFiltroMarcas(){
  const sel = $('#filtroMarca');
  sel.innerHTML = '<option value="">Todas as marcas</option>' +
    MARCAS.map(m=>`<option value="${m.id}">${m.nome}</option>`).join('');
}

function mediaAvaliacao(produtoId){
  const lista = AVALIACOES.filter(a=>a.produto_id===produtoId);
  if(!lista.length) return null;
  return lista.reduce((s,a)=>s+a.nota,0) / lista.length;
}

function produtosFiltrados(){
  let lista = PRODUTOS.filter(p=>p.ativo);
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
function estrelas(media){
  if(media===null) return `<span class="card-rating">Sem avaliações</span>`;
  return `<span class="card-rating"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1z"/></svg> ${media.toFixed(1)} · ${AVALIACOES.filter(a=>a.produto_id).length ? AVALIACOES.filter(a=>a.produto_id).length : ''}</span>`;
}

function cardProduto(p){
  const marca = MARCAS.find(m=>m.id===p.marca_id)?.nome || '';
  const media = mediaAvaliacao(p.id);
  const nAval = AVALIACOES.filter(a=>a.produto_id===p.id).length;
  const isFav = state.favoritos.includes(p.id);
  const estoqueTxt = p.estoque===0 ? '<span class="card-stock out">Sem estoque</span>'
    : p.estoque<=5 ? `<span class="card-stock low">Só ${p.estoque} em estoque</span>`
    : `<span class="card-stock">Em estoque</span>`;
  return `
  <article class="card">
    <div class="card-media">
      ${p.destaque?'<span class="tag-destaque">Destaque</span>':''}
      <button class="fav-btn ${isFav?'active':''}" aria-pressed="${isFav}" aria-label="${isFav?'Remover dos favoritos':'Adicionar aos favoritos'}" onclick="toggleFavorito(${p.id})">
        <svg viewBox="0 0 24 24" fill="${isFav?'currentColor':'none'}" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 000-7.8z"/></svg>
      </button>
      <a href="#" onclick="abrirProduto(${p.id});return false;" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:inherit;" aria-label="Ver detalhes de ${p.nome}">${iconFor(p.categoria_id)}</a>
    </div>
    <div class="card-body">
      <span class="card-brand">${marca}</span>
      <h3 class="card-title"><a href="#" onclick="abrirProduto(${p.id});return false;" style="text-decoration:none;color:inherit;">${p.nome}</a></h3>
      ${media!==null ? `<span class="card-rating"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1z"/></svg> ${media.toFixed(1)} (${nAval})</span>` : `<span class="card-rating">Sem avaliações</span>`}
      <div class="card-specs">${p.specs}</div>
      <div class="card-footer">
        <div>
          <div class="card-price">${fmtMoeda(p.preco)}</div>
          ${estoqueTxt}
        </div>
        <button class="btn btn-primary btn-sm" ${p.estoque===0?'disabled':''} onclick="adicionarAoCarrinho(${p.id},1)">
          ${p.estoque===0?'Indisponível':'Adicionar'}
        </button>
      </div>
    </div>
  </article>`;
}

function renderProdutos(){
  const lista = produtosFiltrados();
  $('#filterCount').textContent = `${lista.length} produto${lista.length===1?'':'s'}`;
  $('#prodTitle').textContent = state.categoriaAtiva ? CATEGORIAS.find(c=>c.id===state.categoriaAtiva).nome : 'Todos os produtos';
  $('#gridProdutos').innerHTML = lista.length
    ? lista.map(cardProduto).join('')
    : `<div class="empty-state" style="grid-column:1/-1"><h3>Nada por aqui</h3><p>Tente outra categoria, marca ou termo de busca.</p></div>`;
}

/* =====================================================================
   FAVORITOS
   ===================================================================== */
function toggleFavorito(id){
  const i = state.favoritos.indexOf(id);
  if(i>-1){ state.favoritos.splice(i,1); toast('Removido dos favoritos'); }
  else { state.favoritos.push(id); toast('Adicionado aos favoritos'); }
  atualizarContadores();
  renderProdutos();
  renderFavoritos();
  if($('#prodOverlay').classList.contains('open')) abrirProduto(window._produtoAberto);
}

function renderFavoritos(){
  const lista = PRODUTOS.filter(p=>state.favoritos.includes(p.id));
  $('#gridFavoritos').innerHTML = lista.length
    ? lista.map(cardProduto).join('')
    : `<div class="empty-state" style="grid-column:1/-1"><h3>Sua lista está vazia</h3><p>Toque no coração de um produto para guardá-lo aqui.</p></div>`;
}

/* =====================================================================
   MODAL DE PRODUTO + AVALIAÇÕES
   ===================================================================== */
function abrirProduto(id){
  window._produtoAberto = id;
  const p = PRODUTOS.find(x=>x.id===id);
  const marca = MARCAS.find(m=>m.id===p.marca_id)?.nome || '';
  const avals = AVALIACOES.filter(a=>a.produto_id===id);
  const media = mediaAvaliacao(id);
  const isFav = state.favoritos.includes(id);
  const qtd = (state.carrinho.find(i=>i.produto_id===id)||{quantidade:1}).quantidade;

  $('#prodModal').innerHTML = `
    <button class="modal-close" onclick="fecharModal('prodOverlay')" aria-label="Fechar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    <div class="prod-modal">
      <div class="prod-gallery">
        <div class="main-img">${iconFor(p.categoria_id)}</div>
        <div class="thumb-row">
          <div class="thumb active">${iconFor(p.categoria_id)}</div>
          <div class="thumb">${ICONS.mouse}</div>
          <div class="thumb">${ICONS.keyboard}</div>
        </div>
        <div class="specs-readout">${p.specs}</div>
      </div>
      <div class="prod-info">
        <span class="card-brand">${marca}</span>
        <h2 id="prodModalTitle">${p.nome}</h2>
        ${media!==null ? `<span class="card-rating"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1z"/></svg> ${media.toFixed(1)} · ${avals.length} avaliação${avals.length===1?'':'es'}</span>` : '<span class="card-rating">Sem avaliações ainda</span>'}
        <p class="prod-desc">${p.descricao}</p>
        <div class="prod-price-row"><span class="val">${fmtMoeda(p.preco)}</span>${p.estoque<=5 && p.estoque>0 ? `<span class="card-stock low">Só ${p.estoque} em estoque</span>`:''}${p.estoque===0?'<span class="card-stock out">Sem estoque</span>':''}</div>
        <div class="qty-row">
          <div class="qty-control">
            <button aria-label="Diminuir quantidade" onclick="mudarQtdModal(-1)">−</button>
            <span id="qtdModalVal">1</span>
            <button aria-label="Aumentar quantidade" onclick="mudarQtdModal(1)">+</button>
          </div>
          <button class="btn btn-primary" ${p.estoque===0?'disabled':''} onclick="adicionarAoCarrinho(${p.id}, Number(document.getElementById('qtdModalVal').textContent))">Adicionar ao carrinho</button>
          <button class="fav-btn ${isFav?'active':''}" style="position:static;" aria-label="${isFav?'Remover dos favoritos':'Adicionar aos favoritos'}" onclick="toggleFavorito(${p.id})">
            <svg viewBox="0 0 24 24" fill="${isFav?'currentColor':'none'}" stroke="currentColor" stroke-width="1.8" width="18" height="18"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 000-7.8z"/></svg>
          </button>
        </div>

        <div class="reviews">
          <h3 style="font-size:.95rem;color:#fff;text-transform:none;letter-spacing:0;margin-bottom:.6rem;">Avaliações</h3>
          ${avals.length ? avals.map(a=>`
            <div class="review-item">
              <div class="review-head"><strong style="color:var(--text)">${a.nome_usuario}</strong><span class="review-stars">${'★'.repeat(a.nota)}${'☆'.repeat(5-a.nota)}</span></div>
              <p style="margin:0;font-size:.85rem;">${a.comentario}</p>
            </div>`).join('') : '<p style="color:var(--text-muted);font-size:.85rem;">Seja o primeiro a avaliar este produto.</p>'}

          <form class="review-form" onsubmit="return enviarAvaliacao(event, ${p.id})">
            <select name="nota" aria-label="Nota">
              <option value="5">★★★★★</option>
              <option value="4">★★★★☆</option>
              <option value="3">★★★☆☆</option>
              <option value="2">★★☆☆☆</option>
              <option value="1">★☆☆☆☆</option>
            </select>
            <input type="text" name="comentario" placeholder="Escreva um comentário" required>
            <button class="btn btn-ghost btn-sm" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>`;
  abrirModal('prodOverlay');
}

function mudarQtdModal(delta){
  const el = $('#qtdModalVal');
  const novo = Math.max(1, Number(el.textContent)+delta);
  el.textContent = novo;
}

function enviarAvaliacao(ev, produtoId){
  ev.preventDefault();
  const form = ev.target;
  const nota = Number(form.nota.value);
  const comentario = form.comentario.value.trim();
  if(!comentario) return false;
  const usuario = usuarioLogado();
  AVALIACOES.unshift({
    id: AVALIACOES.length+1,
    usuario_id: usuario ? usuario.id : 0,
    produto_id: produtoId,
    nome_usuario: usuario ? usuario.nome : 'Visitante',
    nota, comentario
  });
  toast('Avaliação enviada, obrigado!');
  abrirProduto(produtoId);
  renderProdutos();
  return false;
}

/* =====================================================================
   CARRINHO / ITENS_CARRINHO
   ===================================================================== */
function adicionarAoCarrinho(produtoId, quantidade){
  const produto = PRODUTOS.find(p=>p.id===produtoId);
  if(!produto || produto.estoque===0) return;
  const item = state.carrinho.find(i=>i.produto_id===produtoId);
  if(item){ item.quantidade = Math.min(produto.estoque, item.quantidade+quantidade); }
  else{ state.carrinho.push({ produto_id:produtoId, quantidade:Math.min(quantidade, produto.estoque) }); }
  atualizarContadores();
  renderCarrinho();
  toast(`${produto.nome} adicionado ao carrinho`);
}

function mudarQtdCarrinho(produtoId, delta){
  const produto = PRODUTOS.find(p=>p.id===produtoId);
  const item = state.carrinho.find(i=>i.produto_id===produtoId);
  if(!item) return;
  item.quantidade = Math.max(1, Math.min(produto.estoque, item.quantidade+delta));
  atualizarContadores();
  renderCarrinho();
}

function removerDoCarrinho(produtoId){
  state.carrinho = state.carrinho.filter(i=>i.produto_id!==produtoId);
  atualizarContadores();
  renderCarrinho();
}

function subtotalCarrinho(){
  return state.carrinho.reduce((s,i)=>{
    const p = PRODUTOS.find(pp=>pp.id===i.produto_id);
    return s + (p ? p.preco*i.quantidade : 0);
  },0);
}

function renderCarrinho(){
  const itens = state.carrinho;
  $('#cartBody').innerHTML = itens.length ? itens.map(i=>{
    const p = PRODUTOS.find(pp=>pp.id===i.produto_id);
    return `
    <div class="cart-item">
      <div class="thumb-mini">${iconFor(p.categoria_id)}</div>
      <div class="cart-item-info">
        <div class="name">${p.nome}</div>
        <div class="price mono">${fmtMoeda(p.preco)}</div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button aria-label="Diminuir quantidade de ${p.nome}" onclick="mudarQtdCarrinho(${p.id},-1)">−</button>
            <span>${i.quantidade}</span>
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
      <input type="text" id="cupomInput" placeholder="Cupom de desconto" value="${state.cupomAplicado?state.cupomAplicado.codigo:''}" ${state.cupomAplicado?'disabled':''}>
      ${state.cupomAplicado
        ? `<button class="btn btn-ghost btn-sm" onclick="removerCupom()">Remover</button>`
        : `<button class="btn btn-ghost btn-sm" onclick="aplicarCupom()">Aplicar</button>`}
    </div>
    <div id="cupomMsg"></div>
    <div class="totais">
      <div class="linha"><span>Subtotal</span><span class="mono">${fmtMoeda(subtotal)}</span></div>
      ${state.cupomAplicado ? `<div class="linha"><span>Desconto (${state.cupomAplicado.codigo})</span><span class="mono">−${fmtMoeda(desconto)}</span></div>`:''}
      <div class="linha total"><span>Total</span><span class="mono">${fmtMoeda(total)}</span></div>
    </div>
    <button class="btn btn-primary btn-block" ${itens.length?'':'disabled'} onclick="iniciarCheckout()">Finalizar compra</button>
  `;
}

function aplicarCupom(){
  const val = $('#cupomInput').value.trim().toUpperCase();
  const cupom = CUPONS.find(c=>c.codigo===val && c.ativo);
  const msg = $('#cupomMsg');
  if(!val){ return; }
  if(cupom){
    state.cupomAplicado = cupom;
    renderCarrinho();
    toast(`Cupom ${cupom.codigo} aplicado (-${cupom.desconto}%)`);
  } else {
    msg.innerHTML = `<div class="msg-inline erro">Cupom inválido ou expirado.</div>`;
  }
}
function removerCupom(){ state.cupomAplicado = null; renderCarrinho(); }

function atualizarContadores(){
  const totalItens = state.carrinho.reduce((s,i)=>s+i.quantidade,0);
  const cc = $('#cartCount'); cc.textContent = totalItens; cc.style.display = totalItens?'flex':'none';
  const fc = $('#favCount'); fc.textContent = state.favoritos.length; fc.style.display = state.favoritos.length?'flex':'none';
}

/* =====================================================================
   AUTENTICAÇÃO (usuarios)
   ===================================================================== */
function usuarioLogado(){ return state.usuarios.find(u=>u.id===state.usuarioAtualId) || null; }

function renderAuth(){
  const logado = usuarioLogado();
  $('#authLabel').textContent = logado ? logado.nome : 'Entrar';
  if(logado){
    $('#authTitle').textContent = 'Minha conta';
    $('#authFormWrap').innerHTML = `
      <div class="form-grid single">
        <div class="field"><label>Nome</label><input value="${logado.nome} ${logado.sobrenome}" disabled></div>
        <div class="field"><label>E-mail</label><input value="${logado.email}" disabled></div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-ghost" onclick="fecharModal('authOverlay')">Fechar</button>
        <button class="btn btn-primary" onclick="sair()">Sair da conta</button>
      </div>`;
  } else {
    $('#authTitle').textContent = 'Entrar ou criar conta';
    $('#authFormWrap').innerHTML = `
      <form class="form-grid" onsubmit="return cadastrarUsuario(event)">
        <div class="field"><label>Nome</label><input name="nome" required></div>
        <div class="field"><label>Sobrenome</label><input name="sobrenome"></div>
        <div class="field full"><label>E-mail</label><input type="email" name="email" required></div>
        <div class="field"><label>Senha</label><input type="password" name="senha" required minlength="4"></div>
        <div class="field"><label>Telefone</label><input name="telefone" placeholder="(00) 00000-0000"></div>
        <div class="field"><label>CPF</label><input name="cpf" placeholder="000.000.000-00"></div>
        <div class="field"><label>Data de nascimento</label><input type="date" name="data_nascimento"></div>
        <div class="field full" style="margin-top:.3rem;">
          <button class="btn btn-primary btn-block" type="submit">Criar conta e entrar</button>
        </div>
      </form>`;
  }
}

function cadastrarUsuario(ev){
  ev.preventDefault();
  const f = ev.target;
  const novo = {
    id: state.usuarios.length+1,
    nome: f.nome.value.trim(), sobrenome: f.sobrenome.value.trim(),
    email: f.email.value.trim(), senha: f.senha.value,
    telefone: f.telefone.value, cpf: f.cpf.value,
    data_nascimento: f.data_nascimento.value, nivel:'cliente'
  };
  state.usuarios.push(novo);
  state.usuarioAtualId = novo.id;
  renderAuth();
  fecharModal('authOverlay');
  toast(`Bem-vindo(a), ${novo.nome}!`);
  return false;
}
function sair(){ state.usuarioAtualId = null; renderAuth(); fecharModal('authOverlay'); toast('Você saiu da conta.'); }

/* =====================================================================
   CHECKOUT (enderecos, pedidos, itens_pedido, pagamentos, pedido_cupom)
   ===================================================================== */
function iniciarCheckout(){
  if(!state.carrinho.length) return;
  fecharDrawer();
  renderCheckoutEndereco();
  abrirModal('checkoutOverlay');
}

function renderCheckoutEndereco(){
  $('#checkoutContent').innerHTML = `
    <div class="modal-title-bar"><h2 id="checkoutTitle">Endereço de entrega</h2><p>Para onde enviamos seu pedido?</p></div>
    <form class="form-grid" id="formEndereco" onsubmit="return salvarEnderecoEIrPagamento(event)">
      <div class="field"><label>Apelido</label><input name="apelido" placeholder="Casa, Trabalho…" required></div>
      <div class="field"><label>CEP</label><input name="cep" required placeholder="00000-000"></div>
      <div class="field full"><label>Logradouro</label><input name="logradouro" required></div>
      <div class="field"><label>Número</label><input name="numero" required></div>
      <div class="field"><label>Complemento</label><input name="complemento"></div>
      <div class="field"><label>Bairro</label><input name="bairro" required></div>
      <div class="field"><label>Cidade</label><input name="cidade" required></div>
      <div class="field"><label>Estado (UF)</label><input name="estado" maxlength="2" required></div>
      <div class="modal-actions" style="grid-column:1/-1;">
        <button type="button" class="btn btn-ghost" onclick="fecharModal('checkoutOverlay')">Cancelar</button>
        <button type="submit" class="btn btn-primary">Continuar para pagamento</button>
      </div>
    </form>`;
}

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

function renderCheckoutPagamento(endereco){
  const subtotal = subtotalCarrinho();
  const desconto = state.cupomAplicado ? subtotal*(state.cupomAplicado.desconto/100) : 0;
  const total = subtotal - desconto;
  $('#checkoutContent').innerHTML = `
    <div class="modal-title-bar"><h2 id="checkoutTitle">Pagamento</h2><p>Entrega em: ${endereco.logradouro}, ${endereco.numero} — ${endereco.cidade}/${endereco.estado}</p></div>
    <div class="pay-methods" style="margin-top:1rem;">
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
}

function finalizarPedido(enderecoId){
  const metodo = document.querySelector('input[name="metodo"]:checked')?.value || 'cartao';
  const subtotal = subtotalCarrinho();
  const desconto = state.cupomAplicado ? subtotal*(state.cupomAplicado.desconto/100) : 0;
  const total = subtotal - desconto;

  const pedido = {
    id: 1000 + state.pedidos.length + 1,
    usuario_id: state.usuarioAtualId,
    endereco_id: enderecoId,
    itens: state.carrinho.map(i=>({produto_id:i.produto_id, quantidade:i.quantidade, preco_unitario:PRODUTOS.find(p=>p.id===i.produto_id).preco})),
    cupom: state.cupomAplicado ? state.cupomAplicado.codigo : null,
    metodo, valor_total: total, status:'aguardando pagamento',
    data_pedido: new Date()
  };
  // baixa de estoque (produtos)
  pedido.itens.forEach(it=>{
    const p = PRODUTOS.find(pp=>pp.id===it.produto_id);
    p.estoque = Math.max(0, p.estoque - it.quantidade);
  });
  state.pedidos.unshift(pedido);
  state.carrinho = [];
  state.cupomAplicado = null;
  atualizarContadores();
  renderProdutos();
  renderCarrinho();
  renderPedidos();

  $('#checkoutContent').innerHTML = `
    <div class="confirm-box">
      <div class="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"/></svg></div>
      <h2>Pedido confirmado!</h2>
      <div class="order-id">#${pedido.id}</div>
      <p>Pagamento via ${metodo === 'pix' ? 'Pix' : metodo === 'boleto' ? 'boleto' : 'cartão'} no valor de ${fmtMoeda(total)}. Você pode acompanhar o status em "Meus pedidos".</p>
      <button class="btn btn-primary" style="margin-top:1.4rem;" onclick="fecharModal('checkoutOverlay')">Continuar comprando</button>
    </div>`;
  toast(`Pedido #${pedido.id} realizado com sucesso!`);
}

function renderPedidos(){
  const box = $('#listaPedidos');
  if(!state.pedidos.length){
    box.innerHTML = `<div class="empty-state"><h3>Nenhum pedido ainda</h3><p>Seus pedidos aparecerão aqui depois da compra.</p></div>`;
    return;
  }
  box.innerHTML = state.pedidos.map(ped=>{
    const end = state.enderecos.find(e=>e.id===ped.endereco_id);
    const itensHtml = ped.itens.map(it=>{
      const p = PRODUTOS.find(pp=>pp.id===it.produto_id);
      return `<div class="linha"><span>${it.quantidade}× ${p.nome}</span><span class="mono">${fmtMoeda(it.preco_unitario*it.quantidade)}</span></div>`;
    }).join('');
    return `
    <div class="card" style="padding:1.2rem 1.4rem;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem;flex-wrap:wrap;gap:.5rem;">
        <strong class="mono" style="color:#fff;">Pedido #${ped.id}</strong>
        <span class="mono" style="color:var(--cyan);text-transform:uppercase;font-size:.75rem;">${ped.status}</span>
      </div>
      <div class="totais">${itensHtml}
        <div class="linha total"><span>Total</span><span class="mono">${fmtMoeda(ped.valor_total)}</span></div>
      </div>
      ${end?`<p style="font-size:.78rem;color:var(--text-muted);margin-top:.6rem;">Entrega: ${end.logradouro}, ${end.numero} — ${end.cidade}/${end.estado}</p>`:''}
    </div>`;
  }).join('');
}

/* =====================================================================
   MODAIS / DRAWER — abrir/fechar
   ===================================================================== */
function abrirModal(idOverlay){ $('#'+idOverlay).classList.add('open'); }
function fecharModal(idOverlay){ $('#'+idOverlay).classList.remove('open'); }
function abrirDrawer(){ $('#cartDrawer').classList.add('open'); $('#cartOverlay').classList.add('open'); }
function fecharDrawer(){ $('#cartDrawer').classList.remove('open'); $('#cartOverlay').classList.remove('open'); }

/* =====================================================================
   NAVEGAÇÃO ENTRE VIEWS
   ===================================================================== */
function irPara(view){
  ['loja','favoritos','pedidos'].forEach(v=>{
    document.getElementById('view-'+v).style.display = (v===view) ? '' : 'none';
  });
  $$('#mainNav button').forEach(b=>b.classList.toggle('active', b.dataset.view===view));
  if(view==='ofertas'){ state.categoriaAtiva=null; renderCategorias(); renderProdutos(); document.getElementById('view-loja').style.display=''; }
  if(view==='favoritos') renderFavoritos();
  if(view==='pedidos') renderPedidos();
  window.scrollTo({top:0,behavior: state.a11y.reduzir_animacoes ? 'auto' : 'smooth'});
}

/* =====================================================================
   ACESSIBILIDADE (tabela: acessibilidade)
   ===================================================================== */
function aplicarAcessibilidade(){
  const b = document.body;
  b.classList.toggle('contraste-alto', state.a11y.alto_contraste);
  b.classList.toggle('modo-claro', !state.a11y.modo_escuro);
  b.classList.toggle('sem-animacao', state.a11y.reduzir_animacoes);
  b.classList.toggle('leitor-tela', state.a11y.leitor_tela);
  const escalas = { pequena:.9, media:1, grande:1.15, extra:1.32 };
  document.documentElement.style.setProperty('--fs-scale', escalas[state.a11y.tamanho_fonte]);
}

function ligarControlesA11y(){
  $('#tglContraste').addEventListener('change', e=>{ state.a11y.alto_contraste = e.target.checked; aplicarAcessibilidade(); anunciar('Alto contraste ' + (e.target.checked?'ativado':'desativado')); });
  $('#tglEscuro').addEventListener('change', e=>{ state.a11y.modo_escuro = e.target.checked; aplicarAcessibilidade(); anunciar('Modo escuro ' + (e.target.checked?'ativado':'desativado')); });
  $('#tglAnimacoes').addEventListener('change', e=>{ state.a11y.reduzir_animacoes = e.target.checked; aplicarAcessibilidade(); anunciar('Redução de animações ' + (e.target.checked?'ativada':'desativada')); });
  $('#tglLeitor').addEventListener('change', e=>{ state.a11y.leitor_tela = e.target.checked; aplicarAcessibilidade(); anunciar('Modo leitor de tela ' + (e.target.checked?'ativado':'desativado')); });
  $('#selFonte').addEventListener('change', e=>{ state.a11y.tamanho_fonte = e.target.value; aplicarAcessibilidade(); anunciar('Tamanho da fonte: ' + e.target.options[e.target.selectedIndex].text); });

  $('#btnResetA11y').addEventListener('click', ()=>{
    state.a11y = { alto_contraste:false, modo_escuro:true, tamanho_fonte:'media', reduzir_animacoes:false, leitor_tela:false };
    $('#tglContraste').checked = false;
    $('#tglEscuro').checked = true;
    $('#tglAnimacoes').checked = false;
    $('#tglLeitor').checked = false;
    $('#selFonte').value = 'media';
    aplicarAcessibilidade();
    toast('Preferências de acessibilidade restauradas');
  });

  const fab = $('#btnA11y'), panel = $('#a11yPanel');
  fab.addEventListener('click', ()=>{
    const abrir = !panel.classList.contains('open');
    panel.classList.toggle('open', abrir);
    fab.setAttribute('aria-expanded', abrir);
  });
  document.addEventListener('click', e=>{
    if(!panel.contains(e.target) && !fab.contains(e.target)) panel.classList.remove('open');
  });
}

/* =====================================================================
   LIGAÇÕES GERAIS DE EVENTOS
   ===================================================================== */
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
      $('#a11yPanel').classList.remove('open');
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
function init(){
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
  aplicarAcessibilidade();
}
init();
