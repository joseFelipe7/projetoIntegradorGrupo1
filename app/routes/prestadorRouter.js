const express = require("express");
const authCliente = require('../middlewares/authCliente');
const router = express.Router();
const { check, validationResult, body} = require('express-validator');

const listarPrestadoresController = require('../controllers/listarPrestadoresController');
const singlePrestadorController = require("../controllers/singlePrestadorController")
const validacoesPedido = require("../middlewares/validacoesPedido")
const homeController = require("../controllers/homeController")


router.get("/single/:id_prestador", singlePrestadorController.index);
router.post("/single", validacoesPedido, singlePrestadorController.store);

router.get("/lista", listarPrestadoresController.index);

router.get("/lista/:pesquisa", listarPrestadoresController.showPesquisa);
router.get("/lista/categoria/:categoria_id", listarPrestadoresController.showCategoria);
router.get("/lista/:pesquisa/:avaliacao", listarPrestadoresController.showPesquisaAvaliacao);
router.get("/lista/categoria/:categoria_id/:avaliacao", listarPrestadoresController.showCategoriaAvaliacao);
router.get("/lista/search", homeController.search);

module.exports = router;