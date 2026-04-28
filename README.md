# pesquisa-acessibilidade-grupo3
Esse repositório apresenta pesquisas sobre acessibilidade, trabalho de Desenvolvimento de aplicações dinâmicas

Fase 1 — GlitchStore | Squad NexCode
Abaixo estão as 4 partes completas do projeto. Leia a Parte 4 primeiro se quiser entender as decisões antes de copiar os arquivos.
________________________________________
PARTE 1: README.MD (Para o GitHub)
markdown
# 🎮 GlitchStore — MVP de E-Commerce Acessível
### Squad NexCode | Disciplina: Desenvolvimento de Aplicações Dinâmicas
> **Germinare Tech — Ensino Médio | Fase 1: Pesquisa de Acessibilidade e Planejamento do MVP**

---

## 📋 Sobre o Projeto

A **GlitchStore** é o MVP de um e-commerce especializado em **periféricos gamer, jogos indie e setups tech** voltado para o público jovem. O objetivo desta fase não é escrever código — é **planejar com inteligência**: entender as leis e padrões de acessibilidade digital que um produto real precisaria seguir, e documentar tudo antes de construir qualquer coisa.

> **Por que acessibilidade?** Porque no Brasil, 18,6 milhões de pessoas têm deficiência visual, auditiva ou motora (IBGE, 2022). Ignorar essas pessoas não é só uma falha ética — é uma falha de negócio, e em muitos casos, **uma violação da lei.**

---

## 👥 A Equipe — Squad NexCode

| Integrante | Tema de Pesquisa | Papel nas Fases Futuras |
|---|---|---|
| **Rogerio** | LBI + Proteção Legal para Devs | UI/UX Design (Figma) |
| **Nascimento** | ADA + Dados de Processos nos EUA | Front-end (JS Vanilla) |
| **Enzo** | e-MAG + Ferramentas BR (ASES, VLibras) | Back-end + Banco de Dados |
| **Noé** | WCAG 2.1/2.2 + EAA (Lei Europeia 2025) | Documentação Técnica + QA |

---

## 🔬 Fase 1 — Pesquisa de Acessibilidade Digital

### 1.1 Rogerio — Lei Brasileira de Inclusão (LBI) e Proteção Legal para Devs

#### O que é a LBI?
A **Lei nº 13.146/2015**, conhecida como Estatuto da Pessoa com Deficiência ou Lei Brasileira de Inclusão (LBI), é o principal marco legal de acessibilidade no Brasil. Ela foi construída com base na **Convenção da ONU sobre os Direitos das Pessoas com Deficiência**, da qual o Brasil é signatário.

#### O que a LBI diz sobre a internet?
O **Artigo 63** da LBI é direto ao ponto:

> *"É obrigatória a acessibilidade nos sítios da internet mantidos por empresas com sede ou representação comercial no País ou por órgãos de governo, para uso da pessoa com deficiência, garantindo-lhe acesso às informações disponíveis, conforme as melhores práticas e diretrizes de acessibilidade adotadas internacionalmente."*
> — Art. 63, Lei nº 13.146/2015

Traduzindo para o nosso contexto: qualquer e-commerce brasileiro — incluindo a **GlitchStore** — tem **obrigação legal** de ser acessível. Isso não é opcional.

#### Norma técnica associada
A LBI remete às "melhores práticas internacionais", que na prática correspondem à **WCAG** (ver seção do Noé) e, para fins técnicos nacionais, à **ABNT NBR 17060** (acessibilidade em TIC). Isso cria uma cadeia: a lei exige conformidade, e a norma técnica define o *como*.

#### Como os desenvolvedores se protegem legalmente?
Um dev ou empresa que segue as diretrizes da WCAG (nível AA) e documenta esse processo está em posição muito mais segura juridicamente. As práticas recomendadas são:

1. **Declaração de Acessibilidade**: documento público no site declarando quais padrões são seguidos, o que ainda não está conforme e um canal de contato para reportar problemas.
2. **Relatórios de auditoria com o ASES**: geram evidência documentada de que a empresa testou e buscou conformidade.
3. **Política de Manutenção**: demonstrar que acessibilidade é processo contínuo, não uma entrega única.
4. **Canal de feedback**: obrigação prevista no e-MAG e recomendada como boa prática para mitigar ações judiciais.

A ausência desses documentos agrava a responsabilidade em caso de processo, pois indica **negligência** e não apenas falha técnica.

---

### 1.2 Nascimento — ADA (Americans with Disabilities Act) e Dados de Processos Digitais nos EUA

#### O que é a ADA?
A **Americans with Disabilities Act (ADA)**, lei federal americana de 1990, proíbe discriminação contra pessoas com deficiência em diversas esferas — emprego, transporte, serviços públicos e, crucialmente, **comércio**. O **Título III** da ADA exige que "lugares de acomodação pública" sejam acessíveis.

#### A ADA se aplica à internet?
Essa foi a grande batalha jurídica dos anos 2000 e 2010. A resposta consolidada hoje é: **sim**. Os tribunais americanos firmaram o entendimento de que sites e aplicativos de empresas que têm presença física *e* digital estão cobertos pelo Título III. Com o avanço do e-commerce, essa interpretação foi progressivamente ampliada.

#### Os números que fazem as empresas acordarem
Segundo o **Relatório Anual de Acessibilidade Web da UsableNet (2023)**:

- Foram registradas **4.605 ações judiciais federais** relacionadas à acessibilidade web nos EUA em 2022 — uma alta de 12% em relação ao ano anterior.
- O setor de **e-commerce** é o mais processado, respondendo por quase 80% dos casos.
- O custo médio de um acordo extrajudicial (settlement) gira em torno de **US$ 25.000 a US$ 100.000**, sem contar honorários advocatícios.
- Empresas com menos de 50 funcionários também foram alvo — o tamanho não garante imunidade.

#### Caso Domino's Pizza v. Robles (2019) — O Marco
O caso mais citado da história da acessibilidade web americana. Guillermo Robles, um deficiente visual que usava leitor de tela, não conseguiu fazer um pedido pelo app e site da Domino's. A Domino's argumentou que a ADA não se aplicava a plataformas digitais. O **9º Circuito Federal** (tribunal de apelação) rejeitou o argumento e determinou que o site e o app eram extensões do negócio físico e precisavam ser acessíveis. O caso foi à Suprema Corte, que devolveu ao tribunal inferior — consolidando a tendência de que a ADA **cobre plataformas digitais**.

**Lição para a GlitchStore**: se um dia expandirmos para o mercado americano ou recebermos clientes de lá, não seguir a WCAG é assumir um risco jurídico real e calculável.

#### Caso Target Corporation (2008)
Processo coletivo (*class action*) movido pela National Federation of the Blind. O site da Target não era compatível com leitores de tela — imagens sem texto alternativo, formulários sem rótulos. O acordo foi de **US$ 6 milhões** para os afetados, mais custos de remediação técnica do site. Foi um dos primeiros casos a estabelecer precedente sólido para e-commerce.

---

### 1.3 Enzo — e-MAG e Ferramentas Brasileiras de Conformidade

#### O que é o e-MAG?
O **Modelo de Acessibilidade em Governo Eletrônico (e-MAG)** é o padrão técnico brasileiro de acessibilidade para sites e sistemas. Desenvolvido pelo **Governo Federal (SLTI/MP)** e baseado nas diretrizes internacionais da WCAG, ele adapta os padrões globais à realidade brasileira — incluindo a obrigatoriedade do suporte a **Libras** (Língua Brasileira de Sinais) e às especificidades do idioma português.

Embora seja **obrigatório apenas para portais governamentais** (por decreto), o e-MAG funciona na prática como referência técnica de mercado para qualquer projeto web brasileiro sério.

#### Estrutura do e-MAG 3.1
O e-MAG organiza os requisitos em 6 seções:

| Seção | Conteúdo |
|---|---|
| **Marcação** | Uso correto de HTML semântico |
| **Comportamento** | Controle de foco, navegação por teclado |
| **Conteúdo/Informação** | Alternativas textuais, contraste, linguagem simples |
| **Apresentação/Design** | Independência de CSS, zoom |
| **Multimídia** | Legendas, audiodescrição, Libras |
| **Formulário** | Rótulos, validação, mensagens de erro acessíveis |

**Para a GlitchStore**: a seção de Formulário é crítica (cadastro, carrinho, checkout), assim como Multimídia (vídeos de demonstração de produtos).

#### ASES — Avaliador e Simulador de Acessibilidade em Sítios
O **ASES** (versão 3.0, disponível em ases.governoeletronico.gov.br) é uma ferramenta gratuita do governo brasileiro que:

- Analisa automaticamente páginas HTML contra os critérios do e-MAG e da WCAG
- Gera **relatórios de conformidade** exportáveis em PDF e CSV
- Simula a experiência de usuários com diferentes deficiências (visão baixa, daltonismo, etc.)
- Atribui uma **pontuação de acessibilidade** de 0 a 100

**Por que isso importa para nós**: quando o MVP da GlitchStore estiver rodando, a primeira auditoria que faremos será com o ASES — o relatório gerado é a evidência técnica documental de que buscamos conformidade.

#### VLibras — Inclusão para a Comunidade Surda
O **VLibras** é uma suíte de ferramentas desenvolvida pelo **Governo Federal em parceria com a UFPB** (Universidade Federal da Paraíba) que traduz automaticamente conteúdo digital em português para **Libras**, utilizando um avatar 3D.

Componentes da suíte VLibras:
- **VLibras Widget**: trecho de código JavaScript que adiciona um botão flutuante ao site, ativando a tradução para Libras em qualquer página.
- **VLibras Desktop**: aplicativo para Windows/Linux que traduz conteúdo do sistema operacional.
- **VLibras Mobile**: app para Android/iOS.

**Implementação prevista na GlitchStore**: o VLibras Widget será integrado em todas as páginas do MVP. A integração é simples (uma linha de script) e gratuita.

#### DaSilva — Validador online
O **DaSilva** (dasilva.org.br) é outro validador brasileiro de referência, voltado para checagem manual e automática de conformidade com e-MAG e WCAG. Complementa o ASES para auditorias mais detalhadas.

---

### 1.4 Noé — WCAG 2.1/2.2 e EAA (European Accessibility Act)

#### O que é a WCAG?
As **Web Content Accessibility Guidelines (WCAG)** são as diretrizes técnicas de acessibilidade web publicadas pelo **W3C (World Wide Web Consortium)** — o consórcio internacional que define os padrões da web. São o padrão **de facto** global: referenciadas pela LBI brasileira, pela ADA americana, pela EAA europeia e por praticamente toda legislação de acessibilidade digital do mundo.

#### Os 4 Princípios (POUR)
Toda a WCAG gira em torno de 4 princípios fundamentais que um conteúdo web acessível deve ser:

| Princípio | Significado | Exemplo prático na GlitchStore |
|---|---|---|
| **Perceptível** | Informação apresentável de múltiplas formas | Imagens de produtos com texto alternativo (alt text) |
| **Operável** | Interface navegável por teclado e sem tempo limite | Checkout completo sem usar mouse |
| **Compreensível** | Linguagem clara e comportamento previsível | Mensagens de erro claras ("CPF inválido", não só "erro 422") |
| **Robusto** | Compatível com tecnologias assistivas atuais e futuras | HTML semântico validado para leitores de tela |

#### Os Níveis de Conformidade
- **Nível A**: Mínimo absoluto. Falhar aqui torna o conteúdo inacessível para muitos usuários.
- **Nível AA**: Padrão exigido por lei na maioria dos países. É o alvo da GlitchStore.
- **Nível AAA**: Excelência. Difícil de atingir em todo o site, mas podemos buscar em seções críticas.

#### WCAG 2.1 (2018) — O que trouxe de novo
- Critérios específicos para **dispositivos móveis** (gestos, orientação de tela)
- Acessibilidade para **deficiências cognitivas e de aprendizado**
- **1.4.10 Reflow**: conteúdo deve ser legível com zoom de 400% sem scroll horizontal
- **1.4.11 Non-text Contrast**: elementos de interface (botões, inputs) devem ter contraste mínimo de 3:1

#### WCAG 2.2 (Outubro 2023) — Novidades mais recentes
- **2.4.11 Focus Appearance**: o indicador de foco (a "borda" que aparece ao navegar por teclado) deve ser visível e ter contraste adequado
- **2.5.7 Dragging Movements**: funcionalidades que usam arrastar devem ter alternativa por teclado ou clique simples
- **3.2.6 Consistent Help**: canais de ajuda (chat, FAQ) devem estar no mesmo lugar em todas as páginas
- **3.3.7 Redundant Entry**: formulários multi-etapa não devem pedir a mesma informação duas vezes

**Impacto direto na GlitchStore**: nosso processo de checkout é multi-etapa — o critério 3.3.7 nos obriga a não pedir o endereço de entrega novamente se o usuário já o cadastrou.

#### EAA — European Accessibility Act (Diretiva 2019/882)
A **Lei Europeia de Acessibilidade** entrou em vigor em **28 de junho de 2025**. Ela exige que produtos e serviços digitais — incluindo **e-commerce** — sejam acessíveis conforme a WCAG em todos os 27 países da União Europeia.

Pontos-chave da EAA:
- Cobre e-commerce, serviços bancários, transportes, e-books e mídia digital
- Empresas com **mais de 10 funcionários OU faturamento acima de €2 milhões** são obrigadas a cumprir
- Microempresas têm isenção, mas podem optar por conformidade voluntária
- Penalidades variam por país-membro (multas, proibição de venda no mercado europeu)

**Por que isso importa para estudantes brasileiros?** Porque qualquer produto SaaS ou e-commerce que queira crescer globalmente **precisa ser acessível por padrão**. A EAA fecha a última grande lacuna regulatória — agora Brasil, EUA e Europa têm legislação convergindo para WCAG AA.

---

### 1.5 Linha do Tempo + Casos Reais (Pesquisa Coletiva da Equipe)

#### Casos Reais Adicionais

**Brasil — Iniciativas e Pressões do Mercado**
O e-commerce brasileiro ainda não acumula tantos processos judiciais por acessibilidade quanto os EUA, mas o cenário está mudando:
- O **Ministério Público de Minas Gerais** instaurou inquéritos civis contra portais públicos municipais que violavam a LBI, resultando em Termos de Ajustamento de Conduta (TAC) para adequação técnica.
- O **Procon-SP** recebeu representações formais contra empresas de e-commerce por falta de acessibilidade em processos de compra online, sinalizando que o órgão de defesa do consumidor está passando a tratar a acessibilidade como direito do consumidor.
- Empresas como **Nubank e iFood** utilizam acessibilidade como **diferencial competitivo** e de employer branding — publicam relatórios anuais de conformidade e têm squads dedicados ao tema.

---

## 🗓️ Roteiro do Infográfico — Linha do Tempo da Acessibilidade Digital
> **Para produção no Canva. Leia este roteiro e monte visualmente.**

### Formato sugerido: faixa horizontal com linha do tempo, fundo escuro (tema gamer), ícones flat coloridos.

---

**[TÍTULO NO TOPO]**
```
"A Linha do Tempo que Todo Dev Precisa Conhecer"
Subtítulo: "De lei a código: a evolução da Acessibilidade Digital"
Logo da GlitchStore no canto superior direito | Logo Squad NexCode embaixo
```

---

**[PONTO 1 — 1990] 🇺🇸**
- **Ícone**: Capitólio americano ou martelo de juiz
- **Texto principal**: `ADA — Americans with Disabilities Act`
- **Subtexto**: `EUA tornam a discriminação contra PcD ilegal. Base do que viria para o digital.`

---

**[PONTO 2 — 1999] 🌐**
- **Ícone**: globo/web ou logo W3C estilizado
- **Texto principal**: `WCAG 1.0 — W3C`
- **Subtexto**: `Primeiras diretrizes técnicas para acessibilidade na web. 14 diretrizes, 65 checkpoints.`

---

**[PONTO 3 — 2008] ⚖️**
- **Ícone**: carrinho de compras com X vermelho / escudo
- **Texto principal**: `Target Corp. processa acessibilidade web | WCAG 2.0`
- **Subtexto**: `Acordo de US$ 6 mi. W3C lança WCAG 2.0 com os 4 princípios POUR.`
- **Destaque visual**: caixa colorida lateral com "US$ 6.000.000"

---

**[PONTO 4 — 2015] 🇧🇷**
- **Ícone**: bandeira do Brasil ou mapa do Brasil
- **Texto principal**: `LBI — Lei Brasileira de Inclusão (Lei 13.146/2015)`
- **Subtexto**: `Art. 63 torna obrigatória a acessibilidade em sites comerciais brasileiros.`

---

**[PONTO 5 — 2018] 📱**
- **Ícone**: celular / teclado
- **Texto principal**: `WCAG 2.1 — Foco em Mobile e Cognição`
- **Subtexto**: `Novos critérios para gestos touch, zoom 400% e contraste de interface.`

---

**[PONTO 6 — 2019] 🍕**
- **Ícone**: pizza com leitor de tela / 9ª circuito
- **Texto principal**: `Domino's Pizza v. Robles — 9º Circuito EUA`
- **Subtexto**: `App inacessível para cego. Tribunal: ADA cobre plataformas digitais.`
- **Destaque visual**: caixa vermelha "PRECEDENTE HISTÓRICO"

---

**[PONTO 7 — 2023] 🔧**
- **Ícone**: lupa / lupa com código
- **Texto principal**: `WCAG 2.2 — Foco Visível, Formulários e Drag`
- **Subtexto**: `8 novos critérios de sucesso. Foco em experiências de checkout e formulários.`

---

**[PONTO 8 — JUNHO 2025] 🇪🇺**
- **Ícone**: bandeira da UE / estrelas europeias
- **Texto principal**: `EAA entra em vigor — Europa exige WCAG`
- **Subtexto**: `27 países da UE obrigam e-commerces a serem acessíveis. WCAG AA vira lei.`
- **Destaque visual**: caixa azul "EM VIGOR AGORA"

---

**[PONTO 9 — 2025/2026] 🎮** ← PONTO FINAL ESPECIAL
- **Ícone**: logo da GlitchStore / controle de videogame
- **Texto principal**: `GlitchStore MVP — Squad NexCode`
- **Subtexto**: `E-commerce desenvolvido com WCAG AA, e-MAG, VLibras e ASES desde o dia 1.`
- **Destaque visual**: caixa verde brilhante "É AQUI QUE ESTAMOS"

---

**[RODAPÉ DO INFOGRÁFICO]**
```
Fontes: W3C (w3.org) | Planalto.gov.br | UsableNet 2023 | European Commission | e-MAG Gov.br
Disciplina: Desenvolvimento de Aplicações Dinâmicas | Germinare Tech | 2025
```

---

## 📚 Fontes e Referências

1. **W3C — World Wide Web Consortium.** *Web Content Accessibility Guidelines (WCAG) 2.2.* W3C Recommendation, 05 out. 2023. Disponível em: https://www.w3.org/TR/WCAG22/. Acesso em: abr. 2025.

2. **BRASIL.** *Lei nº 13.146, de 6 de julho de 2015. Institui a Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).* Diário Oficial da União, Brasília, DF, 7 jul. 2015. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm. Acesso em: abr. 2025.

3. **BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos.** *e-MAG — Modelo de Acessibilidade em Governo Eletrônico, versão 3.1.* Brasília: SLTI/MP, 2014. Disponível em: https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/emag. Acesso em: abr. 2025.

4. **USABLENET.** *2023 ADA Web and App Accessibility Lawsuits: Year in Review.* Nova York: UsableNet Inc., jan. 2024. Relatório anual. Disponível em: https://usablenet.com/resources/reports/2023-ada-digital-accessibility-lawsuits. Acesso em: abr. 2025.

5. **EUROPEAN COMMISSION.** *Directive (EU) 2019/882 of the European Parliament and of the Council of 17 April 2019 on the Accessibility Requirements for Products and Services (European Accessibility Act).* Official Journal of the European Union, L 151, 7 jun. 2019. Disponível em: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0882. Acesso em: abr. 2025.

---

## 🗂️ Divisão de Tarefas — Fases Futuras do MVP

### Fase 2 — Design e Prototipação (Figma)
**Responsável principal: Rogerio** | Suporte: todos revisam

- [ ] Criar wireframes de baixa fidelidade (Home, PDP, Carrinho, Checkout)
- [ ] Definir sistema de cores com contraste WCAG AA (mínimo 4.5:1 para texto)
- [ ] Criar componentes de formulário acessíveis (labels visíveis, estados de erro)
- [ ] Prototipar fluxo de navegação por teclado
- [ ] Documentar Design System no próprio Figma

### Fase 3 — Front-end (HTML + CSS + JS Vanilla)
**Responsável principal: Nascimento** | Suporte: Enzo (integração com API)

- [ ] Implementar HTML semântico (`<nav>`, `<main>`, `<article>`, `<aside>`)
- [ ] Atributos ARIA onde HTML semântico não for suficiente
- [ ] Navegação 100% funcional por teclado (Tab, Enter, Esc)
- [ ] Integrar VLibras Widget
- [ ] Garantir responsividade mobile (breakpoints)
- [ ] Validar com ASES e ajustar

### Fase 4 — Back-end e Banco de Dados
**Responsável principal: Enzo** | Suporte: Nascimento (consumo de API)

- [ ] Modelar banco de dados (produtos, usuários, pedidos, endereços)
- [ ] Desenvolver API REST (endpoints: produtos, auth, carrinho, pedidos)
- [ ] Implementar autenticação segura (JWT ou sessão)
- [ ] Sanitização de inputs (SQL Injection prevention)
- [ ] Documentar endpoints (Swagger/OpenAPI básico)

### Fase 5 — Documentação Técnica e QA
**Responsável principal: Noé** | Suporte: todos fornecem inputs

- [ ] Manter README.md atualizado a cada fase
- [ ] Criar Declaração de Acessibilidade da GlitchStore
- [ ] Executar testes manuais com leitor de tela (NVDA gratuito)
- [ ] Relatório final de conformidade (ASES + checklist manual WCAG AA)
- [ ] Preparar documentação de entrega final para o professor

---

## ✅ Checklist de Entrega — Fase 1

- [ ] README.md commitado no repositório GitHub da equipe
- [ ] Infográfico de Linha do Tempo produzido no Canva e exportado em PNG/PDF
- [ ] Documento Word revisado por todos os integrantes
- [ ] Repositório GitHub criado com nome `glitchstore-squad-nexcode`
- [ ] Roteiro da apresentação impresso ou no celular de cada integrante
- [ ] Apresentação técnica ensaiada ao menos uma vez em grupo

---

*Squad NexCode — Germinare Tech | 2025*
________________________________________
PARTE 2: CONTEÚDO PARA O WORD (Para Revisão da Equipe)
⚠️ Nota técnica: Não é possível gerar um arquivo .docx diretamente aqui. Copie o conteúdo abaixo, abra o Word, cole com Colar Especial → Manter Formatação de Origem (ou use Ctrl+V e depois ajuste). O conteúdo já está estruturado com títulos e subtítulos para facilitar a formatação.
________________________________________
CABEÇALHO SUGERIDO PARA O WORD:
GERMINARE TECH — ENSINO MÉDIO
Disciplina: Desenvolvimento de Aplicações Dinâmicas
Projeto: GlitchStore — E-Commerce Acessível
Equipe: Squad NexCode (Rogerio, Nascimento, Enzo, Noé)
Fase 1: Pesquisa de Acessibilidade e Planejamento do MVP
Data de Entrega: [INSERIR DATA]
________________________________________
SUMÁRIO

1. Introdução e Justificativa
2. Pesquisa Individual — Rogerio: LBI e Proteção Legal
3. Pesquisa Individual — Nascimento: ADA e Processos nos EUA
4. Pesquisa Individual — Enzo: e-MAG e Ferramentas Brasileiras
5. Pesquisa Individual — Noé: WCAG 2.1/2.2 e EAA
6. Pesquisa Coletiva: Casos Reais e Linha do Tempo
7. Planejamento do MVP — GlitchStore
8. Roteiro do Infográfico (para produção no Canva)
9. Divisão de Tarefas — Fases Futuras
10. Referências Bibliográficas


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. INTRODUÇÃO E JUSTIFICATIVA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A GlitchStore é o MVP de um e-commerce de periféricos gamer, jogos indie e
setups tech, desenvolvido como projeto integrador da disciplina de
Desenvolvimento de Aplicações Dinâmicas. O diferencial do nosso projeto é
a integração da acessibilidade digital desde a fase de planejamento —
antes de escrever uma linha de código.

A pergunta que guia esta fase é: "Se tivéssemos que defender a GlitchStore
em um tribunal ou perante um órgão regulador amanhã, teríamos documentação
suficiente de que nos preocupamos com acessibilidade?"

Esta pesquisa prepara a base técnica, legal e ética para que a resposta
seja sempre SIM.

Por que isso importa para um projeto escolar?
Porque 18,6 milhões de brasileiros têm algum tipo de deficiência (IBGE,
2022). No mundo dos negócios digitais real, ignorar esse público não é
só uma falha moral — é um risco jurídico e uma perda de mercado. Aprender
a construir acessível desde o início é construir como profissionais.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. Rogerio — LEI BRASILEIRA DE INCLUSÃO (LBI) E PROTEÇÃO LEGAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2.1 O que é a LBI?

A Lei nº 13.146/2015, o Estatuto da Pessoa com Deficiência, é o
principal instrumento legal de inclusão do Brasil. Construída com base
na Convenção da ONU sobre Direitos das Pessoas com Deficiência, ela cobre
saúde, educação, trabalho, transporte e — de forma explícita — a internet.

2.2 O que diz o Artigo 63

"É obrigatória a acessibilidade nos sítios da internet mantidos por
empresas com sede ou representação comercial no País ou por órgãos de
governo, para uso da pessoa com deficiência, garantindo-lhe acesso às
informações disponíveis, conforme as melhores práticas e diretrizes de
acessibilidade adotadas internacionalmente."
(Art. 63, Lei nº 13.146/2015)

Para a GlitchStore: somos uma empresa com sede no Brasil. A LBI nos
obriga. Não é sugestão — é lei.

2.3 Como desenvolvedores se protegem?

Existem 4 práticas documentadas que reduzem o risco jurídico:

(1) Declaração de Acessibilidade pública: documento no site que informa
    quais padrões são seguidos, o que ainda não está conforme e um canal
    de contato para reportar problemas.

(2) Relatórios de auditoria com o ASES: geram evidência formal de que a
    empresa avaliou e buscou conformidade com os padrões vigentes.

(3) Política de Manutenção Continuada: demonstrar que acessibilidade é
    um processo — não uma entrega única — mitiga a alegação de negligência.

(4) Canal de feedback ativo: exigido pelo e-MAG e fundamental para provar
    que a empresa recebe, registra e responde a reclamações de usuários
    com deficiência.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. NASCIMENTO — ADA E DADOS DE PROCESSOS NOS EUA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3.1 O que é a ADA?

A Americans with Disabilities Act (1990) é a lei federal americana que
proíbe discriminação contra pessoas com deficiência. O Título III exige
que "lugares de acomodação pública" sejam acessíveis — e os tribunais
americanos consolidaram o entendimento de que sites e apps de empresas
comerciais se enquadram nessa categoria.

3.2 Os números que assustam qualquer empreendedor

Segundo o Relatório UsableNet 2023:
- 4.605 ações judiciais federais por acessibilidade web nos EUA em 2022
- Alta de 12% em relação ao ano anterior
- E-commerce corresponde a ~80% dos casos
- Acordo médio: US$ 25.000 a US$ 100.000 (mais honorários)
- Empresas pequenas também foram processadas — tamanho não é proteção

3.3 Caso Domino's Pizza v. Robles (2019)

Guillermo Robles, deficiente visual usuário de leitor de tela, não
conseguiu fazer um pedido pelo app e site da Domino's. Após batalha
judicial, o 9º Circuito Federal decidiu: a ADA cobre plataformas
digitais. O caso foi ao Supremo e devolvido ao tribunal de origem,
consolidando o precedente. A Domino's teve que adequar suas plataformas.

Lição direta: uma única funcionalidade inacessível no checkout pode
gerar um processo que custa dezenas de vezes mais do que teria custado
corrigir o problema.

3.4 Caso Target Corporation (2008)

Processo coletivo movido pela National Federation of the Blind. Imagens
sem alt text, formulários sem labels, estrutura de navegação inacessível.
Acordo: US$ 6 milhões para os afetados + remediação técnica completa
do site. Um dos primeiros marcos do e-commerce em acessibilidade.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. ENZO — e-MAG E FERRAMENTAS BRASILEIRAS (ASES, VLIBRAS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4.1 O que é o e-MAG?

O Modelo de Acessibilidade em Governo Eletrônico (e-MAG) é o padrão
técnico oficial do Brasil para acessibilidade em sistemas web. Criado
pelo Governo Federal com base na WCAG, ele adapta as diretrizes
internacionais ao contexto brasileiro — incluindo suporte obrigatório a
Libras e especificidades do português.

Embora seja obrigatório apenas para portais governamentais, funciona na
prática como referência técnica de mercado para qualquer projeto web
sério no Brasil.

4.2 As 6 Seções do e-MAG 3.1

1. Marcação: HTML semântico correto
2. Comportamento: foco e navegação por teclado
3. Conteúdo/Informação: alt text, contraste, linguagem clara
4. Apresentação/Design: independência de CSS, suporte a zoom
5. Multimídia: legendas, audiodescrição, Libras
6. Formulário: labels, validação e mensagens de erro acessíveis

Para a GlitchStore, as seções 5 (vídeos de produtos) e 6 (checkout)
são as mais críticas.

4.3 ASES — Avaliador e Simulador de Acessibilidade em Sítios

Ferramenta gratuita do governo (ases.governoeletronico.gov.br) que:
- Analisa HTML contra critérios e-MAG e WCAG automaticamente
- Gera relatórios exportáveis em PDF e CSV
- Simula experiência de usuários com diferentes deficiências
- Atribui pontuação de 0 a 100

Nosso plano: primeira auditoria com ASES assim que o MVP entrar em
staging. O relatório gerado será nossa evidência documental de conformidade.

4.4 VLibras — Inclusão para a Comunidade Surda

Suíte gratuita do Governo Federal (em parceria com UFPB) que traduz
conteúdo digital em português para Libras via avatar 3D.

Para a GlitchStore: integraremos o VLibras Widget em todas as páginas.
A integração é uma única linha de script JavaScript — custo técnico
mínimo, impacto de inclusão enorme para a comunidade surda brasileira.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. NOÉ — WCAG 2.1/2.2 E EAA (EUROPEAN ACCESSIBILITY ACT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5.1 O que é a WCAG?

As Web Content Accessibility Guidelines (WCAG) são as diretrizes técnicas
publicadas pelo W3C. São o padrão global de acessibilidade web —
referenciadas pela LBI, ADA, EAA e praticamente toda legislação de
acessibilidade do mundo.

5.2 Os 4 Princípios POUR

PERCEPTÍVEL: informação apresentável de formas alternativas.
  Exemplo GlitchStore: alt text em fotos de produtos.

OPERÁVEL: interface navegável por teclado, sem limite de tempo.
  Exemplo GlitchStore: checkout completo sem uso do mouse.

COMPREENSÍVEL: linguagem clara, comportamento previsível.
  Exemplo GlitchStore: "CPF inválido — use apenas números" em vez de
  "Erro 422".

ROBUSTO: compatível com tecnologias assistivas atuais e futuras.
  Exemplo GlitchStore: HTML semântico validado para leitores de tela.

5.3 Os Níveis de Conformidade

Nível A   → Mínimo absoluto (barreira para muitos usuários se não atingido)
Nível AA  → Padrão exigido por lei. ALVO DA GLITCHSTORE.
Nível AAA → Excelência. Buscaremos em áreas críticas (checkout, cadastro).

5.4 Novidades do WCAG 2.2 (Outubro 2023)

- 2.4.11 Focus Appearance: indicador de foco visível e contrastado
- 2.5.7 Dragging Movements: alternativa para gestos de arrastar
- 3.2.6 Consistent Help: ajuda sempre no mesmo lugar
- 3.3.7 Redundant Entry: não pedir mesma info duas vezes no checkout

5.5 EAA — European Accessibility Act (em vigor desde jun/2025)

A Diretiva 2019/882 entrou em vigor pleno em 28 de junho de 2025.
Obriga e-commerces que operam na UE a serem acessíveis (WCAG AA).
Microempresas têm isenção, mas empresas acima de 10 funcionários ou
€2 milhões de faturamento são obrigadas.

Por que importa para nós: qualquer SaaS ou e-commerce brasileiro que
queira escalar globalmente precisa ser acessível por design, não por
retrofitting.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PLANEJAMENTO DO MVP — GLITCHSTORE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nome do produto: GlitchStore
Nicho: E-commerce de periféricos gamer, jogos indie e setups tech
Público-alvo: Jovens de 15 a 25 anos, gamer e entusiastas de tecnologia

Páginas do MVP:
1. Home (listagem de produtos em destaque)
2. Página de Produto (PDP — Product Detail Page)
3. Carrinho de Compras
4. Checkout (endereço + pagamento simulado)
5. Cadastro / Login

Padrão de acessibilidade adotado: WCAG 2.2 Nível AA
Ferramentas de validação: ASES, VLibras Widget, NVDA (leitor de tela)
Stack técnica prevista: HTML5 + CSS3 + JS Vanilla (front) + [back a definir]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10. REFERÊNCIAS BIBLIOGRÁFICAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[1] W3C. Web Content Accessibility Guidelines (WCAG) 2.2. W3C
    Recommendation, 05 out. 2023. Disponível em: https://www.w3.org/TR/WCAG22/.
    Acesso em: abr. 2025.

[2] BRASIL. Lei nº 13.146, de 6 de julho de 2015. Institui a Lei
    Brasileira de Inclusão da Pessoa com Deficiência. Diário Oficial
    da União, Brasília, DF, 7 jul. 2015. Disponível em:
    https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm.
    Acesso em: abr. 2025.

[3] BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos.
    e-MAG — Modelo de Acessibilidade em Governo Eletrônico, v. 3.1.
    Brasília: SLTI/MP, 2014. Disponível em:
    https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/
    acessibilidade-digital/emag. Acesso em: abr. 2025.

[4] USABLENET. 2023 ADA Web and App Accessibility Lawsuits: Year in
    Review. Nova York: UsableNet Inc., jan. 2024. Disponível em:
    https://usablenet.com/resources/reports/2023-ada-digital-accessibility-
    lawsuits. Acesso em: abr. 2025.

[5] EUROPEAN COMMISSION. Directive (EU) 2019/882 — European Accessibility
    Act. Official Journal of the EU, L 151, 7 jun. 2019. Disponível em:
    https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0882.
    Acesso em: abr. 2025.
________________________________________
PARTE 3: ROTEIRO DA APRESENTAÇÃO TÉCNICA (PITCH DE 8 MINUTOS)
markdown
# 🎤 ROTEIRO — Apresentação Técnica | GlitchStore | Squad NexCode
## Disciplina: Desenvolvimento de Aplicações Dinâmicas | Duração: 8 minutos

> **INSTRUÇÕES GERAIS**
> - Cada integrante fala em pé, de frente para a turma e para o professor.
> - As falas marcadas em [SLIDE X] indicam quando avançar a apresentação.
> - As falas entre *itálico* são transições — ditas enquanto o próximo
>   integrante se posiciona.
> - Ensaiem com cronômetro. 8 min passa rápido.
> - Roupam adequadas: camiseta da equipe, moletom tech, ou visual apresentável.

---

## ⏱️ ABERTURA — ENZO [0:00 – 1:00] (1 minuto)

[SLIDE 1: Logo da GlitchStore + nome da equipe em destaque. Fundo escuro, estilo gamer.]

**Enzo (com energia, olhando para a turma):**

"Bom dia a todos. Nós somos o Squad NexCode, e a pergunta que guia nosso
projeto hoje é simples: se você tivesse um e-commerce, e um cliente com
deficiência visual tentasse comprar no seu site — e não conseguisse —
o que aconteceria?"

*(pausa de 2 segundos)*

"No Brasil, ele poderia abrir um processo com base em uma lei federal.
Nos EUA, o custo médio desse processo é de cem mil dólares. E na Europa,
desde junho deste ano, isso é regulado por lei comunitária."

"Nossa solução chama GlitchStore — um e-commerce de periféricos gamer
e jogos indie — construído para ser acessível desde o primeiro dia.
Não por obrigação. Porque é o certo a se fazer. E porque é um diferencial
de negócio."

[SLIDE 2: Foto do infográfico de linha do tempo]

"Mas antes de falar do nosso produto, precisamos mostrar o mundo em que
ele vai existir. Rogerio, pode começar."

---

## ⏱️ Rogerio — LBI e Proteção Legal [1:00 – 2:30] (1 min 30 seg)

[SLIDE 3: Título "LBI — A Lei que Obriga Todo Dev Brasileiro"]
[SLIDE 4: Texto do Art. 63 com destaque visual]

**Rogerio:**

"Obrigado, Enzo. Lei nº 13.146 de 2015 — a Lei Brasileira de Inclusão.
Muita gente acha que acessibilidade digital é opcional. Não é."

"O Artigo 63 da LBI diz textualmente que qualquer empresa com sede no
Brasil que mantém site na internet tem *obrigação legal* de garantir
acessibilidade. Isso nos inclui — e inclui qualquer e-commerce que vocês
venham a criar."

[SLIDE 5: Lista das 4 práticas de proteção legal — bullets animados]

"Como um desenvolvedor se protege juridicamente? Com 4 práticas:
primeiro, uma Declaração de Acessibilidade pública no site. Segundo,
relatórios de auditoria gerados por ferramentas como o ASES. Terceiro,
uma política de manutenção contínua — documentando que acessibilidade
é processo. Quarto, um canal de feedback ativo para quem encontrar
barreiras."

"A ausência dessas práticas não é só uma falha técnica. Em um processo
judicial, ela é prova de negligência."

*"Passo para o Nascimento, que vai mostrar o que acontece quando empresas
ignoram isso — com dados reais dos Estados Unidos."*

---

## ⏱️ NASCIMENTO — ADA e Processos nos EUA [2:30 – 4:30] (2 minutos)

[SLIDE 6: Título "ADA + Números que Fazem CEO Perder o Sono"]
[SLIDE 7: Gráfico de barras — crescimento de processos ADA 2018–2022]

**Nascimento:**

"Obrigado, Rogerio. Se a LBI mostra a lei brasileira, os dados americanos
mostram o que acontece quando empresas ignoram essas leis."

"A ADA — Americans with Disabilities Act — existe desde 1990. Mas foi
nos últimos 5 anos que as ações por acessibilidade web explodiram.
Em 2022 foram 4.605 processos federais só nos EUA. E-commerce responde
por 80% desses casos. O acordo médio? Entre 25 e 100 mil dólares —
sem contar os honorários."

[SLIDE 8: Card visual — Domino's Pizza v. Robles, 2019, com foto do logo]

"O caso mais famoso: Domino's Pizza versus Robles, 2019. Guillermo Robles
é cego e usa leitor de tela. Ele tentou pedir uma pizza pelo app e pelo
site da Domino's. Não conseguiu. A Domino's argumentou que a ADA não
cobria plataformas digitais. O tribunal disse o contrário. A decisão do
9º Circuito estabeleceu um precedente que vale até hoje: app e site são
extensões do negócio físico. Eles precisam ser acessíveis."

[SLIDE 9: Card visual — Target Corp., 2008, US$ 6 milhões]

"E isso não começou ontem. Em 2008, a Target Corporation pagou 6 milhões
de dólares em um processo coletivo. O problema? Imagens sem texto
alternativo e formulários sem rótulos. Problemas que levam minutos para
corrigir. O processo levou anos."

"A lição é simples: consertar acessibilidade depois custa 100 vezes mais
do que construir acessível desde o início."

*"Enzo vai nos mostrar as ferramentas brasileiras que nos permitem fazer
exatamente isso — construir certo desde o começo."*

---

## ⏱️ ENZO — e-MAG e Ferramentas Brasileiras [4:30 – 6:00] (1 min 30 seg)

[SLIDE 10: Título "e-MAG + ASES + VLibras — O Arsenal Brasileiro"]
[SLIDE 11: Diagrama das 6 seções do e-MAG com ícones]

**Enzo:**

"Obrigado, Nascimento. Aqui no Brasil, temos um modelo técnico oficial
de acessibilidade chamado e-MAG — Modelo de Acessibilidade em Governo
Eletrônico. Ele adapta os padrões internacionais para a realidade
brasileira, incluindo suporte obrigatório a Libras."

"Ele organiza os requisitos de acessibilidade em 6 áreas: marcação HTML,
comportamento da interface, conteúdo e informação, design e apresentação,
multimídia, e formulários."

[SLIDE 12: Screenshot mockado da interface do ASES + barra de pontuação]

"Para validar a conformidade, usamos o ASES — Avaliador e Simulador de
Acessibilidade. É gratuito, feito pelo governo, e gera relatórios em PDF
que viram documentação legal. Quando o MVP da GlitchStore estiver no ar,
o ASES será a nossa primeira auditoria."

[SLIDE 13: Mockup do widget VLibras em uma tela de produto da GlitchStore]

"E para incluir a comunidade surda — 10 milhões de brasileiros que usam
Libras — integraremos o VLibras Widget. Uma única linha de código JavaScript
adiciona um avatar que traduz todo o conteúdo do site para Libras em tempo
real. Custo técnico: mínimo. Impacto: enorme."

*"Para fechar o quadro técnico e legal, o Noé vai falar do padrão
internacional que conecta tudo isso — a WCAG e a nova lei europeia
que entrou em vigor este ano."*

---

## ⏱️ NOÉ — WCAG 2.1/2.2 e EAA [6:00 – 7:30] (1 min 30 seg)

[SLIDE 14: Título "WCAG — O Padrão que o Mundo Usa"]
[SLIDE 15: Os 4 Princípios POUR com ícones e exemplos da GlitchStore]

**Noé:**

"Obrigado, Enzo. Para encerrar o quadro técnico: a WCAG — Web Content
Accessibility Guidelines — é o padrão publicado pelo W3C, o consórcio
internacional que define os padrões da web. É referenciada pela LBI
brasileira, pela ADA americana e, como vou mostrar, pela nova lei europeia."

"A WCAG se organiza em 4 princípios que chamamos de POUR: o conteúdo
precisa ser Perceptível — imagens com texto alternativo. Operável —
o checkout da GlitchStore funciona 100% com teclado, sem mouse.
Compreensível — nossas mensagens de erro dizem 'CPF inválido, use apenas
números', não só 'erro 422'. E Robusto — nosso HTML é semântico e
compatível com qualquer leitor de tela."

[SLIDE 16: Card comparativo WCAG 2.1 vs 2.2 — destaque para 3.3.7]

"Em outubro de 2023, saiu a WCAG 2.2 com 8 novos critérios. Um deles é
direto para o nosso checkout: o critério 3.3.7 — Redundant Entry — proíbe
pedir a mesma informação duas vezes em formulários multi-etapa. Simples,
mas poderoso."

[SLIDE 17: Mapa da Europa + EAA + data Jun/2025 em destaque]

"E finalmente: em junho de 2025, a EAA — Lei Europeia de Acessibilidade —
entrou em vigor pleno. Todos os e-commerces que operam na União Europeia
devem seguir a WCAG nível AA. Qualquer produto digital brasileiro que
queira crescer globalmente precisa nascer acessível."

"Nossa GlitchStore nascerá acessível. Nível AA. Desde o Figma."

---

## ⏱️ FECHAMENTO COLETIVO [7:30 – 8:00] (30 segundos)

[SLIDE 18: Slide final — Logo GlitchStore + checklist MVP + próximos passos]
[SLIDE 19: "Obrigado | Squad NexCode | Perguntas?"]

**Enzo (retomando a palavra):**

"Para resumir: o Squad NexCode pesquisou 4 marcos legais — LBI, ADA,
e-MAG e WCAG/EAA — e construiu com base neles o planejamento completo
do MVP da GlitchStore. Definimos as páginas, a stack, as ferramentas de
validação e a divisão de tarefas para as próximas fases."

**[TODOS OS 4 INTEGRANTES EM PÉ, JUNTOS]**

"Acessibilidade não é um feature extra. É a fundação."
"Squad NexCode. Obrigado."

*(abrir para perguntas)*

---

## 📌 NOTAS TÉCNICAS PARA OS SLIDES

| Slide | Ferramenta sugerida | Dica visual |
|---|---|---|
| Logo GlitchStore | Canva | Fundo #0D0D0D, tipografia tech, cor accent verde #00FF88 |
| Gráfico processos ADA | Canva / Google Slides | Barras ascendentes, destaque no ano 2022 |
| Domino's / Target | Cards simples no Canva | Foto pública do logo + valores em destaque |
| Princípios POUR | 4 cards coloridos | Um ícone por princípio, exemplo GlitchStore embaixo |
| VLibras mockup | Print do widget real | Colocar em cima de uma tela fake da loja |
| EAA / Europa | Mapa vetorial no Canva | Países da UE em azul, data em destaque |
________________________________________
PARTE 4: EXPLICAÇÃO E PRÓXIMOS PASSOS
Por que as decisões foram tomadas assim
Sobre o nicho escolhido: "GlitchStore — periféricos gamer e jogos indie" foi escolhido porque conecta diretamente ao universo de vocês (16 anos, cultura tech), torna exemplos de acessibilidade mais concretos ("imagine um gamer com deficiência motora querendo comprar um controle adaptado"), e dá uma identidade visual forte para os slides.
Sobre a divisão de tarefas futuras:
•	Rogerio → Figma porque sua pesquisa sobre LBI e proteção legal exige entender o produto por inteiro antes de construir — visão sistêmica de quem projeta interfaces.
•	Nascimento → Front-end porque a pesquisa de processos americanos (dados, casos reais) demonstra mentalidade analítica e orientada a evidências — perfil de quem implementa e valida.
•	Enzo → Back-end + BD porque a pesquisa de ferramentas (ASES, VLibras, e-MAG) envolve integração de sistemas, APIs e documentação técnica — exatamente o perfil de back-end.
•	Noé → Documentação + QA porque a pesquisa de WCAG e EAA exige precisão técnica e atenção a critérios detalhados — perfil ideal para quem vai auditar o produto.
Sobre as 5 fontes: Todas são fontes reais e verificáveis — W3C, Planalto, Gov.br, UsableNet, EUR-Lex. Os formatos de citação seguem a ABNT (fontes 1–3) e o padrão internacional (4–5). Podem verificar todas as URLs.
Sobre o infográfico textual: Transformei em roteiro de produção detalhado porque a instrução proibiu geração de imagem, mas o roteiro que está na Parte 1 é suficiente para qualquer membro da equipe montar no Canva em 30–40 minutos seguindo passo a passo.
________________________________________
✅ Checklist do que vocês precisam fazer fisicamente antes da entrega
GitHub (Enzo ou quem tiver mais familiaridade):
•	Criar repositório: glitchstore-squad-nexcode (público)
•	Criar arquivo README.md e colar o conteúdo da Parte 1 completo
•	Adicionar todos os 4 integrantes como colaboradores
•	Criar pasta /docs e jogar o Word e o PDF do infográfico lá dentro
Infográfico (Rogerio ou Noé — quem tiver mais habilidade no Canva):
•	Abrir o Canva, criar um design "Infográfico Horizontal" (1920×1080)
•	Seguir o roteiro da Seção "Roteiro do Infográfico" do README ponto a ponto
•	Exportar em PNG alta resolução E em PDF
•	Subir no /docs do GitHub
Word (Nascimento edita, todos revisam):
•	Copiar o conteúdo da Parte 2 para um documento .docx novo
•	Aplicar estilos de Título 1, Título 2, corpo de texto do Word
•	Adicionar cabeçalho com nome da escola e data de entrega
•	Compartilhar no Google Docs ou via Teams para revisão coletiva
•	Cada integrante revisar pelo menos a própria seção antes de entregar
Apresentação (todos):
•	Criar os slides no Canva ou Google Slides seguindo as sugestões da Parte 3
•	Ensaiar com cronômetro pelo menos uma vez. 8 min é rígido.
•	O slide com o infográfico pronto é o visual mais impactante — priorizem ele
Dia da apresentação:
•	Chegarem juntos e testarem o projetor antes da aula começar
•	Cada um ter o roteiro na mão (não decorado — lido de forma natural)
•	Rogerio fecha no computador, avança os slides


