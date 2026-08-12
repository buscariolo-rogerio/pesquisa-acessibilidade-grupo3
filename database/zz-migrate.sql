ALTER TABLE usuarios
  ADD COLUMN IF NOT EXISTS telefone VARCHAR(30) NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS cpf VARCHAR(20) NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS data_nascimento DATE;

ALTER TABLE pedidos
  ADD COLUMN IF NOT EXISTS endereco_entrega JSONB,
  ADD COLUMN IF NOT EXISTS metodo_pagamento VARCHAR(20);

UPDATE pedidos
SET endereco_entrega = '{}'::jsonb,
    metodo_pagamento = 'nao_informado'
WHERE endereco_entrega IS NULL OR metodo_pagamento IS NULL;

ALTER TABLE pedidos
  ALTER COLUMN endereco_entrega SET NOT NULL,
  ALTER COLUMN metodo_pagamento SET NOT NULL;
