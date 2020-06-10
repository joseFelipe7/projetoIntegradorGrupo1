const express = require("express");
const authCliente = require('../middlewares/authCliente')
const router = express.Router();

const singlePrestadorController = require("../controllers/singlePrestadorController")


router.get("/single/:id_prestador", singlePrestadorController.index);
router.post("/single", singlePrestadorController.store);

router.get("/lista", authCliente, (req, res) => {
    res.render("listaPrestadores", {loggado: req.session.cliente});
})

module.exports = router;