INSERT INTO categorias (id, nome, icone, descricao) VALUES
  (1, 'Mouses', 'mouse', 'Precisão e velocidade para cada clique.'),
  (2, 'Teclados', 'keyboard', 'Switches, RGB e resposta instantânea.'),
  (3, 'Headsets', 'headset', 'Áudio imersivo e microfone nítido.'),
  (4, 'Monitores', 'monitor', 'Taxas de atualização para reflexos reais.'),
  (5, 'Cadeiras', 'chair', 'Conforto para sessões longas.'),
  (6, 'Controles', 'gamepad', 'Ergonomia sem fio para qualquer plataforma.');

INSERT INTO marcas (id, nome) VALUES
  (1, 'Logitech'), (2, 'Razer'), (3, 'Avell'), (4, 'ViewSonic'), (5, 'AOC'),
  (6, 'Herman Miller'), (7, 'IKEA'), (8, 'Sony'), (9, 'Nintendo');

INSERT INTO produtos (id, categoria_id, marca_id, nome, descricao, preco, estoque, imagem, alt, specs, destaque, em_oferta, ativo) VALUES
  (1, 1, 1, 'Logitech PRO X SUPERLIGHT 2', 'Mouse competitivo sem fio, leve e voltado para movimentos rápidos.', 899.91, 34, 'assets/produtos/mouse-logitech-pro-x-superlight-2.jpg', 'Mouse Logitech PRO X SUPERLIGHT 2 magenta visto de cima ao lado de uma placa informativa', '60 g · HERO 2 até 44.000 DPI · 5 botões · até 95 h', TRUE, FALSE, TRUE),
  (2, 1, 2, 'Razer Basilisk V3', 'Mouse com fio para destros, com botões extras e rolagem configurável.', 329.90, 12, 'assets/produtos/mouse-razer-basilisk-v3.jpg', 'Mouse Razer Basilisk V3 preto visto de cima, com apoio para o polegar e iluminação RGB', '26.000 DPI · 11 botões · HyperScroll · 101 g', FALSE, TRUE, TRUE),
  (13, 1, 2, 'Razer DeathAdder V2 Pro', 'Mouse ergonômico que pode ser usado sem fio ou conectado por cabo.', 789.90, 60, 'assets/produtos/mouse-razer-deathadder-v2-pro.jpg', 'Mouse Razer DeathAdder V2 Pro preto sobre mousepad preto com borda vermelha', '20.000 DPI · 8 botões · 88 g · HyperSpeed e Bluetooth', FALSE, FALSE, TRUE),
  (3, 2, 1, 'Logitech G515 LIGHTSPEED TKL', 'Teclado mecânico compacto e baixo, sem o bloco numérico.', 854.91, 20, 'assets/produtos/teclado-logitech-g515-lightspeed-tkl.jpg', 'Teclado Logitech G515 LIGHTSPEED TKL preto visto de cima, sem bloco numérico', 'LIGHTSPEED · Bluetooth · USB · switches GL táteis · até 36 h', FALSE, FALSE, TRUE),
  (4, 2, 1, 'Logitech G PRO Mechanical TKL', 'Teclado mecânico compacto com fio e cabo removível.', 656.91, 8, 'assets/produtos/teclado-logitech-g-pro-mechanical-tkl.jpg', 'Teclado mecânico Logitech G PRO TKL preto, com layout americano e iluminação branca', 'Layout americano · switches GX Blue · LIGHTSYNC · 3 inclinações', FALSE, TRUE, TRUE),
  (5, 3, 3, 'Avell Fusion Wireless', 'Headset leve e dobrável com três formas de conexão.', 387.78, 25, 'assets/produtos/headset-avell-fusion-wireless.jpg', 'Headset sem fio Avell Fusion preto dobrado, com almofadas em tecido e controles na concha', '176 g · 2,4 GHz · Bluetooth · cabo · 7.1 virtual · até 50 h', FALSE, FALSE, TRUE),
  (6, 3, 1, 'Logitech G733 LIGHTSPEED', 'Headset sem fio com microfone removível e iluminação configurável.', 829.99, 15, 'assets/produtos/headset-logitech-g733.jpg', 'Headset Logitech G733 preto apoiado em suporte, com microfone removível', '278 g · drivers de 40 mm · RGB · até 29 h sem iluminação', TRUE, TRUE, TRUE),
  (14, 3, 1, 'Logitech G435 LIGHTSPEED', 'Headset leve que pode ser conectado por LIGHTSPEED ou Bluetooth.', 629.91, 40, 'assets/produtos/headset-logitech-g435.jpg', 'Caixa do headset Logitech G435 ao lado do produto embalado sobre uma mesa', 'Drivers de 40 mm · microfones integrados · até 18 h', FALSE, FALSE, TRUE),
  (7, 4, 4, 'ViewSonic VX2452mh', 'Monitor Full HD com conexões de vídeo variadas e alto-falantes integrados.', 1018.19, 9, 'assets/produtos/monitor-viewsonic-vx2452mh.jpg', 'Parte frontal inferior do monitor ViewSonic VX2452mh preto, com botões e base sobre uma mesa clara', '23,6 polegadas · TN · Full HD · 60 Hz · 2 ms · HDMI, DVI e VGA', FALSE, FALSE, TRUE),
  (8, 4, 5, 'AOC AGON PRO PD32M', 'Monitor 4K de grande formato com painel Mini-LED e alta taxa de atualização.', 5999.99, 14, 'assets/produtos/monitor-aoc-agon-pro-pd32m.jpg', 'Monitor AOC AGON PRO PD32M visto por trás, com suporte metálico e iluminação RGB', '31,5 polegadas · IPS Mini-LED · 4K · 144 Hz · 1 ms · HDR 1400', FALSE, FALSE, TRUE),
  (9, 5, 6, 'Herman Miller Aeron', 'Cadeira ergonômica de tela com ajustes para diferentes posições de trabalho.', 13336.50, 6, 'assets/produtos/cadeira-herman-miller-aeron.jpg', 'Cadeira Herman Miller Aeron preta vista em ângulo, com encosto e assento em tela', '3 tamanhos · PostureFit SL · ajustes de braços e inclinação', FALSE, FALSE, TRUE),
  (10, 5, 7, 'IKEA MARKUS', 'Cadeira giratória de encosto alto com apoio lombar e regulagem de altura.', 3099.00, 4, 'assets/produtos/cadeira-ikea-markus.jpg', 'Cadeira IKEA MARKUS preta e cinza vista de frente, com encosto alto em tela e apoio de cabeça', 'Encosto em tela · inclinação ajustável · capacidade declarada de 110 kg', FALSE, FALSE, TRUE),
  (11, 6, 8, 'Sony DualSense branco', 'Controle sem fio do PlayStation 5 com recursos táteis e microfone integrado.', 394.25, 18, 'assets/produtos/controle-sony-dualsense-branco.jpg', 'Controle Sony DualSense branco e preto visto de frente, com dois analógicos e touchpad central', 'Resposta tátil · gatilhos adaptáveis · touchpad · microfone · USB-C', FALSE, TRUE, TRUE),
  (12, 6, 9, 'Nintendo Switch Pro Controller', 'Controle sem fio oficial para Nintendo Switch, com bateria recarregável.', 369.00, 0, 'assets/produtos/controle-nintendo-switch-pro.jpg', 'Controle Nintendo Switch Pro preto visto de frente sobre fundo branco, com analógicos assimétricos', 'Movimento · vibração HD · NFC · USB-C · autonomia aproximada de 40 h', FALSE, FALSE, TRUE);

INSERT INTO cupons (codigo, desconto_percentual, ativo) VALUES
  ('NEXUS10', 10, TRUE),
  ('BEMVINDO15', 15, TRUE);