# Iniciando um Projeto React Native com TypeScript

Este guia fornece instruções passo a passo para criar um projeto React Native utilizando TypeScript, com duas abordagens diferentes: usando Expo ou React Native CLI.

## 1. Criando um Projeto com Expo

### 1.1. Instalação do `create-expo-app`

A ferramenta `create-expo-app` é uma CLI (Command Line Interface) projetada para facilitar a criação e configuração de novos projetos Expo. Ela oferece uma maneira rápida e simplificada de começar a desenvolver aplicativos React Native com Expo, substituindo o antigo `expo-cli` para a criação de projetos.

Para instalar o `create-expo-app`, execute o seguinte comando:

```bash
npm install -g create-expo-app
```

Você pode verificar se a instalação foi bem-sucedida listando os pacotes globais instalados:

```bash
npm list -g
```

### 1.2. Criação do Projeto

Para criar um novo projeto Expo com TypeScript, use o comando a seguir:

```bash
npx create-expo-app meu-app --template expo-template-blank-typescript
```

Isso criará uma pasta chamada `meu-app`. Abra essa pasta no Visual Studio Code:

```bash
cd meu-app
code .
```

### 1.3. Executando o Projeto

Dentro do projeto, você pode rodar o aplicativo em diferentes plataformas. Os comandos disponíveis são definidos na propriedade `scripts` do arquivo `package.json`:

```json
"scripts": {
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web"
}
```

Para testar o aplicativo no navegador, execute:

```bash
npm run web
```

Se solicitado, instale os pacotes necessários com o comando sugerido. Por exemplo:

```bash
npx expo install react-native-web react-dom @expo/metro-runtime
```

Após instalar os pacotes, execute novamente o comando `npm run web` para testar o aplicativo no navegador ou use o Expo Go para testar no dispositivo físico, escaneando o QR Code exibido.

### 1.4. Testando no Android

Para executar o aplicativo em um dispositivo Android, use:

```bash
npm run android
```

Para executar no iOS (em um Mac), use:

```bash
npm run ios
```

Se preferir, você pode escanear o QR Code usando o Expo Go no seu dispositivo para testar o aplicativo diretamente no celular.

## 2. Criando um Projeto com React Native CLI

### 2.1. Instalação do `react-native-cli`

A CLI do React Native é outra ferramenta para criar e gerenciar projetos. Para criar um projeto com TypeScript, siga os passos abaixo.

Primeiro, instale a CLI do React Native:

```bash
npx react-native init MeuApp --template react-native-template-typescript
```

Isso criará uma pasta chamada `MeuApp`. Navegue até a pasta:

```bash
cd MeuApp
```

### 2.2. Executando o Projeto

Assim como no Expo, você pode rodar o projeto em diferentes plataformas. Utilize os comandos abaixo conforme necessário:

- Para Android:

```bash
npx react-native run-android
```

- Para iOS (em um Mac):

```bash
npx react-native run-ios
```

- Para testar no navegador (necessário configuração adicional, não recomendada para iniciantes).

### 2.3. Configuração Adicional

Se você estiver desenvolvendo no Windows, talvez precise instalar o Android Studio para configurar o ambiente Android. No macOS, será necessário o Xcode para desenvolver para iOS.

Siga a documentação oficial para configurar o ambiente de desenvolvimento: [Documentação React Native](https://reactnative.dev/docs/environment-setup).

## Conclusão

Este guia fornece uma introdução básica para criar e iniciar um projeto React Native com TypeScript usando Expo e React Native CLI. Escolha a abordagem que melhor se adapta às suas necessidades e comece a construir seus aplicativos móveis!

Sinta-se à vontade para ajustar conforme necessário para seu projeto específico!
