---
date: 2026-10-21
description: "Minha terceira Python Brasil: uma palestra sobre visão computacional em desastres urbanos, as conversas com a comunidade e uma passagem por Florianópolis."
draft: false
image: "/images/pybr2026/abertura-palestra.jpg"
showTableOfContents: false
tags: ["Python Brasil", "palestras", "inteligência artificial", "visão computacional"]
title: "Como foi palestrar na Python Brasil 2026"
type: "post"
---

![No palco da Python Brasil 2026, durante a abertura da minha palestra](/images/pybr2026/abertura-palestra.jpg)

Esta foi a minha terceira Python Brasil e a segunda vez em que subi ao palco do evento. Em 2025, falei sobre dados abertos, um tema com o qual trabalhei por bastante tempo e que sempre gostei de compartilhar. Gosto de projetos que aproximam tecnologia e impacto social. Neste ano, levei uma pesquisa que começou na Universidade Federal do Rio Grande do Norte - UFRN e nasceu de outra pergunta: **como a visão computacional pode ajudar a localizar pessoas e animais em situações de desastre?**

A [Python Brasil 2026](https://2026.pythonbrasil.org.br/) aconteceu em Florianópolis, Santa Catarina. A programação teve dois dias de tutoriais, atividades práticas conduzidas pela comunidade, em 14 e 15 de outubro; três dias de palestras, de 16 a 18; e um dia de sprint, em 19 de outubro, na sede da HostGator, para contribuir com projetos de código aberto. Minha viagem foi curta desta vez: palestrei na sexta-feira, dia 16, e acabei passando menos tempo no evento do que gostaria.

No credenciamento, recebi o kit do evento, com crachá, camiseta e adesivos. É um detalhe simples, mas que sempre marca o começo da experiência: chegar, encontrar a comunidade e perceber que a conferência está acontecendo de verdade.

{{< figure src="/images/pybr2026/kit-evento.jpg" alt="Crachá, camiseta e adesivos do kit da Python Brasil 2026" width="420" >}}

## Da pesquisa ao palco

Minha palestra se chamou **IA no Caos: Pipelines Multimodais em Desastres Urbanos**. Você pode [ver os slides da palestra](/docs/palestra-ia-no-caos.pdf) e [explorar o código do projeto no GitHub](https://github.com/MariaCarolinass/urban-disaster-monitor).

A pesquisa começou na disciplina de Visão Computacional da UFRN, com o professor [Helton Maia](https://heltonmaia.com/). O primeiro protótipo buscava detectar elementos relevantes em imagens. Depois, o trabalho ganhou o contexto de monitoramento urbano no Smart Metropolis e de segurança pública no SPICI. [João Galdino](https://github.com/jagaldino) também colaborou com o projeto. Ao longo desse caminho, a pergunta ficou mais específica: em uma enchente ou em um desabamento, localizar uma pessoa é importante, mas também pode ser necessário distinguir quem precisa de ajuda de quem já integra uma equipe de resgate.

Para quem não trabalha com o tema, visão computacional é uma área da inteligência artificial que tenta extrair informações de imagens e vídeos. No nosso caso, o objetivo é identificar **civis, socorristas e animais**, indicar onde aparecem na cena e atribuir uma medida de confiança a cada detecção. Água, reflexos, lama, detritos e corpos parcialmente encobertos tornam essa tarefa bem diferente de reconhecer objetos em fotos comuns.

Antes de mostrar os experimentos, expliquei essa base. Uma imagem chega ao computador como valores numéricos. Durante o treinamento, a rede recebe exemplos anotados, compara suas previsões com as respostas esperadas e ajusta seus parâmetros. Em redes convolucionais, filtros percorrem pequenas regiões da imagem e ajudam a reconhecer padrões que, combinados em camadas, podem representar partes de objetos e objetos inteiros. Usei uma [visualização interativa em 3D de Adam Harley](https://adamharley.com/nn_vis/cnn/3d.html) para tornar esse processo mais concreto.

{{< figure src="/images/pybr2026/demonstracao-cnn-3d.jpg" alt="Mostrando uma visualização em 3D de uma rede convolucional durante a palestra" width="700" >}}

Fiz questão de começar pelos fundamentos porque mesmo quem desenvolve software há anos pode não ter tido contato com visão computacional. Entender como a rede aprende ajuda a entender também por que os **dados de treinamento** importam tanto. Se ela vê apenas cenas limpas, talvez não reconheça bem uma pessoa parcialmente submersa ou um animal em meio aos destroços. Por isso, o projeto envolveu reunir e revisar imagens do contexto de desastres, preparar anotações, ampliar parte do conjunto com imagens sintéticas e comparar modelos de detecção. A parte multimodal entra na geração e na curadoria dessas imagens, combinando instruções em texto e conteúdo visual; na detecção, o modelo analisa as imagens. O conjunto de dados e o código estão disponíveis para quem quiser estudar ou continuar os experimentos.

{{< figure src="/images/pybr2026/carolina-apresentando-pesquisa.jpg" alt="Apresentando a pesquisa no palco da Python Brasil 2026" width="640" >}}

## As conversas depois da palestra

Mesmo já tendo palestrado antes, senti nervosismo em alguns momentos. Quando comecei a falar, fui me tranquilizando. A sala estava cheia de pessoas prestando atenção, e o interesse do público me motivou muito.

As perguntas foram uma das partes mais especiais. Pelo jeito como algumas pessoas perguntaram, tive a sensação de que consegui inspirar quem estava começando na área. Outras já imaginavam situações do mundo real em que a ideia poderia ser aplicada. Foi bom perceber que o projeto despertou curiosidade para além do experimento que eu havia apresentado.

Ao mesmo tempo, existe um caminho importante entre uma pesquisa promissora e uma ferramenta que equipes possam usar em uma emergência. Seriam necessários mais investimento, pessoas envolvidas e testes em diferentes cenários, além de avaliar questões como erros de detecção, velocidade e condições reais de operação. Não queria apresentar o projeto como uma solução pronta, e sim como uma possibilidade de pesquisa com relevância social.

Há espaço para contribuições menores e voluntárias nesse caminho. A existência do [conjunto de dados](https://www.kaggle.com/datasets/mariacsoares/urban-disaster-object-detection-dataset/data) já permite investigar novas perguntas: testar modelos mais leves em sistemas embarcados, estudar imagens captadas por drones, comparar o desempenho em cenas noturnas ou com muita água, melhorar a anotação de casos difíceis, criar interfaces para revisão humana ou explorar alertas em vídeo. Um experimento não precisa atender milhões de pessoas para ter valor. Pode ajudar a aprender, render um projeto acadêmico ou de portfólio e abrir uma conversa sobre como contribuir socialmente com tecnologia.

No fim, recebi um presente pela palestra: um mapa da cidade feito em argila para colocar na parede. Achei o gesto muito bonito e trouxe comigo uma lembrança concreta daquele dia.

{{< figure src="/images/pybr2026/mapa-florianopolis-argila.jpg" alt="Mapa de Florianópolis feito em argila, recebido como presente pela palestra" width="420" >}}

## Uma passagem pela Ilha da Magia

Esta foi a minha segunda vez em Florianópolis. A cidade é conhecida como **Ilha da Magia**, um apelido ligado também às lendas locais. Para mim, o encanto aparece muito na paisagem: praias, morros, vegetação e essa proximidade constante com a natureza.

{{< figure src="/images/pybr2026/vista-mar-florianopolis.jpg" alt="Paisagem do mar em Florianópolis" width="720" >}}

Embora tenha ficado um pouco longe do local do evento, escolhi me hospedar na Barra da Lagoa. Queria um lugar mais ligado à natureza, onde pudesse me desconectar um pouco entre os compromissos. Mesmo numa viagem curta, consegui aproveitar as vistas e a comida. As ostras, que encontrei em vários restaurantes, me chamaram a atenção.

{{< figure src="/images/pybr2026/por-do-sol-florianopolis.jpg" alt="Fim de tarde sobre a água e os morros de Florianópolis" width="720" >}}

Voltei com a alegria de ter compartilhado uma pesquisa em que acredito e, principalmente, de ter encontrado pessoas dispostas a pensar em novos usos para ela. Palestrar na Python Brasil me lembrou que apresentar um projeto também é abrir espaço para que outras pessoas façam perguntas, proponham caminhos e talvez construam os próximos passos junto com a gente.

## Links para continuar

- [Programação e informações da Python Brasil 2026](https://2026.pythonbrasil.org.br/)
- [Slides da palestra](/docs/palestra-ia-no-caos.pdf) e [página de palestras](/talks/)
- [Conjunto de dados no Kaggle](https://www.kaggle.com/datasets/mariacsoares/urban-disaster-object-detection-dataset/data) e [versão anotada no Roboflow Universe](https://universe.roboflow.com/ufrnprojects-xlut9/urban-disaster-monitor)
- [Código do projeto](https://github.com/MariaCarolinass/urban-disaster-monitor)
- [Visualização 3D de uma rede convolucional, de Adam Harley](https://adamharley.com/nn_vis/cnn/3d.html)
- [Introdução às redes convolucionais, do curso CS231n de Stanford](https://cs231n.github.io/convolutional-networks/)
- [Informações sobre a Barra da Lagoa e Florianópolis](https://visitefloripa.com.br/o-que-ver/praia-da-barra-da-lagoa/)
