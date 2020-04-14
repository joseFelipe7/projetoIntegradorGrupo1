const express = require("express");

let router = express.Router();

router.get("/area-contratante/meus-dados", (req, res) => {
    // pagina para testar o include cards
    res.render("areaContratante", {view: "meusDadosContratante"});
    // res.send("Área Usuário contratante");
})
// ...8080/usuario/area-contratante/meus-dados

router.get("/area-contratante/pedidos", (req, res) => {
    res.render("areaContratante", {view: "pedidosAreaContratante"});
})
// ...8080/usuario/area-contratante/pedidos

router.get("/area-contratante/acompanhe", (req, res) => {
    res.render("areaContratante", {view: "acompanheAreaContratante"});
})
// ...8080/usuario/area-contratante/acompanhe

router.get("/area-usuario/acompanhe", (req, res) => {
    res.render("areaUsuario", {view: "acompanheAreaUsuario"});
})
// ...8080/usuario/area-contratante/acompanhe

router.get("/area-contratante/orcamentos", (req, res) => {
    res.render("areaContratante", {view: "orcamentosAreaContratante"});
})
// ...8080/usuario/area-contratante/orcamento

router.get("/area-contratante/historico", (req, res) => {
    res.render("areaContratante", {view: "historicoAreaContratante"});
})
// ...8080/usuario/area-contratante/historico

router.get("/area-contratante/chat", (req, res) => {
    res.render("areaContratante", {view: "chat"});
})
// ...8080/usuario/area-contratante/historico

router.get("/area-contratante/favoritos", (req, res) => {
    res.render("areaContratante", {view: "favoritosAreaContratante"});
})
// ...8080/usuario/area-contratante/favoritos

router.get("/area-contratante/cupons", (req, res) => {
    res.render("areaContratante", {view: "cuponsAreaContratante"});
})
// ...8080/usuario/area-contratante/cupons

router.get("/area-contratante/orcamentoUsuario-Bruna", (req, res) => {
    res.render("areaContratante", {view: "orcamentoUsuario"});
})
// ...8080/usuario/area-contratante/orcamentoUsuario-Bruna

router.get("/area-prestador", (req, res) => {
    res.send("Área Usuario Prestador");
})

module.exports = router;