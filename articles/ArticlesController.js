const express = require('express');
const router = express.Router();

//Defina as suas rotas como quiser.
router.get("/articles", (requisition, response) => {
    response.send("Testando Rota de Artigos")
});

//Podemos criar quantas rotas e com o endereço que quisermos.
// Rota pra criar uma nova categoria
router.get("/admin/articles/new", (requisition, response) => {
    response.send("Rota para criar um novo Artigo")
});

// Não esqueça de exportar o router.
module.exports = router;
// Devemos importar o arquivo e essa exportação no index.js