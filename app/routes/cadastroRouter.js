const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
    res.render("cadastroSelecione");
})

router.get("/contratante", (req, res) => {
    res.render("cadastroContratante");
})

router.get("/prestador", (req, res) => {
    res.render("cadastroPrestador");
})

module.exports = router;