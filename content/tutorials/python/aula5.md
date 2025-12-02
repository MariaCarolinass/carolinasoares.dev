---
title: "Aula 5 - Estruturas de Dados"
type: page
showTableOfContents: true
---

# Características das Estruturas

| **Estrutura** | **Ordenado** | **Mutável** | **Construtor**    | **Exemplo**               |
| ------------- | ------------ | ----------- | ----------------- | ------------------------- |
| `list`        | Sim          | Sim         | `[]` ou `list()`  | `[1, 2.5, 'Pedro', True]` |
| `tuple`       | Sim          | Não         | `()` ou `tuple()` | `(1, 2.5, 'Pedro', True)` |
| `set`         | Não          | Sim         | `set()`           | `{1, 2.5, 'Pedro', True}` |
| `dict`        | Sim          | Sim         | `{}` ou `dict()`  | `{6: 'jun', 7: 'jul'}`    |

# Listas

As listas são coleções **ordenadas** e **mutáveis**, usadas para armazenar vários itens em uma única variável.

```python
lista = []
print(type(lista))
```

Saída:

```python
<class 'list'>
```

### Criando lista com `range`

```python
list(range(10))
```

Saída:

```bash
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Criando lista de strings

```python
lista = ['uva', 'maçã', 'pêra', 'morango']
print(lista)
```

Saída:

```bash
['uva', 'maçã', 'pêra', 'morango']
```

### Criando lista mista

```python
lista = ['abc', 0.5, True, 90]
print(lista)
```

Saída:

```bash
['abc', 0.5, True, 90]
```

### Verificando tamanho

```python
lista = ['abc', 0.5, True, 90]
print(len(lista))
```

Saída:

```bash
4
```

### Acessando itens

```python
lista = ['uva', 'maçã', 'pêra', 'morango']
print(lista[0])
print(lista[2])
print(lista[-1])
```

Saída:

```bash
uva
pêra
morango
```

### Lista dentro de lista

```python
usuarios = [
    ["Maria", 18],
    ["Roberto", 20],
    ["Laura", 25],
    ["Carlos", 19]
]
```

### Acessando subitens

```python
lista = [[2, 3, 5], [1, 2], [9, 6, 9]]
print(lista[1][0])
```

Saída:

```bash
1
```

### Fatiamento

```python
lista = [2, 4, 12, 20, 34, 1, 9]
lista[inicio:fim:passo]
```

Exemplos:

```python
print(lista[2:5])
print(lista[:5])
print(lista[5:])
print(lista[-3:6])
print(lista[:5:2])
```

Saída:

```python
[12, 20, 34]
[2, 4, 12, 20, 34]
[1, 9]
[34, 1]
[2, 12, 34]
```

### Percorrendo listas

```python
lista = ["uva", "maçã", "pêra", "morango"]
for item in lista:
    print(item)
```

Saída:

```bash
uva
maçã
pêra
morango
```

### Verificando existência

```python
lista = ["uva", "maçã", "pêra", "morango"]
"pêra" in lista (retorna True)
"pêra" not in lista (retorna False)
```

Verificando com estrutura condicional:

```python
if "pêra" in lista:
	print("Pêra existe na lista!")
else:
	print("Pêra NÃO existe na lista!")
```

Saída:

```bash
Saída: Pêra existe na lista!
```

### Métodos importantes das listas

- `lista.append(x)` – adiciona item
- `lista.clear()` – limpa a lista
- `lista.copy()` – copia a lista
- `lista.count(x)` – conta ocorrências
- `lista.extend(lista2)` – adiciona itens de outra lista
- `lista.index(x)` – retorna índice do item
- `lista.insert(i, x)` – insere item
- `lista.pop(i)` – remove item
- `lista.remove(x)` – remove primeira ocorrência
- `lista.reverse()` – inverte ordem
- `lista.sort()` – ordena

# Tuplas

Tuplas funcionam como listas, porém são **imutáveis**.

```python
tupla = ()
print(type(tupla))
```

Saída:

```python
<class 'tuple'>
```

### Criando tuplas

```python
pontoXY = (-2, 5)
pontoXYZ = (-1, 0.5, 3)
usuarioId = ("143535", "Maria")
produto = ("Camisa", "P", 56.00, True)
```

### Acessando itens

```python
tupla = (2, 5, 3)
print(tupla[1])
```

Saída:

```bash
5
```

### Métodos das tuplas

- `tupla.count(x)` – conta ocorrências
- `tupla.index(x)` – retorna índice do item

# Sets (Conjuntos)

Sets são coleções **não ordenadas**, **sem itens duplicados** e **não indexáveis**.

```python
conjunto = set()
print(type(conjunto))
```

Saída:

```python
<class 'set'>
```

### Operações com sets

```python
x = {'a', 'f', 'c', 'j'}
y = {'c', 'a', 'f', 'd'}

uniao = x | y
print(uniao)

diferenca = x - y
print(diferenca)

intersecao = x & y
print(intersecao)
```

Saída:

```python
{'c', 'd', 'f', 'a', 'j'}
{'j'}
{'a', 'c', 'f'}
```

### Métodos dos sets

- `conjunto.add(x)`
- `conjunto.clear()`
- `conjunto.copy()`
- `conjunto.difference(outro)`
- `conjunto.difference_update(outro)`
- `conjunto.discard(x)`
- `conjunto.intersection(outro)`
- `conjunto.intersection_update(outro)`
- `conjunto.isdisjoint(outro)`
- `conjunto.issubset(outro)`
- `conjunto.issuperset(outro)`
- `conjunto.pop()`
- `conjunto.remove(x)`
- `conjunto.symmetric_difference(outro)`
- `conjunto.union(outro)`
- `conjunto.update(outro)`

# Dicionários

Dicionários armazenam pares **chave: valor**.

```python
dicionario = {"chave": "valor"}
```

### Criando dicionário

```python
dicionario = {
    "nome": "maria",
    "idade": 22,
    "sexo": "feminino"
}
```

Saída:

```python
{'nome': 'maria', 'idade': 22, 'sexo': 'feminino'}
```

### Acessando valores

```python
print(dicionario["nome"])
```

Saída:
```python
'maria'
```

### Tamanho do dicionário

```python
len(dicionario)
```

Saída:

```bash
3
```

### Percorrendo dicionário

```python
livros = {
    1: ["Dom Casmurro", "Machado de Assis"],
    2: ["1984", "George Orwell"],
    3: ["O Pequeno Príncipe", "Antoine de Saint-Exupéry"]
}

for id in livros:
    print(f"Id: {id} | Livro: {livros[id]}")
```

Saída:

```python
Id: 1 | Livro: ['Dom Casmurro', 'Machado de Assis']
Id: 2 | Livro: ['1984', 'George Orwell']
Id: 3 | Livro: ['O Pequeno Príncipe', 'Antoine de Saint-Exupéry']
```

### Métodos importantes

- `dicionario.clear()`
- `dicionario.copy()`
- `dicionario.fromkeys(chaves)`
- `dicionario.get(chave)`
- `dicionario.items()`
- `dicionario.keys()`
- `dicionario.pop(chave)`
- `dicionario.popitem()`
- `dicionario.setdefault(chave)`
- `dicionario.update({...})`
- `dicionario.values()`

### Dicionário com tupla como chave

```python
livros = {
    ("Dom Casmurro", "Machado de Assis"): 1,
    ("1984", "George Orwell"): 2,
    ("O Pequeno Príncipe", "Antoine de Saint-Exupéry"): 3
}
```

Saída:

```python
{('Dom Casmurro', 'Machado de Assis'): 1, ('1984', 'George Orwell'): 2, ('O Pequeno Príncipe', 'Antoine de Saint-Exupéry'): 3}
```

### Dicionário com lista como valor

```python
livros = {
    1: ["Dom Casmurro", "Machado de Assis"],
    2: ["1984", "George Orwell"],
    3: ["O Pequeno Príncipe", "Antoine de Saint-Exupéry"]
}
```

Saída:

```python
{1: ['Dom Casmurro', 'Machado de Assis'], 2: ['1984', 'George Orwell'], 3: ['O Pequeno Príncipe'], 4: ['Antoine de Saint-Exupéry']}
```

# Exercícios

1. Peça 3 notas ao usuário, armazene em uma lista, mostre a maior nota e a média.

2. Calcule a distância entre dois pontos usando tuplas: `√((Xb - Xa)² + (Yb - Ya)²)`

3. Crie dois conjuntos com `range`: 50–70 e 65–80. Mostre união, diferença e interseção.

4. Crie um dicionário com linguagens de programação como chaves e avaliação (0–5) como valor. Mostre a melhor e a pior.

5. Crie uma lista com 5 pessoas (nome, idade, estado civil). Mostre o mais velho, média das idades, quantidade de solteiros e casados.

## Aulas

- [Aula 1 - Introdução à Linguagem de Programação Python](/tutorials/python/aula1)
- [Aula 2 - Operadores e Expressões](/tutorials/python/aula2)
- [Aula 3 - Estruturas Condicionais](/tutorials/python/aula3)
- [Aula 4 - Laços de Repetição](/tutorials/python/aula4)
- [Aula 5 - Estruturas de Dados](/tutorials/python/aula5)
- [Aula 6 - Funções](/tutorials/python/aula6)
- [Aula 7 - Strings](/tutorials/python/aula7)
