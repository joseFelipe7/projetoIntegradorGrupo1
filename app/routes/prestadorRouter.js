const express = require("express");

let router = express.Router();

router.get("/single", (req, res) => {
    res.send("Single Prestador");
})

router.get("/lista", (req, res) => {
    res.send("Lista de Prestadores");
})
router.get("/single/cadastro-servicos", (req, res) => {
    res.render("areaPrestador", {view: "cadastroServiçosPrestador"});
})

router.get("/single/pedidos", (req, res) => {
    res.render("areaPrestador", {view: "pedidosAreaPrestador"});
})

module.exports = router;