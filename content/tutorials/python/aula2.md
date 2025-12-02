---
title: "Aula 2 - Operadores e Expressões"
type: page
showTableOfContents: true
---

## Operadores Aritméticos

Os operadores aritméticos são usados para realizar cálculos matemáticos em Python.

| Operador | Nome             | Exemplo  | Saída |
| -------- | ---------------- | -------- | ----- |
| `+`      | Adição           | `5 + 2`  | `7`   |
| `-`      | Subtração        | `5 - 2`  | `3`   |
| `*`      | Multiplicação    | `5 * 2`  | `10`  |
| `/`      | Divisão real     | `5 / 2`  | `2.5` |
| `//`     | Divisão inteira  | `5 // 2` | `2`   |
| `%`      | Resto da divisão | `5 % 2`  | `1`   |
| `**`     | Exponenciação    | `5 ** 2` | `25`  |

**Exemplo:**

```python
soma = 5 + 2
subt = 5 - 2
multi = 5 * 2
divi = 5 / 2

print(f"Soma: {soma}\nSubtração: {subt}\nMultiplicação: {multi}\nDivisão: {divi}")
```

**Saída:**

```
Soma: 7
Subtração: 3
Multiplicação: 10
Divisão: 2.5
```

## Operadores Relacionais

Usados para comparar valores e retornar `True` ou `False`.

| Operador | Descrição      | Exemplo  | Saída |
| -------- | -------------- | -------- | ----- |
| `==`     | Igual          | `5 == 2` | False |
| `!=`     | Diferente      | `5 != 2` | True  |
| `>`      | Maior que      | `5 > 2`  | True  |
| `<`      | Menor que      | `5 < 2`  | False |
| `>=`     | Maior ou igual | `5 >= 2` | True  |
| `<=`     | Menor ou igual | `5 <= 2` | False |

**Exemplo:**

```python
a, b = 5, 3
print(a > b)
print(a == b)
print(a != b)
print(a < b)
```

**Saída:**

```
True
False
True
False
```

## Operadores Lógicos

Servem para combinar condições.

### Operador `and` (E)

Só é `True` se **ambas** as expressões forem verdadeiras.

| Expressão         | Saída |
| ----------------- | ----- |
| `True and True`   | True  |
| `True and False`  | False |
| `False and True`  | False |
| `False and False` | False |

### Operador `or` (OU)

É `True` se **pelo menos uma** expressão for verdadeira.

| Expressão        | Saída |
| ---------------- | ----- |
| `True or True`   | True  |
| `True or False`  | True  |
| `False or True`  | True  |
| `False or False` | False |

### Operador `not` (NÃO)

Inverte o valor lógico.

| Expressão   | Saída |
| ----------- | ----- |
| `not True`  | False |
| `not False` | True  |

**Exemplo:**

```python
a, b, c = 10, 4, 2
print(a > b and b < c)
print(a > b or b < c)
print(not a > b or b < c)
```

**Saída:**

```
False
True
False
```

## Operadores de Atribuição

Usados para atribuir valores às variáveis.

| Operador | Exemplo      | Equivalente a   |
| -------- | ------------ | --------------- |
| `=`      | `x = valor`  | `x = valor`     |
| `+=`     | `x += valor` | `x = x + valor` |
| `-=`     | `x -= valor` | `x = x - valor` |
| `/=`     | `x /= valor` | `x = x / valor` |
| `//=`    | `x //= val`  | `x = x // val`  |
| `%=`     | `x %= valor` | `x = x % valor` |
| `*=`     | `x *= valor` | `x = x * valor` |

**Exemplo:**

```python
a = 10
a %= 2
print(a)
```

**Saída:**

```
0
```

## Precedência de Operadores

A ordem de execução das operações segue a tabela abaixo, do **mais importante** para o **menos importante**:

| Prioridade | Operadores                    |
| ---------- | ----------------------------- |
| 1          | `()`                          |
| 2          | `**`                          |
| 3          | `*`, `/`, `%`, `//`           |
| 4          | `+`, `-`                      |
| 5          | `<`, `<=`, `>`, `>=`          |
| 6          | `==`, `!=`                    |
| 7          | Atribuições (`=`, `+=`, etc.) |
| 8          | `not`, `and`, `or`            |

**Exemplo:**

```python
print(2 ** 5 + 10 - (2 + 3))
```

**Saída:**

```
37
```

## Exercícios

1. Peça altura e peso do usuário e calcule o IMC: **IMC = peso / (altura²)**. Mostre o resultado.

2. Receba dois números inteiros e exiba: 

- Soma
- Subtração
- Multiplicação
- Divisão
- Divisão inteira
- Resto

3. Receba três notas e calcule a média. Mostre o resultado.

- Crie uma variável booleana representando aprovação
- Se a média ≥ 6: Aprovado (True)
- Se a média < 6: Reprovado (False)

4. Receba `a`, `b`, `c` e calcule:

- **delta = b² − 4ac**
- **x1 = (-b + √delta) / (2a)**
- **x2 = (-b − √delta) / (2a)**

    Imprima delta, x1 e x2.

    > Dica: raiz quadrada = `delta ** 0.5`

5. Peça um número ao usuário, use um operador de atribuição para dobrá-lo e exiba o resultado.

## Aulas

- [Aula 1 - Introdução à Linguagem de Programação Python](/tutorials/python/aula1)
- [Aula 2 - Operadores e Expressões](/tutorials/python/aula2)
- [Aula 3 - Estruturas Condicionais](/tutorials/python/aula3)
- [Aula 4 - Laços de Repetição](/tutorials/python/aula4)
- [Aula 5 - Estruturas de Dados](/tutorials/python/aula5)
- [Aula 6 - Funções](/tutorials/python/aula6)
- [Aula 7 - Strings](/tutorials/python/aula7)