const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
})

router.get("/sobre", (req, res) => {
    res.send("sobre");
})

router.get("/contato", (req, res) => {
    res.render("contato");
})

router.get("/como-funciona", (req, res) => {
    res.render("comoFunciona");
})

module.exports = router;