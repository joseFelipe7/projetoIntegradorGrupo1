const express = require("express");

const loginClienteController = require('../controllers/loginClienteController');
const loginPrestadorController = require('../controllers/loginPrestadorController');

let router = express.Router();

router.get("/", (req, res) => {
    res.render("loginSelecione");
})

router.get("/contratante", loginClienteController.create);
router.post("/contratante", loginClienteController.store);

router.get("/prestador", loginPrestadorController.create);
router.post("/prestador", loginPrestadorController.store);

router.get("/admin", (req, res) => {
    res.render("loginAdmin");
})

module.exports = router;