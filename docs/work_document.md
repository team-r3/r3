# Documento de trabalho

## Título da App

### Ideias principais

* Os 3 R's:

  ```text
  [r]eduzir
  [r]eutilizer
  [r]eciclar
  ```

* Base de dados com localização de ecopontos por categoria.
* Encontrar pontos de reciclagem.
* Trocar e entregar objectos usados, para que possam ser reutilizados.
* Reduzir a pegada ambiental.

### Sugestões de título

* R3
* R³
* r³
* Eco-locator
* Eco-buddy
* Eco-mapa
* Mapa verde
* Ideia verde
* Green-buddy
* Recycle++

## Funcionalidades

* Mapa com representação dos eco-pontos
  * Base de dados
  * Filtros:
    * ponto de interesse + distância,
    * categoria
  * Múltiplos pontos de interesse
  * Guardar procuras
* Anúncio de trocas e entregas
  * Sugestão automática de anúncios correspondentes
* Agregador de informação útil
  * E.g. que objectos devem ou não ser depositados em cada eco-ponto
  * Sistema de busca por objecto
* Ferramenta de comunicação com perguntas e respostas (?)

## Tarefas

* Decidir um nome
* Pesquisar um logo
* Preparar apresentação
* Criar mock-up em React Native
  * Estrutura com navegação entre screens
  * Layout (ver Material Design)
* Plano de negócio
  * Ideia 1: publicidade
  * Ideia 2: serviço público, em parceria com entidades locais

## Imagens (stock images)

* [stock-illustration-green-light-bulb](https://pt.depositphotos.com/6540141/stock-illustration-green-light-bulb.html)
* [stock-photography-green-life-tree-illustration](https://www.dreamstime.com/stock-photography-green-life-tree-illustration-eco-friendly-renewable-energy-light-bulbs-vector-layered-easy-manipulation-custom-image32692912)
* [stock-photo-green-idea-light-bulb-leaf](https://www.dreamstime.com/stock-photo-green-idea-light-bulb-leaf-icon-vector-illustration-image40169350)

## Work environment

```bash
## Install via create-react-native-app
npx create-react-native-app nome_da_app
cd nome_da_app
yarn add react-native-material-ui
yarn add prop-types

## --- normal React Native ---

## Clone from git
git clone https://github.com/team-r3/r3.git r3
yarn
## => Now open android subfolder in Android Studio
##    - this is needed to prepare the virtual device
##    - You should also wipe the the virtual device data
##    - Now you can close Android Studio

## Install Material UI
yarn add react-native-material-ui
yarn add react-native-vector-icons

## 1. Start emulator (console 1)
C:\Users\samue\AppData\Local\Android\Sdk\tools\emulator.exe -avd Nexus-5X-API-23-x86

## 2. Start app (console 2)
react-native run-android

```

