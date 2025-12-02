---
title: "Aula 6 - Funções"
type: page
showTableOfContents: true
---

## Funções em Python

Funções são blocos de código reutilizáveis que deixam o programa mais organizado, limpo e fácil de manter.

## O que é uma função

Uma função é um bloco de código que executa uma tarefa específica e **só é executada quando é chamada**.

```python
def funcao():
	# Bloco de código
```

## Criando sua primeira função

```python
def imprimirMsg():
    print("Criando uma função com Python!")
```

## Chamando uma função

```python
def imprimirMsg():
    print("Uma função Python!")

imprimirMsg()
```

Saída:

```bash
Uma função Python!
```

## Palavra reservada `pass`

O `pass` é usado quando você quer declarar uma função, mas ainda não quer escrever seu conteúdo.

```python
def funcao():
    pass

funcao()  # Nada acontece
```

## Funções com Parâmetros

As funções podem receber valores chamados **parâmetros**.

Exemplo 1:

```python
def somar(a, b):
    print(a + b)

somar(2, 3)
```

Saída:

```bash
5
```

Exemplo 2:

```python
pessoas = ["Maria", "Pedro", "Eduarda", "José"]

def adicionar(lista, valor):
    lista.append(valor)

def remover(lista, valor):
    lista.remove(valor)

def tamanho(lista):
    print(len(lista))

adicionar(pessoas, "Letícia")
remover(pessoas, "Pedro")
tamanho(pessoas)
```
 
## Parâmetros Padrão (default)

```python
def somar(num1=0, num2=0):
    print(num1 + num2)

somar() # usa os valores padrão
```

Saída:

```bash
0
```

## `*args` e `**kwargs`

### `*args` - múltiplos argumentos posicionais

```python
def mostrarNumeros(*args):
    print(args)
    print(type(args))

mostrarNumeros(10, 20, 30)
```

Saída:

```bash
(10, 20, 30)
<class 'tuple'>
```

### `**kwargs` - múltiplos argumentos nomeados

```python
def guardarPessoas(**kwargs):
    print(kwargs)
    print(type(kwargs))

guardarPessoas(nome='João', idade=35)
```

Saída:

```bash
{'nome': 'João', 'idade': 35}
<class 'dict'>
```

## Retornando valores

Funções podem **retornar** valores.

```python
def somar(a, b):
    return a + b

resultado = somar(5, 2)
print(resultado)
```

Saída:

```bash
7
```

### Retornando vários valores

```python
def somarECalcularMedia(a, b):
    soma = a + b
    media = soma / 2
    return soma, media

print(somarECalcularMedia(10, 2))
```

Saída:

```bash
(12, 6.0)
```

## Escrevendo Boas Funções

### Função ruim (pouco reaproveitável)

```python
def somar():
    print(5 + 2)
```

### Função melhor (genérica e reutilizável)

```python
def somar(a, b):
    return a + b
```

### Refatorando código

```python
def somar(a, b):
    return a + b

def media(valor):
    return valor / 2

s = somar(10, 2)
m = media(s)
print(s, m)
```

## Funções Lambda

Funções **lambda** são funções anônimas, úteis para tarefas simples.

```python
f = lambda {argumentos}: {expressão}
```

Exemplo 1:

```python
f = lambda x: x * 2
print(f(3))
```

Saída:

```bash
6
```

Exemplo 2:

```python
soma = lambda x, y: x + y
print(soma(2, 3))
```

Saída:

```bash
5
```

## Comparação: Função normal vs lambda

Função tradicional:

```python
def dobrar(n):
    return n * 2
```

Função lambda:

```python
dobrarLambda = lambda n: n * 2
```

## Funções Embutidas do Python

### Gerais

- `print()`
- `len()`
- `type()`
- `range()`
- `input()`

### Conversão de tipos

- `int()`
- `float()`
- `str()`
- `list()`
- `tuple()`
- `dict()`

### Iteração e matemática

- `map()`
- `max()`
- `min()`
- `sum()`
- `abs()`
- `pow()`

Mais em: [Funções embutidas](https://docs.python.org/pt-br/3/library/functions.html)

## Módulos

Um módulo é um arquivo Python com funções, classes e variáveis que podem ser importadas.

```python
import math from sqrt
```

- `import`: Importar módulo
- `math`: Módulo math a ser importado
- `from`: Definir função específica do módulo
- `sqrt`: Função dentro do módulo a ser importado

### Formas de importação

```python
import math
from math import sqrt
import math as m
```

### Imports

- `import os` - Funções de sistemas operacional
- `import math` - Funções matemáticas básicas
- `import random` - Gerar números aleatórios
- `import datetime` - Datas e horas
- `import time` - Medições de tempo e espera
- `import csv` - Arquivos CSV
- `import re` - Expressões regulares (Regex)
- `import json` - Dados em formato JSON
- `import requests` - Requisições HTTP

### Módulo Math

```python
import math
raiz = math.sqrt(25) # Saída: 5.0
sen = math.sin(45) # Saída: 0.8509035245341184
cos = math.cos(35) # Saída: -0.9036922050915067
pi = math.pi # 3.141592653589793
```

#### Importando um função do módulo Math

```python
from math import sqrt
raiz = sqrt(25) # Saída: 5.0
```

#### Apelido do módulo

```python
import math as m
raiz = m.sqrt(25) # Saída: 5.0
```

### Módulo Random

```python
import random
# Gerar um número aleatório entre 1 e 100
random_number = random.randint(1, 100)
# Gerar um número aleatório entre 0 e 1
random_float = random.random()
# Gerar uma sequência de 5 números aleatórios entre 1 e 100
random_sequence = random.sample(range(1, 101), 5)
```

#### Random em listas:

```python
import random
frutas = ['maçã', 'banana', 'cereja', 'laranja']
# Escolher um item aleatório da lista
print(random.choice(frutas)) # Saída: banana
# Embaralhar a lista
random.shuffle(frutas)
print(frutas) # Saída: ['maçã', 'banana', 'cereja', 'laranja']
```

## Bibliotecas

Bibliotecas são coleções de módulos.

### Exemplos embutidos

- math
- random
- json

### Exemplos externos (requerem instalação):

- NumPy
- Pandas
- Matplotlib
- Unittest
- Tkinter
- Django

## Exercícios

1. Crie uma função que receba três inteiros e retorne o dobro da soma deles.

2. Faça uma função que retorne se um número é par ou ímpar.

3. Crie uma lista de produtos e faça funções para **adicionar, remover, editar e exibir**.

4. Crie 4 funções lambda para soma, subtração, multiplicação e divisão.

5. Faça uma função que sorteie um número de 1 a 6 dez vezes, conte as ocorrências e mostre o resultado.

6. Crie 3 funções para seno, cosseno e tangente em graus, arredondando para 2 casas decimais. Mostre max e min.

7. Crie uma função que receba um valor máximo e gere a sequência de Fibonacci até esse limite.

## Aulas

- [Aula 1 - Introdução à Linguagem de Programação Python](/tutorials/python/aula1)
- [Aula 2 - Operadores e Expressões](/tutorials/python/aula2)
- [Aula 3 - Estruturas Condicionais](/tutorials/python/aula3)
- [Aula 4 - Laços de Repetição](/tutorials/python/aula4)
- [Aula 5 - Estruturas de Dados](/tutorials/python/aula5)
- [Aula 6 - Funções](/tutorials/python/aula6)
- [Aula 7 - Strings](/tutorials/python/aula7)
