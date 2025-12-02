---
title: "Aula 7 - Strings"
type: page
showTableOfContents: true
---

## Strings em Python

Strings são sequências de caracteres e representam **textos** em Python. Elas permitem armazenar, manipular e analisar dados textuais de forma simples e poderosa.

## O que é uma String?

```python
texto = 'Olá mundo'
print(texto)
print(type(texto))
```

Saída:

```python
Olá mundo
<class 'str'>
```

## Strings de documentação (multilinhas)

```python
texto = """
Esta é uma string em Python com múltiplas linhas.
Podemos escrever quantas linhas quisermos!
"""
```

## Índices da String

Cada caractere possui um índice:

```python
nome = "Maria"
print(nome[0])
print(nome[1])
print(nome[2])
print(nome[3])
print(nome[4])
```

Saída:

```bash
M
a
r
i
a
```

Índices negativos percorrem de trás para frente:

```python
nome = "Maria"
print(nome[-1])
print(nome[-2])
print(nome[-3])
print(nome[-4])
print(nome[-5])
```

Saída:

```bash
a
i
r
a
M
```

## Intervalo (Slicing)

Formato:

```
string[início:fim:passo]
```

Exemplo:

```python
nome = "João Silva"
print(nome[0:4])   # João
print(nome[5:10])  # Silva
print(nome[::-1])  # string invertida
```

## Multiplicando Strings

```python
linha = '-'
print(linha * 20)
print("Bloco de código")
print(linha * 20)
```

Saída:

```bash
--------------------
Bloco de código
--------------------
```

## Tamanho da String

```python
texto = "abc"
print(len(texto))
```

Saída:

```python
3
```

## Strings em Estruturas de Repetição

### `for`

```python
txt = "Python"
for letra in txt:
    print(letra)
```

### `while`

```python
txt = "Python"
indice = 0
while indice < len(txt):
    print(txt[indice])
    indice += 1
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

## Verificando se uma String está em outra

Exemplo 1:

```python
texto = "Tenha um ótimo dia"

if 'dia' in texto:
	print("A sequência de caractere existe na string!")
```

Saída: 

```bash
A sequência de caractere existe na string!
```

Exemplo 2:

```python
texto = "Tenha um ótimo dia"

if 'ótimo' not in texto:
	print("A palavra 'ótimo' não existe no texto")
else:
	print("Sim, 'ótimo' existe no texto!")
```

Saída: 

```bash
Sim, 'ótimo' existe no texto!
```

## Métodos Importantes de Strings

```python
palavra = "Céu Limpo"

palavra.upper()              # CÉU LIMPO
palavra.lower()              # céu limpo
palavra.title()              # Céu Limpo
palavra.strip()              # remove espaços das extremidades
palavra.replace("Limpo", "Nublado")
palavra.split(" ")          # ['Céu', 'Limpo']
palavra.startswith("Céu")   # True
palavra.endswith(".")       # False
```

## Caracteres de Escape

```python
print("Programação em \"Python\"")
# Programação em "Python"

print("Linha 1\nLinha 2")
# quebra de linha

print("Coluna 1\tColuna 2")
# tabulação

print("Programação e\bm Python")
# backspace
```

Mais sobre escapes: [Literais de string e bytes](https://docs.python.org/pt-br/3/reference/lexical_analysis.html#strings)

## Exercícios

1. Usando repetição, imprima cada letra de "Python" de trás para frente.

2. Dada a lista de palavras: "ana", "pelo", "ovo", "reviver", "a grama é amarga", "a mala nada na lama", "telhado", "abacate", "radar", "osso", "viver para viver", "reler", "ame o poema", "sol", "rever", "sala".
   - Exiba quais são palíndromos.
   - Conte quantos palíndromos existem.

3. Com a string: `"banana uva maçã melão abacaxi"`
   - Converta tudo para maiúsculo.
   - Separe em lista usando `split()`.
   - Verifique se "uva" está na lista e troque por "morango".
   - Imprima a lista final.

4. Receba o **nome completo** de um usuário e:
   - Remova "de" se existir.
   - Exiba o tamanho total do nome.
   - Pegue o **primeiro** e **último** nome e forme uma nova string.

5. Receba uma data no formato `dd/mm/aaaa` e imprima o mês por extenso.

## Aulas

- [Aula 1 - Introdução à Linguagem de Programação Python](/tutorials/python/aula1)
- [Aula 2 - Operadores e Expressões](/tutorials/python/aula2)
- [Aula 3 - Estruturas Condicionais](/tutorials/python/aula3)
- [Aula 4 - Laços de Repetição](/tutorials/python/aula4)
- [Aula 5 - Estruturas de Dados](/tutorials/python/aula5)
- [Aula 6 - Funções](/tutorials/python/aula6)
- [Aula 7 - Strings](/tutorials/python/aula7)
