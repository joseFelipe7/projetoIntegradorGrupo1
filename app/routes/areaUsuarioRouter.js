const express = require("express");
const authCliente = require('../middlewares/authCliente')
const authPrestador = require('../middlewares/authPrestador')

let router = express.Router();

// rotas contratante
router.get("/area-contratante/meus-dados", authCliente, (req, res) => {
    res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente});
    // ...5620/usuario/area-contratante/meus-dados
})


router.get("/area-contratante/pedidos", authCliente, (req, res) => {
    res.render("areaContratante", {view: "pedidosAreaContratante"});
    // ...5620/usuario/area-contratante/pedidos
})


router.get("/area-contratante/acompanhe", authCliente, (req, res) => {
    res.render("areaContratante", {view: "acompanheAreaContratante"});
    // ...5620/usuario/area-contratante/acompanhe
})


router.get("/area-contratante/orcamentos-bru", authCliente, (req, res) => {
    res.render("areaContratante", {view: "orcamentoUsuario"});
    // ...5620/usuario/area-contratante/orcamento-bru
})


router.get("/area-contratante/historico-bru", authCliente, (req, res) => {
    res.render("areaContratante", {view: "historicoAreaContratante"});
    // ...5620/usuario/area-contratante-bru/historico
})


router.get("/area-contratante/chat", authCliente, (req, res) => {
    res.render("areaContratante", {view: "chat"});
    // ...5620/usuario/area-contratante/chat
})


router.get("/area-contratante/favoritos", authCliente, (req, res) => {
    res.render("areaContratante", {view: "favoritosAreaContratante"});
    // ...5620/usuario/area-contratante/favoritos
})


router.get("/area-contratante/cupons", authCliente, (req, res) => {
    res.render("areaContratante", {view: "cuponsAreaContratante"});
    // ...5620/usuario/area-contratante/cupons
})

router.get("/area-contratante/pagamentos-bru", authCliente, (req, res) => {
    res.render("areaContratante", {view: "pagamentos"});
    // ...5620/usuario/area-contratante/pagamentos-bru
})


// rotas prestador
router.get("/area-prestador/cadastro-servicos", authPrestador,(req, res) => {
    res.render("areaPrestador", {view: "cadastroServiçosPrestador"});
})

router.get("/area-prestador/pedidos", authPrestador,(req, res) => {
    res.render("areaPrestador", {view: "pedidosAreaPrestador"});
})

router.get("/area-prestador/meusDados", authPrestador,(req, res) => {
    res.render("areaPrestador", {view: "meusDados-prestador"});
})

router.get("/area-prestador/requisicoes", authPrestador,(req, res) => {
    res.render("areaPrestador", {view: "requisicoes-prestador"});
})



module.exports = router;