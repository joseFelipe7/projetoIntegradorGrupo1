const express = require("express");
const { check, validationResult, body} = require('express-validator');

const loginClienteController = require('../controllers/loginClienteController');
const loginPrestadorController = require('../controllers/loginPrestadorController');
const recuperarSenhaClienteController = require('../controllers/recuperarSenhaClienteController')
const recuperarSenhaPrestadorController = require('../controllers/recuperarSenhaPrestadorController')
const validacoesLogin = require('../middlewares/validacoesLogin');

let router = express.Router();

router.get("/", (req, res) => {
    res.render("loginSelecione");
})

router.get("/contratante", loginClienteController.create);
router.post("/contratante", validacoesLogin, loginClienteController.store);

//envia email do modal...
router.post("/contratante/recuperar-senha", recuperarSenhaClienteController.enviarEmail);
//exibe form para alterar senha...
router.get("/contratante/redefinir-senha/:token", recuperarSenhaClienteController.redefinirSenha);
//envia nova senha...
router.put("/contratante/redefinir-senha", recuperarSenhaClienteController.salvarNovaSenha);


router.get("/prestador", loginPrestadorController.create);
router.post("/prestador", loginPrestadorController.store);

//envia email do modal...
router.post("/prestador/recuperar-senha", recuperarSenhaPrestadorController.enviarEmail);
//exibe form para alterar senha...
router.get("/prestador/redefinir-senha/:token", recuperarSenhaPrestadorController.redefinirSenha);
//envia nova senha...
router.put("/prestador/redefinir-senha", recuperarSenhaPrestadorController.salvarNovaSenha);

router.get("/admin", (req, res) => {
    res.render("loginAdmin");
})

module.exports = router;