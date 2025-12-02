---
title: "Aula 3 - Estruturas Condicionais"
type: page
showTableOfContents: true
---

## Estrutura Condicional `if`

O comando `if` é usado para executar um bloco de código somente quando uma condição é verdadeira.

```python
if <condicao>:
    # código a ser executado se a condição for verdadeira
```

**Exemplo 1:**

```python
if 5 > 3:
	print("5 é maior que 3")

if 3 == 5:
	print("5 é igual 3")

print("Fim do programa")
```

**Saída:**

```bash
5 é maior que 3
Fim do programa
```

**Exemplo 2:**

```python
num = int(input("Digite um número: "))

if num != 0:
	print("Número é diferente de zero")

if num == 0:
	print("Número é igual a 0")

if num >= 1 and num <= 10:
	print("Número está entre 1 e 10")
```

Entrada:

```bash
5
```

Saída:

```bash
Número é diferente de zero
Número está entre 1 e 10
```

## Estrutura Condicional `else`

O `else` é executado quando o if correspondente for falso.

```python
if <condicao>:
    # se a condição for verdadeira
else:
    # caso contrário
```

**Exemplo 1:**

```python
num = int(input("Digite um número: "))

if num == 0:
	print("Número é igual a 0")
else:
    print("Número é diferente de zero")
```

Entrada:

```bash
1
```

Saída:

```bash
Número é diferente de zero
```

**Exemplo 2:**

```python
linguagem = "Python"

if linguagem == "Python":
	print("A linguagem é Python.")
else:
	print("Linguagem não identificada!")
```

**Saída:**

```bash
A linguagem é Python.
```

## Estrutura Condicional `elif`

O `elif` permite testar várias condições em sequência.
Ele só é executado caso todos os `if` e `elif` anteriores sejam falsos.

```python
if <condicao1>:
    # executa se condicao1 for verdadeira
elif <condicao2>:
    # executa se condicao1 for falsa e condicao2 verdadeira
elif <condicao3>:
    # executa se todas as anteriores forem falsas
else:
    # executa se nenhuma condição anterior for atendida
```

**Exemplo:**

```python
linguagem = "PHP"

if linguagem == "Python":
	print("A linguagem é Python.")
elif linguagem == "C#":
    print("A linguagem é C#.")
elif linguagem == "Java":
    print("A linguagem é Java.")
else:
	print("Linguagem não identificada!")
```

**Saída:**

```bash
Linguagem não identificada!
```

## Exercícios

1. Média e Situação do Aluno

    Receba três notas (0 a 10), calcule a média e exiba:

    - **média < 4**: “Reprovado por média”
    - **4 ≤ média < 6**: “Em recuperação”
    - **média ≥ 6**: “Aprovado por média”

2. Par ou Ímpar

    Peça um número e verifique:

    - Se for divisível por 2: “É par”
    - Caso contrário: “É ímpar”

3. Habilitação

    Solicite:

    - idade
    - possui CNH? (Sim/Não)

    Regras:

    - se idade ≥ 18 **e** resposta = “Sim” → “Hábil para dirigir”
    - se resposta = “Não”, **independente da idade**, exibir “NÃO hábil para dirigir”

4. Calculadora Simples

    Peça dois números e a operação desejada:

    - soma
    - subtração
    - multiplicação
    - divisão

    Execute a operação correspondente e exiba o resultado.

5. Conversor de Temperatura

    Pergunte o tipo de conversão:

    - Celsius → Fahrenheit
    - Fahrenheit → Celsius

    Fórmulas:

    - **C → F:** `9 / 5 * C + 32`
    - **F → C:** `5 / 9 * (F - 32)`

    Exiba o resultado convertido.

## Aulas

- [Aula 1 - Introdução à Linguagem de Programação Python](/tutorials/python/aula1)
- [Aula 2 - Operadores e Expressões](/tutorials/python/aula2)
- [Aula 3 - Estruturas Condicionais](/tutorials/python/aula3)
- [Aula 4 - Laços de Repetição](/tutorials/python/aula4)
- [Aula 5 - Estruturas de Dados](/tutorials/python/aula5)
- [Aula 6 - Funções](/tutorials/python/aula6)
- [Aula 7 - Strings](/tutorials/python/aula7)
