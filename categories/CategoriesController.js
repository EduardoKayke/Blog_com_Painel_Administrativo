const express = require('express');
const router = express.Router();

//Defina as suas rotas como quiser.
router.get("/categories", (requisition, response) => {
    response.send("Testando Rota de Categorias")
});

//Podemos criar quantas rotas e com o endereço que quisermos.
// Rota pra criar uma nova categoria
router.get("/admin/categories/new", (requisition, response) => {
    response.send("Rota para criar nova Categoria")
});

// Não esqueça de exportar o router.
module.exports = router;
// Devemos importar o arquivo e essa exportação no index.js