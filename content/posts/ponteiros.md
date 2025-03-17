---
date: 2025-03-16
# description: ""
# image: ""
lastmod: 2024-07-26
showTableOfContents: false
tags: ["C", "Ponteiros"]
title: "Ponteiros em C"
type: "post"
---

## Criando ponteiros

Um ponteiro é uma forma de endereçar uma variável em outra.

Ao atribuir um valor para ser armazenado na memória de uma variável, utilizamos o conceito de ponteiros para que essa variável seja referência de outra, fazendo uma associação de variáveis, assim é atribuído o endereço de uma variável ao ponteiro.

**Exemplo 1:**

```
# include <stdio.h>

int main(void) {
    int x = 10; // variável x criada
    int *y; // ponteiro y criado

    y = &x; // atribuído o endereço de x em y
	
    printf("x = %d \n", x);
    printf("*y = %d \n", *y);
    printf("y = %p \n", y);	
}
```

**Saída:**

x continuará sendo 10.

O ponteiro *y terá o valor 10, pois referencia x.

y terá o endereço de x com algo do tipo 0x7fffffffda04 armazenado.

Dessa forma, uma vez que a associação entre x e y foi criada, sempre que o valor de x for atualizado o valor de y também será modificado paralelamente, pois y possui o endereço de x.

**Exemplo 2:**

```
# include <stdio.h>

int main(void) {
    int x = 10; // variável x criada
    int *y; // ponteiro y criado
	
    y = &x; // atribuído o endereço de x em y
	
    x = 20 // alterado o valor de x
	
    printf("x = %d \n", x);
    printf("*y = %d \n", *y);
    printf("y = %p \n", y);	
}
```

Agora, x será 20.

O ponteiro *y também será 20.

y guarda o mesmo endereço de x 0x7fffffffda04.

[Exercícios de Ponteiros](https://github.com/MariaCarolinass/c-cpp/tree/main/c/ponteiros/src)