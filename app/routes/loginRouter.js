const express = require("express");

const loginClienteController = require('../controllers/loginClienteController');

let router = express.Router();

router.get("/", (req, res) => {
    res.render("loginSelecione");
})

router.get("/contratante", loginClienteController.create);
router.post("/contratante", loginClienteController.store);

router.get("/prestador", (req, res) => {
    res.render("loginPrestador");
})

router.get("/admin", (req, res) => {
    res.render("loginAdmin");
})

module.exports = router;