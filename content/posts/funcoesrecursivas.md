---
date: 2024-10-22
# description: ""
# image: ""
lastmod: 2024-10-22
showTableOfContents: false
tags: ["Python", "Funções"]
title: "Funções Recursivas"
type: "post"
---

## O que é recursividade e qual a sua vantagenm?

A recursividade é um conceito na programação para quando chamamos uma função e dentro dela chamamos ela novamente, isso significa uma função recursiva.

Vamos entender as funções recursivas como caixas, a primeira função representa a caixa maior, dentro dessa caixa temos várias outras caixas menores, uma dentro da outra, que são as próximas funções a serem chamadas. As caixas mostram o princípio de recursividade que, ao abrir a caixa maior, vermos outras menores até chegarmos na menor caixa possível. Dessa forma, é isso que as funções recursivas mostram, elas entram nelas mesmas a cada execução, fazendo com que elas se reduzam até o momento que atenda uma determinada condição da função com o menor resultado possível.

![caixas](https://github.com/user-attachments/assets/2d01e536-e560-4167-8837-6ec8bb7cefa7)

Uma função recursiva é uma maneira de criar um loop que ficará entrando na própria função diversas vezes até que uma condição seja satisfeita ao retornar algo. Essa abordagem facilita e simplifica a resolução de alguns exercícios, pois as funções 
recursivas resolvem problemas que seriam mais complicados de solucionar com estruturas de repetição, dependendo da complexidade do problema, além de serem escritas com menos linhas.

## Exemplo básico de recursividade

O cálculo de um número fatorial é um exemplo comum para estudar as funções recursivas. Um número fatorial é representado por um número seguido do ponto de exclamação `n!` para esse número ser calculado, vamos multiplicá-lo pelos seus antecessores até chegar em 1. Por exemplo: 5! = 5 x 4 x 3 x 2 x 1. O resultado é igual a 120. Note que para calcular um número fatorial vamos diminuindo ele e efetuando a multiplicação entre os números, isso lembra o conceito de recursividade. 

Agora, vamos entender como escrever um algorítimo que calcule um número fatorial, utilizando as funções recursivas. No exemplo abaixo, a função fatorial é chamada dentro dela mesmo até que o n (número fatorial) seja igual a 1, essa condição é chamada de caso base. Enquanto a condição base não é satisfeita, retorne à função fatorial de n vezes o n-1. Em algum momento, o n será igual a 1, pois estamos decrementando ele quando chamamos na função novamente e passamos n-1. Então, quando a condição for atendida, teremos o resultado do fatorial.

    função fatorial(n)
    início 
        se n <= 1 então retorne 1
        senão retorne n * fatorial(n-1)
    fim.

## Como o algoritmo da função recursiva funciona?

1) Pilha de chamadas de função

Vamos resolver o fatorial de 5, tendo como base o algoritmo visto acima. Primeiro, as funções são chamadas e empilhadas até que o caso base seja atendido.

    fatorial(5 - 1) retorne fatorial(4)
        fatorial(4 - 1) retorne fatorial(3)
            fatorial(3 - 1) retorne fatorial(2)               
                fatorial(2 - 1) retorne fatorial(1) 
                    fatorial(1) = 1 (caso base) --> Fim da pilha

2) Retorno das chamadas

Depois, as funções são desempilhadas e resolvidas na ordem inversa, começando do caso base e voltando para a primeira chamada, isso porque as funções voltam a ser executadas de onde a pilha parou.

    fatorial(1) = 1
        fatorial(2) = 2 * fatorial(1) = 2 * 1 = 2          
            fatorial(3) = 3 * fatorial(2) = 3 * 2 = 6
                fatorial(4) = 4 * fatorial(3) = 4 * 6 = 24 
                    fatorial(5) = 5 * fatorial(4) = 5 * 24 = 120 --> Fim do desempilhamento

Ao concluir o desempilhamento, temos como resultado que 5! é igual a 120.

De forma visual, podemos lembrar da analogia das caixas com a recursividade e aplicar aos fatoriais.

![caixas_fatorial](https://github.com/user-attachments/assets/d510c224-b798-434c-9d0f-6e828d586160)

## Exemplo da função fatorial criada em Java

    public int calcularFatorial(int num) {
        if (num <= 1) {
            return 1;
        } return num * calcularFatorial(num - 1); 
    }

## Desvantagens da recursividade

As funções recursivas devem ser utilizadas quando necessário, embora muito úteis, precisamos nos atendar a questões do desempenho do nosso software. É muito comum criar funções recursivas que estouram a pilha de execução, isso é, funções chamadas tantas vezes que estouram o limite de tempo que deveriam ter sido resolvidas. Quando criamos um loop que irá chamar a função dentro da função, estamos criando uma pilha de execução que ficará armazenando na memória as variáveis locais. Essa abordagem pode exigir muita memória do programa, afetando o seu desempenho e otimização. Além disso, as funções recursivas podem demorar mais tempo para serem finalizadas do que as funções interativas com estruturas de repetição. 

As pilhas de execução possuem um limite de tempo que podem ocasionar erros, pois a pilha não pode ser executada infinitamente, por isso, precisamos pensar bem na implementação das funções recursivas e definir o seu caso base da função. Toda função recursiva pode ser escrita utilizando estruturas de repetição, podemos escrever o passo a passo que a pilha de execução faz, só que utilizando um for ou while. Com isso, avalie qual a melhor forma de resolver o problema.