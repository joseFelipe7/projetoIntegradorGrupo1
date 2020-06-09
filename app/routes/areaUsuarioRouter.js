const express = require("express");
const authCliente = require('../middlewares/authCliente')
const authPrestador = require('../middlewares/authPrestador')
const clienteController = require("../controllers/clienteController")
const clientes_enderecoController = require("../controllers/clientes_EnderecoController")
const contatosController = require("../controllers/contatosController")
const prestadorController = require('../controllers/prestadorController')
const chatClienteController = require('../controllers/chatClienteController')


let router = express.Router();

// rotas contratante
router.get("/area-contratante/meus-dados/:id", authCliente, clienteController.index);
//router.put("/area-contratante/meus-dados/:id", authCliente, clienteController.update);

router.get("/area-contratante/meus-dados/:fk_cliente/endereco", authCliente, clientes_enderecoController.index);
router.post("/area-contratante/meus-dados/:fk_cliente/endereco", authCliente, clientes_enderecoController.store);
//router.put("/area-contratante/meus-dados/:fk_cliente/endereco", authCliente, clientes_enderecoController.update);


router.get("/area-contratante/meus-dados/:fk_cliente/contato", authCliente, contatosController.index);
router.post("/area-contratante/meus-dados/:fk_cliente/contato", authCliente, contatosController.store);
//router.put("/area-contratante/meus-dados/:fk_cliente/contatos", authCliente, contatosController.update);


    // ...5620/usuario/area-contratante/meus-dados


router.get("/area-contratante/pedidos", authCliente, (req, res) => {
    res.render("areaContratante", {view: "pedidosAreaContratante", loggado: req.session.cliente});
    // ...5620/usuario/area-contratante/pedidos
})


router.get("/area-contratante/acompanhe", authCliente, (req, res) => {
    res.render("areaContratante", {view: "acompanheAreaContratante", loggado: req.session.cliente});
    // ...5620/usuario/area-contratante/acompanhe
})


router.get("/area-contratante/orcamentos-bru", authCliente, (req, res) => {
    res.render("areaContratante", {view: "orcamentoUsuario", loggado: req.session.cliente});
    // ...5620/usuario/area-contratante/orcamento-bru
})


router.get("/area-contratante/historico-bru", authCliente, (req, res) => {
    res.render("areaContratante", {view: "historicoAreaContratante", loggado: req.session.cliente});
    // ...5620/usuario/area-contratante-bru/historico
})


router.get("/area-contratante/chat", authCliente, chatClienteController.index) 
// ...5620/usuario/area-contratante/chat 


router.get("/area-contratante/favoritos", authCliente, (req, res) => {
    res.render("areaContratante", {view: "favoritosAreaContratante", loggado: req.session.cliente});
    // ...5620/usuario/area-contratante/favoritos
})


router.get("/area-contratante/cupons", authCliente, (req, res) => {
    res.render("areaContratante", {view: "cuponsAreaContratante", loggado: req.session.cliente});
    // ...5620/usuario/area-contratante/cupons
})

router.get("/area-contratante/pagamentos-bru", authCliente, (req, res) => {
    res.render("areaContratante", {view: "pagamentos", loggado: req.session.cliente});
    // ...5620/usuario/area-contratante/pagamentos-bru
})


// rotas prestador
router.get("/area-prestador/cadastro-servicos", authPrestador,(req, res) => {
    res.render("areaPrestador", {view: "cadastroServiçosPrestador", loggado: req.session.prestador});
})

router.get("/area-prestador/pedidos", authPrestador,(req, res) => {
    res.render("areaPrestador", {view: "pedidosAreaPrestador", loggado: req.session.prestador});
})

router.get("/area-prestador/meusDados/:id", authPrestador, prestadorController.index);

router.get("/area-prestador/requisicoes", authPrestador,(req, res) => {
    res.render("areaPrestador", {view: "requisicoes-prestador", loggado: req.session.prestador});
})



module.exports = router;