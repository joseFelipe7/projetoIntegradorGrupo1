const express = require("express");
const authCliente = require('../middlewares/authCliente');
const router = express.Router();

const listarPrestadoresController = require('../controllers/listarPrestadoresController');

router.get("/single", (req, res) => {
    res.render("singleprestador");
})

router.get("/lista", authCliente, listarPrestadoresController.index);


module.exports = router;