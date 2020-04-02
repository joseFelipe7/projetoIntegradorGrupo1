const express = require("express");

let router = express.Router();

router.get("/contratante", (req, res) => {
    res.send("cadastro do contratante");
})

router.get("/prestador", (req, res) => {
    res.send("cadastro do prestador");
})

module.exports = router;