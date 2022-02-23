const Sequelize = require("sequelize");
const connection = require("../database/database");

//Model
//Slug é o endereço da categoria.
//Exemplo do que é Slug
// Se uma categoria tem o título Desenvolvimento Web, no slug:
// desenvolvimento-web se for react.js, o slug fica:
// react-js
const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING, // Título tipo String
        allowNull: false, //Dados nulos falso.
    }, 
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Category;
// Agora podemos acessar esse model em arquivos externos