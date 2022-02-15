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