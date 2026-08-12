CREATE TABLE categorias (
  id INTEGER PRIMARY KEY,
  nome VARCHAR(100) NOT NULL UNIQUE,
  icone VARCHAR(50) NOT NULL,
  descricao TEXT NOT NULL
);

CREATE TABLE marcas (
  id INTEGER PRIMARY KEY,
  nome VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE produtos (
  id INTEGER PRIMARY KEY,
  categoria_id INTEGER NOT NULL REFERENCES categorias(id),
  marca_id INTEGER NOT NULL REFERENCES marcas(id),
  nome VARCHAR(150) NOT NULL,
  descricao TEXT NOT NULL,
  preco NUMERIC(12, 2) NOT NULL CHECK (preco >= 0),
  estoque INTEGER NOT NULL CHECK (estoque >= 0),
  imagem VARCHAR(255) NOT NULL,
  alt TEXT NOT NULL,
  specs TEXT NOT NULL,
  destaque BOOLEAN NOT NULL DEFAULT FALSE,
  em_oferta BOOLEAN NOT NULL DEFAULT FALSE,
  ativo BOOLEAN NOT NULL DEFAULT TRUE,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE usuarios (
  id BIGSERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  sobrenome VARCHAR(100) NOT NULL DEFAULT '',
  email VARCHAR(150) NOT NULL UNIQUE,
  senha_hash VARCHAR(255) NOT NULL,
  telefone VARCHAR(30) NOT NULL DEFAULT '',
  cpf VARCHAR(20) NOT NULL DEFAULT '',
  data_nascimento DATE,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE preferencias_acessibilidade (
  usuario_id BIGINT PRIMARY KEY REFERENCES usuarios(id) ON DELETE CASCADE,
  alto_contraste BOOLEAN NOT NULL DEFAULT FALSE,
  modo_escuro BOOLEAN NOT NULL DEFAULT FALSE,
  tamanho_fonte VARCHAR(20) NOT NULL DEFAULT 'media',
  reduzir_animacoes BOOLEAN NOT NULL DEFAULT FALSE,
  leitor_tela BOOLEAN NOT NULL DEFAULT FALSE,
  leitura_voz BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE favoritos (
  usuario_id BIGINT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  produto_id INTEGER NOT NULL REFERENCES produtos(id) ON DELETE CASCADE,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (usuario_id, produto_id)
);

CREATE TABLE carrinhos (
  id BIGSERIAL PRIMARY KEY,
  usuario_id BIGINT NOT NULL UNIQUE REFERENCES usuarios(id) ON DELETE CASCADE,
  atualizado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE itens_carrinho (
  carrinho_id BIGINT NOT NULL REFERENCES carrinhos(id) ON DELETE CASCADE,
  produto_id INTEGER NOT NULL REFERENCES produtos(id) ON DELETE CASCADE,
  quantidade INTEGER NOT NULL CHECK (quantidade > 0),
  PRIMARY KEY (carrinho_id, produto_id)
);

CREATE TABLE cupons (
  codigo VARCHAR(40) PRIMARY KEY,
  desconto_percentual NUMERIC(5, 2) NOT NULL CHECK (desconto_percentual BETWEEN 0 AND 100),
  ativo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE pedidos (
  id BIGSERIAL PRIMARY KEY,
  usuario_id BIGINT NOT NULL REFERENCES usuarios(id),
  cupom_codigo VARCHAR(40) REFERENCES cupons(codigo),
  endereco_entrega JSONB NOT NULL,
  metodo_pagamento VARCHAR(20) NOT NULL,
  valor_total NUMERIC(12, 2) NOT NULL CHECK (valor_total >= 0),
  status VARCHAR(30) NOT NULL DEFAULT 'Pendente',
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE itens_pedido (
  pedido_id BIGINT NOT NULL REFERENCES pedidos(id) ON DELETE CASCADE,
  produto_id INTEGER NOT NULL REFERENCES produtos(id),
  quantidade INTEGER NOT NULL CHECK (quantidade > 0),
  preco_unitario NUMERIC(12, 2) NOT NULL CHECK (preco_unitario >= 0),
  PRIMARY KEY (pedido_id, produto_id)
);

CREATE TABLE avaliacoes (
  id BIGSERIAL PRIMARY KEY,
  usuario_id BIGINT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  produto_id INTEGER NOT NULL REFERENCES produtos(id) ON DELETE CASCADE,
  nota INTEGER NOT NULL CHECK (nota BETWEEN 1 AND 5),
  comentario TEXT NOT NULL CHECK (char_length(comentario) BETWEEN 1 AND 1000),
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (usuario_id, produto_id)
);
