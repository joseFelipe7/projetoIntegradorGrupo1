const express = require("express");
const { check, validationResult, body} = require('express-validator');

const loginClienteController = require('../controllers/loginClienteController');
const loginPrestadorController = require('../controllers/loginPrestadorController');
const validacoesLogin = require('../middlewares/validacoesLogin');

let router = express.Router();

router.get("/", (req, res) => {
    res.render("loginSelecione");
})

router.get("/contratante", loginClienteController.create);
router.post("/contratante", validacoesLogin, loginClienteController.store);

router.get("/prestador", loginPrestadorController.create);
router.post("/prestador", loginPrestadorController.store);

router.get("/admin", (req, res) => {
    res.render("loginAdmin");
})

module.exports = router;