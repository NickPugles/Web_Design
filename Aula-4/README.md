Atividade Didática de HTML5 e CSS3

## Descrição do Projeto
Este projeto foi desenvolvido como atividade didática com o objetivo de aplicar conhecimentos de HTML5 e CSS3 por meio da construção de uma página web.
A página apresenta diferentes elementos utilizados no desenvolvimento de sites, incluindo imagens, vídeos, áudios, formulários, links, listas, tabelas e contêineres.
O projeto demonstra a organização dos arquivos de estrutura e estilização de uma página, utilizando arquivos separados para HTML e CSS.

## Objetivo
Desenvolver uma página web simples e organizada, colocando em prática os principais recursos do HTML5 e CSS3.
A atividade aborda conceitos de estruturação de conteúdo, inserção de mídias, criação de formulários, utilização de identificadores e classes e aplicação de estilos visuais.

## Tecnologias Utilizadas
- HTML5: utilizado para criar a estrutura e organizar os conteúdos da página.
- CSS3: utilizado para definir cores, fontes, espaçamentos, alinhamentos e aparência dos elementos.

## Estrutura do Projeto

│
├── index.html
├── style.css
├── README.md
│
├── imagens/
│   ├── paisagem-natural-png.webp
│   ├── praia.webp
│   ├── cidade.webp
│   └── capa_do_video.jpeg
│
├── video/
│   └── video.mp4
│
└── audio/
    ├── musica.mp3
    └── musica.ogg

## Descrição dos Arquivos e Pastas
- index.html: arquivo principal responsável pela estrutura e pelo conteúdo da página.
- style.css: arquivo responsável pela estilização dos elementos e pela organização visual do site.
- README.md: arquivo responsável pela documentação e apresentação das informações do projeto.
- imagens/: pasta com as três imagens da galeria e a capa (poster) utilizada no vídeo.
- video/: pasta destinada ao armazenamento do arquivo de vídeo (video.mp4).
- audio/: pasta destinada ao armazenamento dos arquivos de áudio nos formatos MP3 e OGG.

## Conteúdos Desenvolvidos
Durante a construção do projeto, são abordados os seguintes recursos:

1. Estrutura HTML5
Utilização das principais tags de estruturação de uma página web:
- <html>
- <head>
- <body>
- <header>
- <nav>
- <main>
- <section>
- <footer>

2. Inserção de Imagens (Utilização da tag <img> para apresentar três imagens diferentes na página.) Foram utilizados os atributos:
- src: indica o caminho da imagem.
- alt: apresenta uma descrição alternativa.
- width: define a largura.
- height: define a altura.

3. Inserção de Vídeo (Utilização da tag <video> para adicionar um vídeo à página.) Foram aplicados os atributos:
- controls: apresenta os controles de reprodução.
- width: define a largura do vídeo.
- poster: define a imagem de capa apresentada antes da reprodução.

4. Inserção de Áudio (Utilização da tag <audio> para adicionar um arquivo de áudio.) Foram configuradas duas fontes:
- MP3 (musica.mp3).
- OGG (musica.ogg), como fonte alternativa para navegadores sem suporte a MP3.
- Também foi utilizado o atributo controls para disponibilizar os controles de reprodução e um texto alternativo para navegadores que não oferecem suporte ao áudio.

5. Criação de Formulário (Desenvolvimento de um formulário contendo):
- Campo para nome.
- Campo para e-mail.
- Campo para mensagem.
- Botão de envio.
- Foram utilizados os atributos required e type="email" para permitir a validação básica dos campos pelo navegador.

6. Criação de Links (Utilização de três tipos de links):
- Link simples direcionando para o Google.
- Link utilizando uma imagem clicável.
- Link configurado para abrir em uma nova aba com target="_blank".

7. Criação de Listas (Utilização de duas estruturas de listas):
- <ol>: lista ordenada contendo três passos.
- <ul>: lista não ordenada contendo três itens.

8. Construção de Tabelas, contendo três colunas, utilizou-se:
- <table>: estrutura principal da tabela.
- <thead>: identificação do cabeçalho.
- <tbody>: organização dos dados.
- <th>: células de cabeçalho.
- <td>: células de dados.

9. Utilização de IDs e Classes (Aplicação de identificadores e classes para selecionar e estilizar elementos específicos.):
- id="introducao": identifica o parágrafo introdutório.
- class="destaque": aplicada em dois parágrafos que recebem fundo amarelo claro.

10. Utilização de DIV como Contêiner (Criação de uma <div> utilizando a classe caixa para agrupar):
- Um subtítulo.
- Dois parágrafos explicativos.
- A classe recebe estilização no CSS para apresentar uma aparência diferenciada.

## Estilização CSS3 (O arquivo CSS é responsável pela organização visual dos elementos da página.).
- Cores de fundo e de texto.
- Estilização de títulos e parágrafos.
- Margens e espaçamentos.
- Organização de imagens.
- Estilização de formulários.
- Formatação de tabelas.
- Destaque de parágrafos.
- Personalização de contêineres.
- Estilização do cabeçalho e rodapé.
- Media Queries para adaptação em dispositivos móveis.

## Como Executar o Projeto
1. Baixe ou clone o repositório.
2. Abra a pasta do projeto.
3. Execute o arquivo index.html em um navegador.

## Recursos da Página
1. Cabeçalho com título e menu de navegação.
2. Conteúdo principal organizado em grade de cartões (4 colunas no desktop, adaptável em telas menores).
3. Galeria com três imagens.
4. Reprodução de vídeo.
5. Reprodução de áudio.
6. Formulário de contato.
7. Links externos e imagem clicável.
8. Lista ordenada e lista não ordenada.
9. Tabela com informações organizadas.
10. Parágrafos com identificadores e classes.
11. Contêiner DIV com estilização própria.
12. Rodapé com informações do site.

## Considerações Finais
A atividade aborda a aplicação prática dos principais conceitos de HTML5 e CSS3 na construção de uma página web.
Por meio do desenvolvimento do projeto, são explorados recursos de estruturação de conteúdo, inserção de elementos multimídia, criação de formulários, organização de informações e estilização de elementos.
O projeto também permite compreender a importância da organização dos arquivos e da separação entre estrutura HTML e apresentação visual CSS.