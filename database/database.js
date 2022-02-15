//Importando o Sequelize
const Sequelize = require("sequelize");
//Objeto de conexão = const connection = new Sequelize();
// Dentro é o nome do banco, o usuário que vai logar.
// A senha e logo após abrir um JSON
// Host = servidor
// Dialect = O tipo de banco de dados
const connection = new Sequelize('guiapress', 'root', 'Ee@87654321', {
    host: 'localhost',
    dialect: 'mysql'
});

//Vamos exportar essa conexão para usar a variavel em outros
// arquivos do nosso app.
module.exports = connection;