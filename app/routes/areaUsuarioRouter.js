const express = require("express");

let router = express.Router();

router.get("/area-contratante", (req, res) => {
    res.send("Área Usuário contratante");
})

router.get("/area-prestador", (req, res) => {
    res.send("Área Usuario Prestador");
})

module.exports = router;