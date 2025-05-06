---
date: 2024-08-26T00:04:19-03:00
# description: ""
# image: ""
lastmod: 2024-08-26
showTableOfContents: true
tags: ["Python", "Expressões Regulares", "RegEx"]
title: "Expressões Regulares no Python (RegEx)"
description: "Um padrão criado para buscar e manipular um texto."
type: "post"
---

## Como usar o RegEx

### Pré-requisito

Importando a módulo re:

    import re

### Escrevendo uma expressão regular

Definimos um padrão regex com a letra `r`, assim deixamos explícito que estamos tratando de uma expressão regular, em seguida entre as aspas escrevemos a expressão que será encontrada em um texto:

    padrao = r"expressao"

Não é necessário a utilização do `r`, mas é recomendado para evitar possíveis divergências do regex com o Python.

O regex é escrito como uma **combinação de caracteres** com alguns símbolos reservados chamados de **metacaracteres**: 

    . ? * + ^ $ | — [ ] { } ( ) \

Esses símbolos possuem significados diferentes e mostram como a expressão será interpretada.

![image](https://github.com/user-attachments/assets/c6a548b2-7cca-438e-8e58-157d663f028a)

### Funções do RegEx

- `re.match(padrao, texto)`

  Procura pelo padrão no início do texto e retorna a posição do texto na busca.
  
- `re.search(padrao, texto)`
  
  Procura pelo padrão em todo o texto e retorna a posição do texto na busca.
  
- `re.findall(padrao, texto)`

  Procura as ocorrências do texto por todo o padrão e retorna uma lista da busca. 
  
- `re.sub(padrao, substituir, texto)`

  Procura as ocorrências do texto por todo o padrão, substitui por outro texto e retorna a busca com as substituições. 

### Utilizando o RegEx

- [Exercícios](https://github.com/MariaCarolinass/expressoes-regulares/tree/main/exercicios)

## Links

- [Regex: o guia essencial das expressões regulares](https://blog.dp6.com.br/regex-o-guia-essencial-das-express%C3%B5es-regulares-2fc1df38a481)
- [RegEx básico em Python](https://medium.com/pyladiesbh/regex-b%C3%A1sico-em-python-31dcb7fac046)