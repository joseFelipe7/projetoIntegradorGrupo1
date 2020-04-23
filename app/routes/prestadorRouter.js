const express = require("express");

let router = express.Router();

router.get("/single", (req, res) => {
    res.render("singleprestador");
})

router.get("/lista", (req, res) => {
    res.render("listaPrestadores");
})

router.get("/single/cadastro-servicos", (req, res) => {
    res.render("areaPrestador", {view: "cadastroServiçosPrestador"});
})

router.get("/single/pedidos", (req, res) => {
    res.render("areaPrestador", {view: "pedidosAreaPrestador"});
})
router.get("/single/meusDados-prestador-bru", (req, res) => {
    res.render("areaPrestador", {view: "meusDados-prestador"});
    // ...5620/prestador/single/meusDados-prestador-Bru
})


module.exports = router;