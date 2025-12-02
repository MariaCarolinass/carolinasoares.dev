---
title: "Aula 1 - Introdução à Linguagem de Programação Python"
type: page
showTableOfContents: true
---

## O que é Python?

Python é uma linguagem de programação:

* **Altamente popular** e utilizada em empresas como Google, Netflix e NASA.
* De **alto nível**: próxima da linguagem humana.
* **Orientada a objetos** e também **imperativa** e **funcional**.
* **Interpretada**: não precisa compilar para rodar.
* De **tipagem dinâmica e forte**.
* Criada em **1991**, por **Guido van Rossum**.
* Mantida pela comunidade e pela **Python Software Foundation (PSF)**.

Python é conhecida por sua **simplicidade**, **facilidade de uso** e pela grande **quantidade de bibliotecas** disponíveis.

## A Comunidade Python

![Foto Oficial Python Brasil](/images/python/foto_oficial.jpg)

O ecossistema Python é fortemente apoiado por comunidades locais e globais, como:

* Python Brasil
* PyLadies
* Grupy (diversos estados)
* AfroPython
* Django Girls

A **Python Software Foundation (PSF)** coordena o desenvolvimento global da linguagem.
No Brasil, a **Associação Python Brasil (APyB)** — criada em 2007 — apoia eventos, projetos e comunidades em todo o país.

## Onde Python é usada?

Python é extremamente versátil! Alguns dos principais usos:

* **Desenvolvimento Web** (Django, Flask, FastAPI)
* **Análise de dados** (NumPy, Pandas)
* **Machine Learning e IA** (TensorFlow, PyTorch, Scikit-learn)
* **Automação de rotinas**
* **Criação de APIs e microserviços**
* **Aplicações desktop**
* **Scripts para DevOps**

É uma linguagem utilizada por pessoas de diferentes áreas: programadores, cientistas, jornalistas, pesquisadores, arquitetos, biólogos e muitos outros.

## Mais informações sobre Python

Documentação e comunidade brasileira:
    
- [Wiki Python](https://wiki.python.org.br)

## Versões do Python

![Versões do Python](/images/python/Versoes-do-Python-2.png)

> Recomendação: use sempre a versão **mais recente do Python 3**.

Leitura recomendada:

- [Python 3 – Entenda as Versões do Python](https://www.hashtagtreinamentos.com/versoes-do-python)

## Como começar com Python?

1. Tenha acesso a um computador, notebook ou smartphone com internet.
2. Baixe um editor de código ou IDE (ex.: VS Code, PyCharm, Thonny).
3. Instale o Python: [https://www.python.org/downloads/](https://www.python.org/downloads/)

## Executando um programa Python

Arquivo: `nome_arquivo.py`

```bash
python nome_arquivo.py
```

### Onde programar?

**Somente edição:**

* Notepad++
* Sublime Text
* Atom

**Edição e execução:**

* VS Code
* PyCharm
* Thonny
* Google Colab (online)

## Seu primeiro programa

```python
print("Hello, World!")
```

## Variáveis em Python

```python
num1 = 10
num2 = 5.2
msg = "Olá, eu estou estudando Python"
b = True
nome = input("Digite o seu nome: ")
```

## Tipos primitivos

| Tipo    | Descrição        | Exemplos                 |
| ------- | ---------------- | ------------------------ |
| `int`   | Números inteiros | `42`, `105`, `-12`       |
| `float` | Números decimais | `3.14`, `2.1`, `0.72632` |
| `bool`  | Lógico/booleano  | `True`, `False`          |
| `str`   | Texto (string)   | `"Olá, mundo"`           |

## Convertendo tipos

```python
num = float("25.30")
print(type(num))
```

Saída:

```
<class 'float'>
```

## Entrada de dados (input)

```python
nome = input("Digite o seu nome: ")
print(nome)

num = input("Digite um número inteiro: ")
print(num)
```

**Importante:** tudo que vem do `input()` é **string** por padrão.

## Tipando entradas

```python
idade = int(input("Digite sua idade: "))
altura = float(input("Digite sua altura: "))
nome = input("Digite seu nome: ")
```

> Evite converter diretamente para `bool`; a conversão não funciona como muitos imaginam.

## Formatando mensagens

### Usando `format()`

```python
print("Olá, {}.".format("Maria"))
print("Meu nome é {nome}.".format(nome="Maria"))
print("Meu nome é {} e tenho {} anos.".format("Maria", 18))
```

### Usando f-strings (recomendado)

```python
nome = "João"
print(f"Nome: {nome}")
```

### Formatando casas decimais

```python
pi = 3.14159265359
print(f"Pi é igual a {pi:.2f}")
```

Ou:

```python
pi = round(3.14159265359, 2)
print(f"Pi é igual a {pi}")
```

## Exercícios

1. Imprima o seu nome completo.
2. Crie 3 variáveis (nome, idade e altura) e imprima cada uma.
3. Peça ao usuário uma frase e imprima a frase.
4. Peça nome e idade ao usuário e imprima usando **f-strings**.
5. Peça a cor favorita do usuário e exiba usando `.format()`.

## Aulas

- [Aula 1 - Introdução à Linguagem de Programação Python](/tutorials/python/aula1)
- [Aula 2 - Operadores e Expressões](/tutorials/python/aula2)
- [Aula 3 - Estruturas Condicionais](/tutorials/python/aula3)
- [Aula 4 - Laços de Repetição](/tutorials/python/aula4)
- [Aula 5 - Estruturas de Dados](/tutorials/python/aula5)
- [Aula 6 - Funções](/tutorials/python/aula6)
- [Aula 7 - Strings](/tutorials/python/aula7)