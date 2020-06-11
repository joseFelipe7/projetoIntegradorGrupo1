const express = require("express");
const authCliente = require('../middlewares/authCliente');
const router = express.Router();
const { check, validationResult, body} = require('express-validator');

const listarPrestadoresController = require('../controllers/listarPrestadoresController');
const singlePrestadorController = require("../controllers/singlePrestadorController")
const validacoesPedido = require("../middlewares/validacoesPedido")


router.get("/single/:id_prestador", singlePrestadorController.index);
router.post("/single", validacoesPedido, singlePrestadorController.store);

router.get("/lista", listarPrestadoresController.index);


module.exports = router;