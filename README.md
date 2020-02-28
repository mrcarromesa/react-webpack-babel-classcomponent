<h2>Estrutura React - Webpack/Babel e Class Component</h2>

- Iniciar o projeto:

```bash
yarn init -y
```

- Instalar o babel:

```bash
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
```

- O @babel/preset-env altera as funcionalidades que o browser não entende como 

- @babel/preset-react transforma as coisas que o navegador não entende com jsx..

- Ajustar no `package.json` para deixar as dependencias acima como desenvolvimento.

- Instalar alguma lib do react:

```bash
yarn add react react-dom
```

---

<h2>Configurar o webpack e o babel</h2>

- criar o arquivo `babe.config.js`

---

<h2>Configuração do webpack</h2>

- criar o arquivo `webpack.config.js`

- Instalar a dependencia `babel-loader`, como dependencia de desenvolvimento 

```bash
yarn add babel-loader -D
```

- No arquivo `package.json` adicionar no `scripts` o build do webpack

---

<h2>Atualizar browser a cada novo ajuste no código</h2>

- Instalar depencia:

```bash
yarn add webpack-dev-server -D
```

- Dentro de webpack criar uma propriedade devServer;

- Ajsutar o arquivo package.json na tag scripts para adicionar o webpack-dev-server

- Agora ao executar o comando, `yarn dev`, qualquer alteração nos arquivos irá dar refresh automático no browser.

- e para criar o script de production, altere no `package.json` a tag scripts adicionando: 

```js
"build": "webpack --mode production"
```

---


---


<h2>Começar a utilizar o react com babel</h2>

- Agora que tudo já está configurado só iniciar a utilizar o código react.


---

<h2>Css</h2>

- Adicionar o Css loader e o style loader:

```bash
yarn add style-loader css-loader -D
```

- Ajustar o webpack.config.js, adicionando test para encontrar arquivos que terminam com css


---

<h2>Image Loader</h2>

- Adicionar o file-loader:

```bash
yarn add file-loader -D
```

- Adicionar um novo test no arquivo webpack.


---

<h2>React</h2>

- A sintaxe mais resumida não é entendida pelo babel:

```js
state = {
        techs: [
            'Node.js',
            'ReactJS',
            'React Native'
        ]
    }
```

- Nesse caso é necessário instalar o seguinte:

```bash
yarn add @babel/plugin-proposal-class-properties -D
```

- Depois adicionar o plugin nas configurações do babel

---

<h2>Prop types</h2>

- Instalar:

```bash
yarn add prop-types
```