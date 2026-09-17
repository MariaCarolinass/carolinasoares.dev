---
date: 2026-09-17
lastmod: 2026-09-17
showTableOfContents: true
tags: ["circ", "HDL", "circuitos digitais", "lógica digital", "hardware", "open source"]
title: "Aprendendo circ: descrevendo circuitos lógicos em texto"
description: "Uma introdução à linguagem circ, com exemplos práticos de circuitos combinacionais e sequenciais."
type: "post"
------------

Nas últimas semanas tenho estudado a [circ](https://circ-lang.org/), uma linguagem textual para descrever e simular circuitos lógicos digitais. A proposta dela é simples: em vez de arrastar portas lógicas em um simulador gráfico, você escreve o circuito em texto e roda ele direto no navegador, pelo [playground](https://circ-lang.org/playground/) oficial.

![Exemplo de simulação de um circuito no playground da circ](https://raw.githubusercontent.com/MariaCarolinass/aprendendo-circ-lang/main/playground.png)

Para praticar, criei o repositório [aprendendo-circ-lang](https://github.com/MariaCarolinass/aprendendo-circ-lang), onde fui construindo circuitos combinacionais e sequenciais do zero, de uma porta lógica isolada até um pequeno somador de 3 bits com registrador e saída em display de 7 segmentos. Neste post vou mostrar esses circuitos e explicar o que cada trecho de código faz.

---

## Sintaxe básica da circ

Antes de ir para os circuitos, vale entender os elementos principais da linguagem (a [referência completa](https://circ-lang.org/reference/) tem todos os detalhes).

* `input` declara pinos de entrada. Também aceita barramentos: `input[3] a` cria uma entrada de 3 bits;
* `output nome(in = ...)` declara uma saída, sempre vinculada a um sinal através da porta `in`;
* portas lógicas (`and`, `or`, `not`, `xor`, `nand`, `nor`, `xnor`) são instanciadas como componentes, cada uma com um nome e as portas conectadas entre parênteses, por exemplo `and g(a = x, b = y)`;
* `wire` é um componente de passagem, usado para nomear um sinal intermediário. Ele tem uma porta `in` e uma porta `out`;
* `import` traz um circuito de outro arquivo para ser reutilizado como um componente, por exemplo `import HA "HA.circ"`;
* `{a, b}` concatena sinais em um barramento maior, e `sinal[i]` extrai um bit específico dele;
* comentários seguem o estilo `// comentário até o fim da linha`.

Com isso já dá para ler qualquer um dos circuitos abaixo.

---

## Half Adder: somando dois bits

O primeiro circuito do repositório é o meio somador (`HA.circ`), que soma dois bits e gera a soma (`s`) e o carry (`c`):

```circ
// HA - Half Adder (meio somador)
// S = A xor B,  C = A and B
input a, b
xor s_g(a = a, b = b)
and c_g(a = a, b = b)
output s(in = s_g.out)
output c(in = c_g.out)
```

* `input a, b` declara as duas entradas de 1 bit;
* `xor s_g(...)` instancia uma porta XOR chamada `s_g`, que calcula a soma sem considerar o carry;
* `and c_g(...)` instancia uma porta AND chamada `c_g`, que calcula o carry (só é `1` quando `a` e `b` são `1`);
* as duas saídas (`s` e `c`) são conectadas ao `out` de cada porta.

---

## Full Adder: somando com carry de entrada

O somador completo (`FA.circ`) soma dois bits **e** um carry de entrada (`cin`), reaproveitando o `HA` que acabamos de ver:

```circ
// FA - Full Adder (somador completo)
// dois half adders + OR para o carry de saída
import HA "HA.circ"
input a, b, cin
HA ha1(a = a, b = b)
HA ha2(a = ha1.s, b = cin)
or cout_g(a = ha1.c, b = ha2.c)
output s(in = ha2.s)
output cout(in = cout_g.out)
```

Aqui aparece o `import`: `HA` deixa de ser só um arquivo e passa a ser um componente que pode ser instanciado, igual a uma porta lógica. A ideia do full adder é:

* `ha1` soma `a` e `b`, gerando uma soma parcial (`ha1.s`) e um carry parcial (`ha1.c`);
* `ha2` soma essa soma parcial com `cin`, gerando a soma final (`ha2.s`) e outro carry parcial (`ha2.c`);
* a porta `or cout_g` combina os dois carries parciais no carry de saída (`cout`) — se qualquer um dos dois half adders gerou carry, o full adder também gera.

---

## Somador de 3 bits

Encadeando três `FA`, dá para somar números de 3 bits (`somador3bits.circ`):

```circ
// somador3bits - somador de 3 bits com carry ripple
// a[0]/b[0] = LSB, a[2]/b[2] = MSB
import FA "FA.circ"
input[3] a, b
input cin
FA fa0(a = a[0], b = b[0], cin = cin)
FA fa1(a = a[1], b = b[1], cin = fa0.cout)
FA fa2(a = a[2], b = b[2], cin = fa1.cout)
output[3] s(in = {fa0.s, fa1.s, fa2.s})
output cout(in = fa2.cout)
```

`input[3] a, b` já mostra os barramentos em ação: `a` e `b` passam a ter 3 bits, acessados como `a[0]` (menos significativo) até `a[2]` (mais significativo). Essa é a técnica de **carry ripple**: o carry de saída de um `FA` vira o `cin` do próximo, e a soma final é montada com `{fa0.s, fa1.s, fa2.s}`, que concatena os três bits de soma em um barramento de 3 bits.

---

## Registrador: guardando um bit

Para a parte sequencial, `registrador.circ` implementa um flip-flop tipo D mestre-escravo, que só atualiza a saída na borda de descida do clock:

```circ
input dado, clock
not nclk(in = clock)

// latch mestre: aberto quando clock = 1
and m1(a = dado, b = clock)
and m2(a = qm, b = nclk.out)
or  m_o(a = m1.out, b = m2.out)
wire qm(in = m_o.out)

// latch escravo: aberto quando clock = 0
and s1(a = qm.out, b = nclk.out)
and s2(a = qs, b = clock)
or  s_o(a = s1.out, b = s2.out)
wire qs(in = s_o.out)

output s(in = qs.out)
```

São dois latches em série: o **mestre** fica "aberto" (acompanha `dado`) enquanto `clock = 1`, e o **escravo** só abre quando `clock = 0`. Como nunca ficam abertos ao mesmo tempo, o valor só se propaga do mestre para o escravo no instante em que o clock desce de `1` para `0` — daí o circuito ser sensível à borda de descida. Repare também no uso do `wire` para nomear os sinais intermediários `qm` e `qs`, o que deixa as realimentações (`m2` usando `qm`, `s2` usando `qs`) mais legíveis.

Empilhando três desses registradores com um clock compartilhado (`registrado3bit.circ`), dá para guardar um valor de 3 bits inteiro:

```circ
import registrador "registrador.circ"
input[3] d
input clock
registrador r0(dado = d[0], clock = clock)
registrador r1(dado = d[1], clock = clock)
registrador r2(dado = d[2], clock = clock)
output[3] q(in = {r0.s, r1.s, r2.s})
```

---

## Juntando tudo: main.circ

O circuito principal importa o somador, o registrador de 3 bits e um decodificador para display de 7 segmentos (`driver7seg.circ`, que traduz um número de 3 bits nos sinais dos sete segmentos do display), conectando os três:

```circ
import somador3bits "somador3bits.circ"
import registrado3bit "registrado3bit.circ"
import driver7seg "driver7seg.circ"

input[3] a, b
input clk

// circ não tem constante, então: x AND (NOT x) == 0
not zero_n(in = clk)
and zero(a = clk, b = zero_n.out)

somador3bits add(a = a, b = b, cin = zero.out)
registrado3bit regs(d = add.s, clock = clk)
driver7seg display(n = regs.q)

output[3] soma(in = add.s)
output[3] registrado(in = regs.q)
```

Um detalhe interessante: a circ não tem um valor constante `0` embutido, então o truque `x AND (NOT x)` é usado para gerar um `0` fixo, usado como carry de entrada do somador. Fora isso, o `main.circ` é basicamente fiação: `a + b` entra no `somador3bits`, o resultado é guardado no `registrado3bit` a cada pulso de clock, e o valor registrado é decodificado pelo `driver7seg` para acender os segmentos corretos.

---

## Testando no playground

Não é preciso instalar nada para rodar esses circuitos. Basta abrir o [playground da circ](https://circ-lang.org/playground/) e colar o conteúdo de qualquer arquivo `.circ` do repositório. O `main.circ` já dá para ver o somador completo funcionando, com os leds do display reagindo em tempo real.

---

## Considerações finais

Construir esses circuitos aos poucos, começando de uma porta XOR isolada até um somador com registrador e display, ajudou bastante a fixar conceitos de lógica digital que, no papel, às vezes parecem abstratos. E como a circ é um projeto open source, criado pelo [Jefferson Mourak](https://github.com/jeffersonmourak), também é uma boa desculpa para estudar a linguagem e, quem sabe, contribuir com ela no futuro.

Quem quiser ver o repositório completo ou testar os circuitos pode acessar [aprendendo-circ-lang](https://github.com/MariaCarolinass/aprendendo-circ-lang) no GitHub.
