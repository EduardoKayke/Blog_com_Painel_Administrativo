# Blog_com_Painel_Administrativo
Site de Blog com Painel Administrativo.

1 - npm init

2 - npm install --save express

3 - npm install --save sequelize

4 - npm install --save mysql2

5 - npm install --save body-parser

6 - npm install --save ejs

7 - Criar o arquivo principal. (index.js)

8 - Criar pastas, public, views e database.

9 - Configurações no arquivo index.js
```JavaScript
//Carregar o módulo do Express
const express = require("express");
//Criar uma instância do Express
const app = express();
//Carregando o Body Parser
const bodyParser = require("body-parser");
//Conexão com banco de dados.
const connection = require('./database/database');

//View Engine
app.set('view engine', 'ejs');

//Static File
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
// Body Parser além de aceitar dados do formulário, aceitar
// dados no formato JSON
app.use(bodyParser.json());

// Database
connection.authenticate().then(() => {
    console.log(`Conexão Bem Sucedida ao Banco de Dados`);
}).catch((error) => {
    console.log(`Falha ao conectar com Banco de Dados: ${error}`);
});

//Criando a rota principal
app.get("/", (requisition, response) => {
    response.render("index");
});

//Iniciando a aplicação. Porta e Função Callback
app.listen(8080, () => {
    console.log(`O servidor está rodando`);
});
```

10 - Configurações no arquivo database.js
```JavaScript
//Importando o Sequelize
const Sequelize = require("sequelize");
//Objeto de conexão = const connection = new Sequelize();
// Dentro é o nome do banco, o usuário que vai logar.
// A senha e logo após abrir um JSON
// Host = servidor
// Dialect = O tipo de banco de dados
const connection = new Sequelize('guiapress', 'root', '******', {
    host: 'localhost',
    dialect: 'mysql'
});

//Vamos exportar essa conexão para usar a variavel em outros
// arquivos do nosso app.
module.exports = connection;
```

------------------------------------------------------------

11 - Configuração do Bootstrap no projeto 

    1 - Baixe o bootstrap - Compiled CSS and JS
    2 - Crie uma pasta chamada bootstrap dentro da pasta public e coloque os aquivos dentro.
    3 - Agora basta colcar os links de conexão do - CDN via jsDelivr - e usar nos arquivos que quiser.
    4 - Crie uma pasta chamada partials dentro da pasta views.
    5 - É ai que você vai criar os arquivos que vai utilizar. Use o link no header.ejs

12 - Padrão de organização MVC 

    MVC:
    - Projeto organizado por domínios e ou partes. 
    - Exemplo, domínio de artigo e gategoria.
    - São duas partes diferentes. Duas coisas diferentes.

    Exemplos de partes ou domínios:
    - Pasta guardando os scripts relacionados a categoria.
    - Pasta guardando todos os scripts relacionados a artigo.
    - Pasta relacionada ao painel administrativo.
    - Pasta relacionada ao login.    
    - Pasta relacionada a recuperar senha.    
    - Pasta relacionada a perfil do usuário.    

13 - Controler é o arquivo onde ficará todas as rotas.

    - Usaremos um recurso do Express.js que cria rotas.
    - Dessa forma não usamos a variável app.
    - Crie um arquivo na pasta categories chamado:
        CategoriesController.js
    - Adicione dentro os comandos a seguir.

```JavaScript
    const express = require('express');
    const router = express.Router();

    //Defina as suas rotas como quiser.
    router.get("/categories", (requisition, response) => {
        response.send("Testando Rota de Categorias")
    });
```