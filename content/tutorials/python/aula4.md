---
title: "Aula 4 - Laços de Repetição"
type: page
showTableOfContents: true
---

## Estrutura de repetição `for`

O `for` executa cada item disponibilizado por uma **sequência de dados** (lista, tupla, conjunto, string, etc.), percorrendo os elementos até o fim dessa sequência.

```python
for elemento in sequencia:
    print(elemento)
```

### Exibindo cada letra da palavra "Python"

#### Forma comum (não recomendada)

```python
print("P")
print("y")
print("t")
print("h")
print("o")
print("n")
```

Saída:

```bash
P
y
t
h
o
n
```

#### Forma simplificada com for

```python
for letra in "Python":
    print(letra)
```

Saída:

```bash
P
y
t
h
o
n
```

## Percorrendo uma sequência númerica com `range`

A função `range()` permite gerar uma sequência de números:

```python
for elemento in range(iniciar, parar, passo):
	print(elemento)
```

- início (opcional) – valor inicial (padrão: 0)
- parada (obrigatório) – até onde vai (não incluído)
- passo (opcional) – incremento da contagem (padrão: 1)

### Exibindo números de 1 a 10

#### Exemplo 1: contagem padrão (0 a 9)

```python
for numero in range(10):
	print(numero)
```

Saída:

```bash
0
1
2
3
4
5
6
7
8
9
```

#### Exemplo 2: incluindo o número 10

```python
for numero in range(11):
	print(numero)
```

Saída:

```bash
0
1
2
3
4
5
6
7
8
9
10
```

#### Exemplo 3: iniciando em 1

```python
for numero in range(1, 11):
	print(numero)
```

```bash
0
1
2
3
4
5
6
7
8
9
10
```

#### Exemplo 4: contagem regressiva

```python
for numero in range(10, 0, -1):
	print(numero)
```

```bash
10
9
8
7
6
5
4
3
2
1
```

#### Exemplo 5: pulando de 2 em 2

```python
for numero in range(1, 11, 2):
	print(numero)
```

```bash
1
3
5
7
9
```

## Estrutura de repetição `while`

O `while` executa um bloco de código enquanto a condição for verdadeira.

```python
while <condicao>:
	# Bloco a ser executado
```

**Exemplo:**

```python
contador = 0
while contador < 10:
	print(contador)
	contador += 1
```

Saída:

```bash
0
1
2
3
4
5
6
7
8
9
```

## Usando `else` com estruturas de repetição

O bloco `else` é executado quando o loop termina normalmente, sem interrupções por `break`.

**Exemplo com for**

```python
for numero in range(10):
    print(numero)
else:
    print("Fim do loop")
```

**Exemplo com while**

```python
contador = 0
while contador < 10:
	print(contador)
	contador += 1
else:
	print("Fim do loop")
```

**Saída de ambas funções:**

```bash
0
1
2
3
4
5
6
7
8
9
Fim do loop
```

## Comandos auxiliadores

### `break`

Interrompe o loop imediatamente.

```python
for numero in range(10):
	if numero == 5:
		break
	else:
print(numero)
```

Saída:

```bash
0
1
2
3
4
5
```

### `continue`

Pula a iteração atual e continua o loop.

```python
contador = 0
while contador < 10:
    contador += 1
    if contador == 5:
        continue
    print(contador)
```

Saída:

```bash
1
2
3
4
6
7
8
9
10
```

### `pass`

Indica um bloco vazio (placeholder).

```python
for numero in range(5000):
    pass

while False:
	pass
```

## Exercícios

1. Faça um programa que mostre a contagem de 0 até 100, pulando a cada 10. O último número deve ser 100.

2. Faça um programa que mostre a contagem regressiva de 10 a 1.

3. Escreva um programa que pergunte números ao usuário enquanto forem positivos. No final, exiba a soma de todos eles.

4. Solicite um número de 1 a 10 e exiba sua tabuada completa usando loops.

5. Pergunte 10 números ao usuário e diga se cada um é par ou ímpar.

6. Solicite um número ao usuário e verifique se ele é primo.

## Aulas

- [Aula 1 - Introdução à Linguagem de Programação Python](/tutorials/python/aula1)
- [Aula 2 - Operadores e Expressões](/tutorials/python/aula2)
- [Aula 3 - Estruturas Condicionais](/tutorials/python/aula3)
- [Aula 4 - Laços de Repetição](/tutorials/python/aula4)
- [Aula 5 - Estruturas de Dados](/tutorials/python/aula5)
- [Aula 6 - Funções](/tutorials/python/aula6)
- [Aula 7 - Strings](/tutorials/python/aula7)
