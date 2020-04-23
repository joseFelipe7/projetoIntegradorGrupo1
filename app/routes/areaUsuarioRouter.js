const express = require("express");

let router = express.Router();

router.get("/area-contratante/meus-dados", (req, res) => {
    res.render("areaContratante", {view: "meusDadosContratante"});
    // ...5620/usuario/area-contratante/meus-dados
})


router.get("/area-contratante/pedidos", (req, res) => {
    res.render("areaContratante", {view: "pedidosAreaContratante"});
    // ...5620/usuario/area-contratante/pedidos
})


router.get("/area-contratante/acompanhe", (req, res) => {
    res.render("areaContratante", {view: "acompanheAreaContratante"});
    // ...5620/usuario/area-contratante/acompanhe
})


router.get("/area-contratante/orcamentos-bru", (req, res) => {
    res.render("areaContratante", {view: "orcamentoUsuario"});
    // ...5620/usuario/area-contratante/orcamento-bru
})


router.get("/area-contratante/historico-bru", (req, res) => {
    res.render("areaContratante", {view: "historicoAreaContratante"});
    // ...5620/usuario/area-contratante-bru/historico
})


router.get("/area-contratante/chat", (req, res) => {
    res.render("areaContratante", {view: "chat"});
    // ...5620/usuario/area-contratante/chat
})


router.get("/area-contratante/favoritos", (req, res) => {
    res.render("areaContratante", {view: "favoritosAreaContratante"});
    // ...5620/usuario/area-contratante/favoritos
})


router.get("/area-contratante/cupons", (req, res) => {
    res.render("areaContratante", {view: "cuponsAreaContratante"});
    // ...5620/usuario/area-contratante/cupons
})



router.get("/area-contratante/pagamentos-bru", (req, res) => {
    res.render("areaContratante", {view: "pagamentos"});
    // ...5620/usuario/area-contratante/pagamentos-bru
})

router.get("/area-prestador", (req, res) => {
    res.send("Área Usuario Prestador");
})

module.exports = router;