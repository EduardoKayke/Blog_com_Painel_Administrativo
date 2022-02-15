const express = require('express');
const router = express.Router();

//Defina as suas rotas omo quiser.
router.get("/categories", (requisition, response) => {
    response.send("Testando Rota de Categorias")
});