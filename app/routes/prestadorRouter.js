const express = require("express");
const authCliente = require('../middlewares/authCliente')
const router = express.Router();


router.get("/single", (req, res) => {
    res.render("singleprestador");
})

router.get("/lista", authCliente, (req, res) => {
    res.render("listaPrestadores", {loggado: req.session.cliente});
})

module.exports = router;