const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
    res.render("loginSelecione");
})

router.get("/contratante", (req, res) => {
    res.send("loginContratante");
})

router.get("/prestador", (req, res) => {
    res.send("loginPrestador");
})

router.get("/admin", (req, res) => {
    res.render("loginAdmin");
})

module.exports = router;