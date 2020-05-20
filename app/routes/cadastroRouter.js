const express = require("express");
const upload = require("../../config/upload")
const prestadorController = require("../../controllers/prestadorController");

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
router.get("/area-prestador/cadastrar", prestadorController.viewFormCadastro);
router.post("/area-prestador/cadastrar", upload.any(), prestadorController.cadastrar)

module.exports = router;