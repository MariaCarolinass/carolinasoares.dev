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

## Instalação do Hugo

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

### Mais maneiras de instalação

[Consulte o guia de instalação do Hugo no site oficial](https://gohugo.io/installation/).

## Criando o site

Crie um site com Hugo em minutos.

### Pré-requisitos

- [Instalação do Hugo](#instalação-do-hugo)
- [Instalação do Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Tema do site

O Hugo possuí diversos temas bonitos e prontos para serem usados que foram criados previamente por outros desenvolvedores.

[Confira todos os temas disponíveis para o Hugo](https://themes.gohugo.io/)

Vamos usar um tema como exemplo.

Criando projeto...

### Estrutura do site 

Arquivos, diretórios e configurações.

    my-site/
    ├── archetypes/
    │   └── default.md
    ├── assets/
    ├── content/
    ├── data/
    ├── i18n/
    ├── layouts/
    ├── static/
    ├── themes/
    └── hugo.toml         <-- site configuration

### Visitando site

Servidor Hugo

    $ hugo server

## Publicando postagens no site

Formato Markdown para escrever os posts.

[Sintaxe completa para Markdown](https://www.markdownguide.org/basic-syntax/)

### Títulos

    # H1
    ## H2
    ### H3
    #### H4
    ##### H5 

### Paragráfos

    Um paragráfo separado do outro por uma linha.

    Segundo paragráfo.

### Formatação de texto

    **Negrito**
    
    *Itálico* 

    ***Negrito e Itálico***

### Citações

    > Texto de uma citação!
    > 
    > Mais texto.

### Listas

Ordenada:

    1. Item 1
    2. Item 2
    3. Item 3

Não ordenada:

    - Primeiro
    - Segundo
    - Terceiro

### Código

Palavra ou frase com código:

    `Linha de código`

Várias palavras com código:

    ```
    Várias 
    linhas 
    de 
    código
    ```

Bloco de código:

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

### Tabela

    Exemplo   | Valor do exemplo
    --------- | ------
    Exemplo 1 | R$ 10
    Exemplo 2 | R$ 8
    Exemplo 3 | R$ 7
    Exemplo 4 | R$ 8

### Imagens

    ![Alt ou título da imagem](/caminho/para/imagem)

### Links

    [Título do Link](link)

## Subindo o código para o GitHub

Crie uma conta no [GitHub](https://github.com/).

## Deploy do site com o GitHub Pages

[GitHub Pages](https://pages.github.com/).