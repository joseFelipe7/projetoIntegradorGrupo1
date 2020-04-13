const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
    res.send("Login selecione");
})

router.get("/contratante", (req, res) => {
    res.send("Login contratante");
})

router.get("/prestador", (req, res) => {
    res.send("Login prestador");
})

router.get("/admin", (req, res) => {
    res.render("loginAdmin");
})

module.exports = router;