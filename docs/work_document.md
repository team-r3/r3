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

### Installation

#### Original installation with create-react-native-app

```bash
npx create-react-native-app my_app
cd my_app
yarn add react-native-material-ui
yarn add prop-types
```

#### Second attempt using normal React Native

```bash
## 1. Clone from git
git clone https://github.com/team-r3/r3.git r3
cd r3
yarn

## 2. Now open android subfolder in Android Studio
##    - this is needed to prepare the virtual device
##    - You should also wipe the the virtual device data
##    - Now you can close Android Studio

## 3. Install Material UI
npm install --save react-native-material-ui
npm install --save react-native-vector-icons

## 4. Link everything
react-native link react-native-vector-icons
react-native link
```

### Development

#### With emulator

1. Start emulator (console 1)

   ```bash
   C:\Users\samue\AppData\Local\Android\Sdk\tools\emulator.exe -avd Nexus-5X-API-23-x86

   ## Alternatively, to wipe previous data if there are issues
   C:\Users\samue\AppData\Local\Android\Sdk\tools\emulator.exe -avd Nexus-5X-API-23-x86 -wipe-data
   ```

2. Start the app (console 2)

   ```bash
   react-native run-android
   ```

#### Directly on device

1. Enable developer mode on Android device, including *Debug via USB*.
2. Start the app:

   ```bash
   react-native run-android
   ```

##### Troubleshooting

* When the following error occurs:

  ```bash
  FAILURE: Build failed with an exception.

  * What went wrong:
  A problem occurred configuring project ':app'.
  > Could not resolve all dependencies for configuration ':app:_debugApk'.
     > A problem occurred configuring project ':react-native-vector-icons'.
        > Could not resolve all dependencies for configuration ':react-native-vector-icons:classpath'.
           > Could not resolve com.android.tools.build:gradle:2.3.+.
             Required by:
                 r3:react-native-vector-icons:unspecified
              > Could not resolve com.android.tools.build:gradle:2.3.+.
                 > Failed to list versions for com.android.tools.build:gradle.
                    > Unable to load Maven meta-data from https://jcenter.bintray.com/com/android/tools/build/gradle/maven-metadata.xml.
                       > Could not GET 'https://jcenter.bintray.com/com/android/tools/build/gradle/maven-metadata.xml'.
                          > jcenter.bintray.com
  ```

  There are two possible solutions:

  * Try again while connected to the internet, or
  * Configure gradle to make the build offline. You can achieve this by creating an `init.gradle` file inside the `YOUR_USER_FOLDER\.gradle\` folder, with the follwing contents:

    ```bash
    startParameter.offline=true
    ```

* Deleting files from previous builds:
  * Sometimes you will get errors like this one:

    ```bash
    > java.io.IOException: Could not delete path 'C:\r3\node_modules\react-native-maps\lib\android\build\generated\source\r\release\com\airbnb\android'.
    ```

  * In this case the best option is to manually delete the file and try again.
  * Here's a quick list of deletion commands which are tested and safe to run. You should update this list with your own commands, when you have to delete a file which is not included here:

    ```bash
    rm node_modules\react-native-maps\lib\android\build\generated\source\r\release\com\airbnb\android
    rm node_modules\react-native-maps\lib\android\build\generated\source\r\release\com\google\android
    rm node_modules\react-native-vector-icons\android\build\generated\source\r\release\android\support\v7
    rm node_modules\react-native-vector-icons\android\build\generated\source\r\release\com\facebook\drawee\backends
    rm node_modules\react-native-vector-icons\android\build\generated\source\r\release\com\facebook\fbui
    ```
