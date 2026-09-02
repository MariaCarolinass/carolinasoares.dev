<div style="text-align: center;">
    <img src="static/favicon.ico" alt="favicon" 
    style="width: 5%; max-width: 32px; border-radius: 10px;">
</div>

# carolinasoares.dev

Blog e portfólio pessoal, construído com [Hugo](https://gohugo.io/) e o tema [Gokarna](https://github.com/gokarna-theme/gokarna-hugo).

O site reúne postagens, tutoriais, projetos e palestras, com conteúdo em português e suporte a componentes como KaTeX e Mermaid.

## Requisitos

- [Hugo](https://gohugo.io/) instalado localmente
- `git`

## Estrutura

- `config.toml`: configuração principal do site
- `content/`: páginas, posts, tutoriais, projetos e palestras
- `layouts/`: layouts personalizados
- `static/`: imagens, ícones e outros arquivos estáticos
- `themes/gokarna`: tema usado pelo site

## Instalação

Clone o repositório e inicialize o submódulo do tema:

```bash
git submodule update --init --recursive
```

Se o tema ainda não estiver presente, você também pode adicioná-lo com:

```bash
git submodule add https://github.com/gokarna-theme/gokarna-hugo.git themes/gokarna
```

## Desenvolvimento local

Inicie o servidor de desenvolvimento:

```bash
hugo server
```

O site ficará disponível em `http://localhost:1313/`.

## Build de produção

Gere a versão final do site com:

```bash
hugo
```

Os arquivos compilados serão enviados para a pasta `public/`.

## Conteúdo

O conteúdo principal fica em `content/` e segue a organização do site:

- `posts/`
- `tutorials/`
- `projects/`
- `talks/`
