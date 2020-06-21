const express = require("express");
const prestadorController = require("../controllers/prestadorController");
const registroClienteController = require("../controllers/registroClienteController")
let router = express.Router();

router.get("/", (req, res) => {
    res.render("cadastroSelecione");
})

router.get("/contratante", registroClienteController.create)
router.post("/contratante", registroClienteController.store)

//router.get("/prestador", (req, res) => {
  //  res.render("cadastroPrestador");
//})
//router.get("/area-prestador/cadastrar", prestadorController.viewFormCadastro);
//router.post("/area-prestador/cadastrar", upload.any(), prestadorController.cadastrar)

router.get("/prestador", prestadorController.create);
router.post("/prestador", prestadorController.store)

module.exports = router;