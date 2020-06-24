const express = require("express");
const { check, validationResult, body} = require('express-validator');

const chamadosController = require("../controllers/chamadosController");
const validacoesChamado = require('../middlewares/validacoesChamado');
const homeController = require("../controllers/homeController")
const sobreNosController = require("../controllers/sobreNosController")

let router = express.Router();
router.get("/", homeController.cards)


router.get("/sobre", sobreNosController.show)

//exibe form de chamado
router.get("/contato", chamadosController.create);
//envia informaçõesdo chamado
router.post("/contato", validacoesChamado, chamadosController.store);


router.get("/como-funciona", (req, res) => {
    res.render("comoFunciona");
})

router.get("/", homeController.cards)

module.exports = router;