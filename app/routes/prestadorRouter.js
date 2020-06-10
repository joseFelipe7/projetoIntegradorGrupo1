const express = require("express");
const authCliente = require('../middlewares/authCliente')
const router = express.Router();
const { check, validationResult, body} = require('express-validator');

const singlePrestadorController = require("../controllers/singlePrestadorController")
const validacoesPedido = require("../middlewares/validacoesPedido")

router.get("/single/:id_prestador", singlePrestadorController.index);
router.post("/single", validacoesPedido, singlePrestadorController.store);

router.get("/lista", authCliente, (req, res) => {
    res.render("listaPrestadores", {loggado: req.session.cliente});
})

module.exports = router;