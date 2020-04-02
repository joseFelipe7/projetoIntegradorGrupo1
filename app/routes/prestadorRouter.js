const express = require("express");

let router = express.Router();

router.get("/single", (req, res) => {
    res.send("Single Prestador");
})

router.get("/lista", (req, res) => {
    res.send("Lista de Prestadores");
})

module.exports = router;