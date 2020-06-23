const express = require("express");
const { check, validationResult, body} = require('express-validator');

const chamadosController = require("../controllers/chamadosController");
const validacoesChamado = require('../middlewares/validacoesChamado');
const homeController = require("../controllers/homeController")

let router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
})

router.get("/sobre", (req, res) => {
    res.send("sobre");
})

/*
router.get("/contato", (req, res) => {
    res.render("contato");
})
*/
//exibe form de chamado
router.get("/contato", chamadosController.create);
//envia informaçõesdo chamado
router.post("/contato", validacoesChamado, chamadosController.store);

router.get("/como-funciona", (req, res) => {
    res.render("comoFunciona");
})

router.get("/Card-prestador-home", homeController.cards)

module.exports = router;