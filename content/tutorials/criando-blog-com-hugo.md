---
date: 2025-04-10T00:06:26-03:00
description: "Criando e publicando um site estático com Hugo Framework"
lastmod: 2025-04-10
showTableOfContents: true
tags: ["hugo", "web", "blog", "markdown", "portfolio"]
title: "Como criar seu blog com Hugo"
type: "post"
---

![Banner Hugo](https://gohugo.io/images/hugo-logo-wide.svg)

# Hugo Framework

Hugo é um rápido framework de código aberto e gratuito para a contrução de sites estáticos.  É distribuído sob [Licença Apache 2.0](https://en.wikipedia.org/wiki/Apache_License), possuí uma comunidade grande e ativa, além de ser mantido constantemente com novos recursos adicionados regularmente. 

O código aberto do Hugo é escrito em [Go](https://go.dev/) e está disponível no [GitHub](https://github.com/gohugoio/hugo). Pela sua velocidade e flexibilidade Hugo torna a construção de sites divertida.

Acesse a [página oficial do Hugo](https://gohugo.io/) para saber mais.

## O que é um site estático?

Um site estático é um site cujo o seu conteúdo é fixo para todos os usuários, ideal para o desenvolvimento de blogs e portfolios. A grande vantagem de um site estático com Hugo, é o desenvolvimento de sites rápidos e simples, com fácil manutenção no código e no gerenciamento do conteúdo. 

## Instalando o Hugo

### Mac OS

    $ brew install hugo

### Linux

**Via Snap:**

Gerenciador de pacotes gratuito e de código aberto para Linux.

    $ sudo snap install hugo 

**Arch Linux:**

Para distribuições derivadas do Arch Linux como o EndeavourOS, Garuda Linux, Manjaro e outros.

    $ sudo pacman -S hugo

**Debian:**

Para distribuições derivadas do Debian como o elementary OS, KDE neon, Linux Lite, Linux Mint, MX Linux, Pop!_OS, Ubuntu, Zorin OS e outros.

    $ sudo apt install hugo

### Windows

    $ choco install hugo -confirm 

### Outras maneiras de instalação

[Consulte o guia de instalação do Hugo no site oficial](https://gohugo.io/installation/).

## Criando o site

Crie um site com Hugo em minutos.

### Pré-requisitos

- [Instalação do Hugo](#instalação-do-hugo)
- [Instalação do Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Tema do site

O Hugo possuí diversos temas bonitos e prontos para serem usados que foram criados previamente por outros desenvolvedores. [Confira todos os temas disponíveis para o Hugo](https://themes.gohugo.io/).

Vamos usar o tema [devise](https://themes.gohugo.io/themes/devise/) como exemplo.

![Tela inicial do tema](https://themes.gohugo.io/themes/devise/screenshot_hu_299244e9cdfee279.webp)

Criando projeto... Use o comando a seguir para criar os arquivos básicos do projeto:

    $ hugo new site myblog

Entre na pasta `myblog` pelo terminal com:

    $ cd myblog

Inicialize as configurações Git no projeto:

    $ git init

Adicione o tema devise ao projeto:

    $ git submodule add https://github.com/austingebauer/devise.git themes/devise

Em seguida configure o arquivo `config.toml`. Abra o arquivo de configurações e na última linha adicione o tema do projeto:

    theme = 'devise'

Para visualizar o site digite o seguinte comando:

    hugo server

E acesse o endereço [http://localhost:1313/](http://localhost:1313/).

### Estrutura do site 

A estrutura do site deve ser parecida com essa:

    myblog/
    ├── archetypes/
    │   └── default.md
    ├── content/
    ├── data/
    ├── layouts/
    ├── resources/
    ├── static/
    ├── themes/
    │   └── devise
    └── config.toml         <-- configuração do site

#### Diretórios

- **archetypes:** modelos para a criação de novos conteúdos.

- **content:** conteúdos do site.

- **data:** arquivos dinâmicos (JSON, TOML, YAML ou XML) para aprimorar o conteúdo, configuração, localização e navegação.

- **layouts:** modelos a parte para aprimorar o conteúdo, dados e recursos do site.

- **resources:** caches gerados com o comando `hugo` ou `hugo server`.

- **static:** arquivos estáticos como imagem, CSS, JavaScript, favicon.ico, robots.txt.

- **themes:** temas que serão utilizados no site.

Saiba mais sobre a [estrutura de diretórios do Hugo](https://gohugo.io/getting-started/directory-structure/).

### Configurações do site

Todos os recursos de configurações do tema que podem ser adicionados no arquivo `config.toml`: 

    baseURL = "https://example.com"
    title = "Your Website Title"
    languageCode = "en-us"
    theme = "devise"
    relativeURLs = true
    enableEmoji = true
    googleAnalytics = ""
    enableRobotsTXT = true
    copyright = "&copy; Copyright Year, Your Name"

    # Main menu items
    [menu]
    [[menu.main]]
        identifier = "about"
        name = "About"
        title = "About"
        url = "/about/"
        weight = -110
    [[menu.main]]
        identifier = "posts"
        name = "Posts"
        title = "Posts"
        url = "/post/"
        weight = -100
    [[menu.main]]
        identifier = "categories"
        name = "Categories"
        title = "Categories"
        url = "/categories/"
        weight = -90

    # Configuration Features
    [params]
    description = "Your meta description"      # Your meta description of the site
    header_title = "Your Name"                 # Your header title
    header_subtitle = "Your Creative Subtitle" # Your header subtitle
    home_image = "/images/avatar.png"          # Path to header image starting from the static directory (optional)
    recent_posts = 5                           # Max amount of recent posts to show
    mainSections = ["posts", "post", "blog"]   # Main sections to include in recent posts
    [params.style]                             # CSS style overrides
        backgroundColor = "#f8f9fa"
        homeImageBorderColor = "#ffffff"
        fontFamilyBase = "Helvetica Neue"        # First-choice font
        fontColor = "#212529"
    [[params.social]]
        fa_icon = "fab fa-github fa-1x"          # Font Awesome icon class
        href = "http://github.com/youruser"      # Link to associate with icon (http://, https://, mailto:)
    [[params.social]]
        fa_icon = "fab fa-linkedin-in fa-1x"
        href = ""
    [[params.social]]
        fa_icon = "fab fa-twitter fa-1x"
        href = ""
    [[params.social]]
        fa_icon = "fas fa-at fa-1x"
        href = ""

*Cada tema possuí as suas configurações específicas que podem ser encontradas na sua documentação.*

## Publicando uma postagem no site

Uma postagem pode ser criada com o seguinte comando:

    $ hugo new post/first_post.md

Todas as postagens serão salvas dentro do diretório `content`.

O arquivo criado `first_post.md` é um arquivo com formatação de texto do tipo [Markdown](https://pt.wikipedia.org/wiki/Markdown). Ele possuí a seguinte estrutura:

    ---
    title: "First_post"
    date: 2025-04-21T23:20:13-03:00
    draft: true
    ---

O que está entre os três tracinhos é o cabeçalho da página do post que possuí:

- Título da postagem (também usado no nome da url)
- Data da postagem (data e horário que foi criado a publicação)
- Se a postagem é um rascunho (para a postagem ficar visível no site editamos a linha draft para false). Não é necessário que exista a linha `draft: false` para deixar a publicação visível, ela pode ser apagada.

Outras variáveis que podem ser definidas no cabeçalho de `first_post.md`:

    ---
    author: "Hugo Authors"
    title: "First_post"
    date: 2025-04-21T23:31:15-03:00
    description: "primeira postagem no site"
    tags: ["hugo", "site", "blog", "post"]
    ---

Após o cabeçalho, tudo o que estiver abaixo será o conteúdo da publicação escrito no formato **Markdown**.

Exemplo de conteúdo do arquivo `first_post.md`:

    ---
    author: "Hugo Authors"
    title: "First_post"
    date: 2025-04-21T23:31:15-03:00
    description: "primeira postagem no site"
    tags: ["hugo", "site", "blog", "post"]
    ---

    # Minha primeira postagem

    Escrevendo **meu primeiro post** em um site criado com [Hugo](https://gohugo.io/).

    ## Tema do site

    O tema usado no site foi o [devise](https://themes.gohugo.io/themes/devise/).

#### Sintaxe básica do formato Markdown

**Títulos**

    # H1
    ## H2
    ### H3
    #### H4
    ##### H5 

**Paragráfos**

    Um paragráfo separado do outro por uma linha.

    Segundo paragráfo.

**Formatação de texto**

    **Negrito**
    
    *Itálico* 

    ***Negrito e Itálico***

**Citações**

    > Texto de uma citação!
    > 
    > Mais texto.

**Listas**

Ordenada:

    1. Item 1
    2. Item 2
    3. Item 3

Não ordenada:

    - Primeiro
    - Segundo
    - Terceiro

**Código**

Palavra ou frase com código:

    `Linha de código`

Várias palavras com código:

    ```
    Várias 
    linhas 
    de 
    código
    ```

Bloco de código (basta indentar todas linhas uma vez):

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Example HTML5 Document</title>
    </head>
    <body>
        <p>Test</p>
    </body>
    </html>

**Tabela**

    Exemplo   | Valor do exemplo
    --------- | ------
    Exemplo 1 | R$ 10
    Exemplo 2 | R$ 8
    Exemplo 3 | R$ 7
    Exemplo 4 | R$ 8

**Imagens**

    ![Alt ou título da imagem](/caminho/para/imagem)

**Links**

    [Título do Link](link)

[Sintaxe completa para Markdown](https://www.markdownguide.org/basic-syntax/).

## Configurando páginas extras do tema

Criando a página sobre no site e adicionando categorias nas postagens.

### Página sobre

Para criar uma página sobre no site, basta criar o arquivo `about.md` dentro da pasta `content`.

Exemplo do arquivo `about.md`:

    ---
    author: "Hugo Authors"
    title: "About"
    date: 2025-04-21T23:31:15-03:00
    description: "Hugo, the world’s fastest framework for building websites"
    tags: ["about-us","about-hugo","contact"]
    ---

    Written in Go, Hugo is an open source static site generator available under the [Apache Licence 2.0.](https://github.com/gohugoio/hugo/blob/master/LICENSE) Hugo supports TOML, YAML and JSON data file types, Markdown and HTML content files and uses shortcodes to add rich content. Other notable features are taxonomies, multilingual mode, image processing, custom output formats, HTML/CSS/JS minification and support for Sass SCSS workflows.

### Postagens por categorias

Para indexar as postagens por categorias, basta adicionar a seguinte linha no cabeçalho das postagens:

    categories: ["postagem", "hugo", "blog"]

Essa linha vai vai organizar as postagens por categorias na página `categories`, por exemplo, se a postagem se tratar sobre *"como escrever no formato Markdown"*, umas das categorias a ser indexada será a palavra `Markdown` e assim sempre que tiver uma postagem sobre esse mesmo tema, todas as postagens com essa mesma categoria relacionada estarão organizadas dentro dessa palavra.

## Hospedando o código no GitHub e fazendo o deploy com o GitHub Pages

1. Primeiro crie uma conta no [GitHub](https://github.com/), caso ainda não tenha.

2. Crie um novo repositório público clicando no ícone de **+** e em **"New repository"**.

3. O nome do repositório precisa ser: `username.github.io`, onde **username** é o seu nome de usuário no GitHub. Por exemplo:

    ![Exemplo de como criar o repositório](https://pages.github.com/images/user-repo@2x.png)

    É importante que o nome do repositório seja como no exemplo, para fazer o deploy do site.

4. Dentro do seu projeto adicione os arquivos e faça os commits necessários das suas modificações com o Git. Pode fazer executando os comandos:

        $ git add .
        $ git commit -m "Subindo o site para o GitHub"

5. Adicione o repositório remoto e envie todo o conteúdo:

        $ git remote add origin https://github.com/username/username.github.io.git
        $ git branch -M main
        $ git push -u origin main

6. Com o site hospedado no GitHub, confira se o deploy funcionou acessando:

    [https://username.github.io](https://username.github.io)

Saiba mais sobre o [GitHub Pages](https://pages.github.com/).