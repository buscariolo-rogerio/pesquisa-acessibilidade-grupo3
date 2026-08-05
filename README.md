# EREN — MVP de E-Commerce Acessível
### Squad NexCode | Disciplina: Desenvolvimento de Aplicações Dinâmicas
> **Fase 1: Pesquisa de Acessibilidade e Planejamento Estratégico do MVP**

---

## 📋 Sobre o Projeto

A **EREN** consiste no *Minimum Viable Product* (MVP) de um comércio eletrônico especializado em periféricos, jogos independentes e equipamentos tecnológicos de alto desempenho. O escopo desta fase inicial concentra-se no planejamento estratégico e na fundamentação legal e técnica: compreender as legislações e as diretrizes de acessibilidade digital essenciais para a viabilidade do produto, documentando todos os requisitos antes do início do desenvolvimento.

A priorização da acessibilidade fundamenta-se em dados demográficos críticos: no Brasil, 18,6 milhões de pessoas possuem algum tipo de deficiência visual, auditiva ou motora (IBGE, 2022). A exclusão deste público transcende a esfera ética, configurando-se como um equívoco estratégico de mercado e, em diversas instâncias, uma violação direta da legislação vigente.

---

## 👥 A Equipe — Squad NexCode

| Integrante | Tema de Pesquisa | Atribuições nas Fases Seguintes |
|---|---|---|
| **Rogerio** | LBI e Proteção Legal para Desenvolvedores | UI/UX Design (Figma) |
| **Enzo N.** | ADA e Análise de Litígios nos EUA | Front-end (JS Vanilla) |
| **Enzo C.** | e-MAG e Ferramentas Nacionais (ASES, VLibras) | Back-end e Banco de Dados |
| **Noé** | WCAG 2.1/2.2 e EAA (Diretiva Europeia 2025) | Documentação Técnica e QA |

---

## 🔬 Fase 1 — Pesquisa de Acessibilidade Digital

### 1.1 Rogerio — Lei Brasileira de Inclusão (LBI) e Proteção Legal

#### Fundamentação da LBI
A **Lei nº 13.146/2015**, instituída como o Estatuto da Pessoa com Deficiência ou Lei Brasileira de Inclusão (LBI), representa o principal marco legal de acessibilidade no Brasil. Sua formulação baseia-se na **Convenção da ONU sobre os Direitos das Pessoas com Deficiência**, tratado internacional do qual o Brasil é signatário.

#### A LBI no Ambiente Digital
O **Artigo 63** da referida lei estabelece diretrizes claras sobre o ambiente virtual:

> *"É obrigatória a acessibilidade nos sítios da internet mantidos por empresas com sede ou representação comercial no País ou por órgãos de governo, para uso da pessoa com deficiência, garantindo-lhe acesso às informações disponíveis, conforme as melhores práticas e diretrizes de acessibilidade adotadas internacionalmente."*
> — Art. 63, Lei nº 13.146/2015

**Implicação para a EREN:** Na condição de e-commerce brasileiro, a implementação de medidas de acessibilidade na EREN constitui uma exigência legal imperativa.

#### Normatização Técnica e Mitigação de Riscos
A LBI faz menção às "melhores práticas internacionais", que tecnicamente correspondem à **WCAG** e, no âmbito nacional, à norma **ABNT NBR 17060** (Acessibilidade em Tecnologias de Informação e Comunicação).

Para resguardar a operação e a equipe de desenvolvimento contra passivos jurídicos, recomenda-se a adoção e a documentação das seguintes práticas:

1. **Declaração de Acessibilidade**: Publicação de um documento oficial detalhando os padrões adotados, limitações temporárias e disponibilização de canais de atendimento específicos.
2. **Auditorias Registradas**: Uso de relatórios de ferramentas como o ASES para gerar evidências documentais de conformidade.
3. **Política de Manutenção Contínua**: Comprovação de que a acessibilidade integra o ciclo de vida do produto, refutando hipóteses de negligência.
4. **Canal de Retorno de Usuários (Feedback)**: Prática recomendada pelo e-MAG para o tratamento proativo de eventuais barreiras de acesso.

---

### 1.2 Enzo N. — ADA (Americans with Disabilities Act) e Jurisprudência nos EUA

#### O que é a ADA?
A **Americans with Disabilities Act (ADA)**, legislação federal estadunidense promulgada em 1990, proíbe a discriminação contra pessoas com deficiência. O **Título III** desta legislação exige a acessibilidade em "locais de acomodação pública".

#### Jurisprudência no Meio Digital
A jurisprudência norte-americana recente consolidou o entendimento de que plataformas digitais de empresas com operação comercial estão subordinadas ao Título III da ADA.

#### Impacto Estatístico e Risco Jurídico
Conforme o **Relatório Anual de Acessibilidade Web da UsableNet (2023)**:

* Ocorreram **4.605 litígios federais** referentes à acessibilidade web nos EUA em 2022 (aumento de 12% em relação a 2021).
* O setor de comércio eletrônico concentra aproximadamente 80% das ações.
* Os acordos extrajudiciais (*settlements*) variam, em média, de **US$ 25.000 a US$ 100.000**, excluindo honorários advocatícios.

#### Precedentes Históricos
* **Domino's Pizza v. Robles (2019):** O 9º Circuito Federal estabeleceu que plataformas digitais operam como extensões dos serviços físicos, determinando a obrigatoriedade de conformidade com a ADA após um usuário cego ser impedido de concluir uma compra.
* **Target Corporation (2008):** Uma Ação Civil Pública (*class action*) culminou em um acordo de **US$ 6 milhões** devido à ausência de atributos alternativos em imagens e formulários inacessíveis a leitores de tela.

**Diretriz para a EREN:** A expansão futura para o mercado internacional demandará aderência rigorosa à WCAG para neutralizar severos riscos jurídicos.

---

### 1.3 Enzo C. — e-MAG e Ferramentas Nacionais de Conformidade

#### Conceituação do e-MAG
O **Modelo de Acessibilidade em Governo Eletrônico (e-MAG)** consiste no padrão técnico brasileiro de acessibilidade web. Desenvolvido com base na WCAG, ele adapta as diretrizes globais às especificidades nacionais, com destaque para a obrigatoriedade do suporte à **Libras** (Língua Brasileira de Sinais). O e-MAG consolida-se como referência técnica fundamental para projetos privados de alta qualidade no Brasil.

#### Estruturação Técnica (e-MAG 3.1)
O modelo está segmentado em seis dimensões:

| Seção | Escopo Técnico |
|---|---|
| **Marcação** | Semântica de código HTML |
| **Comportamento** | Gerenciamento de foco e navegabilidade via teclado |
| **Conteúdo/Informação** | Texto alternativo, índices de contraste e clareza textual |
| **Apresentação/Design** | Desacoplamento de CSS e suporte a redimensionamento |
| **Multimídia** | Legendagem, audiodescrição e integração de Libras |
| **Formulário** | Rotulagem explícita e tratamento de erros acessível |

**Relevância para a EREN:** As áreas de Formulários (fluxo de *checkout*) e Multimídia exigirão rigorosa aplicação das normas descritas.

#### Ferramentas Operacionais
* **ASES (Avaliador e Simulador de Acessibilidade em Sítios):** Ferramenta governamental para análise automatizada de conformidade com os modelos e-MAG e WCAG. Será a ferramenta principal para auditoria documental da EREN.
* **VLibras:** Solução de tradução simultânea para a Língua Brasileira de Sinais via avatar tridimensional. A integração do *VLibras Widget* será implementada de forma nativa em todas as instâncias visuais do e-commerce.
* **DaSilva:** Validador auxiliar utilizado para verificações manuais complementares.

---

# Enzo nascimento - ADA
## O que é a ADA?

A Americans with Disabilities Act (1990) é a lei federal americana que
proíbe discriminação contra pessoas com deficiência. O Título III exige
que "lugares de acomodação pública" sejam acessíveis — e os tribunais
americanos consolidaram o entendimento de que sites e apps de empresas
comerciais se enquadram nessa categoria.

## Os números que assustam qualquer empreendedor

Segundo o Relatório UsableNet 2023:
- 4.605 ações judiciais federais por acessibilidade web nos EUA em 2022
- Alta de 12% em relação ao ano anterior
- E-commerce corresponde a ~80% dos casos
- Acordo médio: US$ 25.000 a US$ 100.000 (mais honorários)
- Empresas pequenas também foram processadas — tamanho não é proteção

## Caso Domino's Pizza v. Robles (2019)

Guillermo Robles, deficiente visual usuário de leitor de tela, não
conseguiu fazer um pedido pelo app e site da Domino's. Após batalha
judicial, o 9º Circuito Federal decidiu: a ADA cobre plataformas
digitais. O caso foi ao Supremo e devolvido ao tribunal de origem,
consolidando o precedente. A Domino's teve que adequar suas plataformas.

Lição direta: uma única funcionalidade inacessível no checkout pode
gerar um processo que custa dezenas de vezes mais do que teria custado
corrigir o problema.

## Caso Target Corporation (2008)

Processo coletivo movido pela National Federation of the Blind. Imagens
sem alt text, formulários sem labels, estrutura de navegação inacessível.
Acordo: US$ 6 milhões para os afetados + remediação técnica completa
do site. Um dos primeiros marcos do e-commerce em acessibilidade.


### 1.4 Noé — WCAG 2.1/2.2 e EAA (European Accessibility Act)

#### Diretrizes WCAG
As **Web Content Accessibility Guidelines (WCAG)**, desenvolvidas pelo **W3C**, configuram o principal protocolo internacional de acessibilidade web, sendo a base fundamental de legislações globais como a LBI, a ADA e a EAA.

#### Princípios Estruturais (POUR)

| Princípio | Definição | Aplicação Prática na EREN |
|---|---|---|
| **Perceptível** | Disponibilidade de informações por vias sensoriais alternativas. | Inserção de atributos `alt` descritivos no catálogo de produtos. |
| **Operável** | Navegabilidade ampla da interface e tolerância de tempo. | Fluxo de finalização de compra funcional exclusivamente via teclado. |
| **Compreensível** | Previsibilidade operacional e semântica clara. | Retornos de erro literais e instrutivos em campos de formulário. |
| **Robusto** | Alta compatibilidade com tecnologias assistivas. | Utilização de HTML semântico rigorosamente validado. |

#### Níveis de Conformidade
* **Nível A**: Critérios mínimos de acessibilidade.
* **Nível AA**: Padrão regulatório global. **Meta oficial da EREN.**
* **Nível AAA**: Nível máximo de otimização; será adotado nos fluxos críticos (ex.: pagamento).

#### Atualizações Recentes (WCAG 2.1 e 2.2)
As versões recentes introduziram requisitos críticos para dispositivos móveis, contraste dinâmico de interface, legibilidade sob zoom de 400% e otimização para deficiências cognitivas.
* **Impacto na EREN (Critério 3.3.7 - *Redundant Entry*):** O fluxo de *checkout* multi-etapas será projetado para não exigir a reintrodução de dados previamente preenchidos (como endereços de faturamento e entrega).

#### Regulamentação Europeia (EAA)
A **Lei Europeia de Acessibilidade (Diretiva 2019/882)**, com vigência plena desde 28 de junho de 2025, estipulou que comércio eletrônico e serviços digitais na União Europeia devem, obrigatoriamente, seguir as normas da WCAG (Nível AA). Conclui-se que o desenvolvimento de sistemas escaláveis e internacionalizáveis demanda acessibilidade estrutural por definição (*accessibility by design*).

---

### 1.5 Evolução Histórica (Pesquisa Coletiva)

O cenário brasileiro já apresenta movimentações institucionais severas em prol da conformidade digital. O Ministério Público tem firmado Termos de Ajustamento de Conduta (TAC) em diversos municípios, enquanto o Procon-SP tem autuado empresas de e-commerce sob a premissa de que o bloqueio de acesso configura violação do Direito do Consumidor. Plataformas de grande porte do setor financeiro e varejista já consolidaram o tema não apenas como dever jurídico, mas como diferencial competitivo de mercado.

---

## 🗓️ Roteiro Estrutural para o Infográfico 
> **Diretrizes para montagem visual (Design/Canva): Formato de fluxo horizontal com paleta de cores institucional e iconografia objetiva.**

**[CABEÇALHO]**
* Título: "Evolução Histórica e Legal da Acessibilidade Digital"
* Subtítulo: "Marcos Regulatórios e Técnicos do Desenvolvimento Web"
* Logotipo EREN (Topo Direito) | Squad NexCode (Base)

**[CRONOLOGIA]**
1. **1990 (EUA): ADA** - Proibição da discriminação contra PcD. Precedente para o meio digital.
2. **1999 (Global): WCAG 1.0 (W3C)** - Publicação do primeiro protocolo técnico para a web.
3. **2008 (EUA): Target Corp. / WCAG 2.0** - Acordo judicial de US$ 6 milhões. W3C publica os 4 princípios POUR.
4. **2015 (Brasil): LBI** - Art. 63 estabelece a acessibilidade digital obrigatória em empresas nacionais.
5. **2018 (Global): WCAG 2.1** - Introdução de critérios rigorosos para plataformas *mobile* e usabilidade cognitiva.
6. **2019 (EUA): Domino's v. Robles** - Tribunal consolida a cobertura da ADA sobre e-commerces e aplicativos.
7. **2023 (Global): WCAG 2.2** - Reestruturação de foco visual e fluxos de inserção de dados em formulários.
8. **Jun/2025 (Europa): EAA em Vigor** - Regulamentação ampla obriga plataformas a adotarem o nível WCAG AA.
9. **Fase Atual: EREN MVP** - E-commerce arquitetado desde a base sob os preceitos WCAG AA, e-MAG e ASES.

---

## 🗂️ Divisão Operacional das Fases Subsequentes

### Fase 2 — Prototipação e Interface (UI/UX)
**Responsável: Rogerio** | Apoio Consultivo: Equipe

* Elaboração de *wireframes* estruturais (Página Inicial, Catálogo, Carrinho, *Checkout*).
* Validação de contraste de paleta cromática sob a métrica WCAG AA (proporção mínima 4.5:1).
* Design de componentes visuais semânticos e estados de erro proativos.
* Mapeamento de usabilidade via navegação sequencial por teclado.

### Fase 3 — Engenharia Front-end
**Responsável: Enzo N.** | Integração: Enzo C.

* Desenvolvimento baseado em estruturação HTML5 estritamente semântica.
* Implementação supletiva de atributos WAI-ARIA em componentes assíncronos.
* Configuração e testes de manipulação de Eventos de Teclado (Tab, Enter, Esc).
* Acoplamento tecnológico do *script* VLibras Widget.
* Responsividade escalável e homologação automatizada no ASES.

### Fase 4 — Engenharia Back-end e Persistência de Dados
**Responsável: Enzo C.** | Integração: Enzo N.

* Arquitetura relacional de banco de dados (Entidades de Produto, Usuário, Pedido).
* Exposição de Endpoints via API RESTful para consumo das interfaces.
* Implementação de protocolos de autenticação baseados em *Tokens* (JWT).
* Validação e higienização severa de parâmetros para prevenção a vulnerabilidades (ex.: Injeção de SQL).

### Fase 5 — Qualidade de Software (QA) e Documentação Oficial
**Responsável: Noé** | Suporte Integral: Equipe

* Curadoria e gestão do repositório documental.
* Formulação e publicação da Declaração de Acessibilidade da EREN.
* Execução de testes heurísticos de acessibilidade com leitores de tela autônomos (ex.: NVDA).
* Emissão do Parecer Técnico de Conformidade (Relatório ASES + Checklist WCAG AA).

---

## 📚 Referências Bibliográficas

1. **W3C — World Wide Web Consortium.** *Web Content Accessibility Guidelines (WCAG) 2.2.* W3C Recommendation, 05 out. 2023. Disponível em: https://www.w3.org/TR/WCAG22/. Acesso em: abr. 2026.
2. **BRASIL.** *Lei nº 13.146, de 6 de julho de 2015. Institui a Lei Brasileira de Inclusão da Pessoa com Deficiência.* Diário Oficial da União, Brasília, DF, 7 jul. 2015. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm. Acesso em: abr. 2026.
3. **BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos.** *e-MAG — Modelo de Acessibilidade em Governo Eletrônico, versão 3.1.* Brasília: SLTI/MP, 2014. Disponível em: https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/emag. Acesso em: abr. 2026.
4. **USABLENET.** *2023 ADA Web and App Accessibility Lawsuits: Year in Review.* Nova York: UsableNet Inc., jan. 2024. Disponível em: https://usablenet.com/resources/reports/2023-ada-digital-accessibility-lawsuits. Acesso em: abr. 2026.
5. **EUROPEAN COMMISSION.** *Directive (EU) 2019/882 of the European Parliament and of the Council (European Accessibility Act).* Official Journal of the European Union, L 151, 7 jun. 2019. Disponível em: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0882. Acesso em: abr. 2026.
