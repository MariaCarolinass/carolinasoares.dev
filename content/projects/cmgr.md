---
date: 2024-03-10T15:00:00-03:00
description: "Aplicação desktop para gerenciamento e mapeamento de dados georreferenciados da CImaGeo"
title: "CMGR - CImaGeo Manager"
type: post
showTableOfContents: true
tags: ["java", "spring", "hibernate", "jpa", "postgresql", "desktop", "geoprocessamento"]
---

## Aplicação desktop para gerenciamento e mapeamento de dados georreferenciados da CImaGeo.

O CMGR é um software gerente da [CImaGeo - Central de Imageamento de Dados Geofísicos](https://cimageo.com.br/) com funcionalidades para cadastro, edição, remoção e visualização do banco de dados da empresa. Além disso, o programa integra um mapa do [OpenStreepMap](https://www.openstreetmap.org/) para visualizar a geometria e coordenada dos dados que estão no banco de dados.

O objetivo do programa é facilitar o cotidiano do trabalho dos geofísicos que trabalham na CImaGeo, organizando as informações e oferecendo um norte para onde exatamente as geometrias cadastradas estão localizadas no mapa. 

### Algumas funcionalidades

- Visualizar geometrias de bacias, blocos, campos, poços, linhas 2D e polígonos 3D
- Visualizar quilometragem de linhas 2D e tamanho da área dos polígonos 3D
- Filtrar geometrias que estão contidas ou que passam por outra geometria
- Converter coordenadas para o formato DMS ou DD
- Importar e exportar geometrias no formato CSV ou ShapeFile
- Criar e salvar desenhos no mapa

### Tecnologias

No programa é utilizado as tecnologias Java, Spring, Hibernate, JPA (Java Persistence API) e PostgreSQL no banco de dados.

### Programa similar: GeoMaps

Um software similar ao CMGR é a ferramenta web da Agência Nacional do Petróleo, Gás Natural e Biocombustíveis (ANP) o [GeoMaps](https://geomaps.anp.gov.br/). O GeoMaps permite visualizar as informações abertas e disponíveis pela ANP e realizar alguns filtros nesses dados.

O diferencial do CMGR é ser uma aplicação para Desktop bem completa para gerenciar os dados da CImaGeo e com funcionalidades específicas direcionadas ao dia a dia das pessoas da empresa. Além do CMGR possuir informações confidenciais que não estão cadastradas no GeoMaps.
