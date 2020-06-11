const express = require("express");
const authCliente = require('../middlewares/authCliente')
const authPrestador = require('../middlewares/authPrestador')
const clienteController = require("../controllers/clienteController")
const clientes_enderecoController = require("../controllers/clientes_EnderecoController")
const contatosController = require("../controllers/contatosController")
const prestadorController = require('../controllers/prestadorController')
const chatClienteController = require('../controllers/chatClienteController')
const chatPrestadorController = require("../controllers/chatPrestadorController")
const prestador_enderecoController = require("../controllers/prestador_enderecoController")
const prestador_contatosController = require("../controllers/prestador_contatosController")
const habilidadesController = require("../controllers/habilidadesController")
const cadastroServicosController = require("../controllers/cadastroServicosController")
const cuponsController = require('../controllers/cuponsController')
const historicoController = require('../controllers/historicoController')
const orcamentosController = require('../controllers/orcamentosController')
const pedidosClienteController = require("../controllers/pedidosCliente")

let router = express.Router();

// rotas contratante
router.get("/area-contratante/meus-dados/:id", authCliente, clienteController.index);
//router.put("/area-contratante/meus-dados/:id", authCliente, clienteController.update);

router.get("/area-contratante/meus-dados/endereco/:id", authCliente, clientes_enderecoController.index);
router.post("/area-contratante/meus-dados/endereco/:id", authCliente, clientes_enderecoController.store);
//router.put("/area-contratante/meus-dados/:fk_cliente/endereco", authCliente, clientes_enderecoController.update);


router.get("/area-contratante/meus-dados/contato/:id", authCliente, contatosController.index);
router.post("/area-contratante/meus-dados/contato/:id", authCliente, contatosController.store);
//router.put("/area-contratante/meus-dados/:fk_cliente/contatos", authCliente, contatosController.update);


    // ...5620/usuario/area-contratante/meus-dados


router.get("/area-contratante/pedidos", authCliente, pedidosClienteController.index)


router.get("/area-contratante/acompanhe", authCliente, (req, res) => {
    res.render("areaContratante", {view: "acompanheAreaContratante", loggado: req.session.cliente});
    // ...5620/usuario/area-contratante/acompanhe
})


router.get("/area-contratante/orcamentos-bru/:id", authCliente, orcamentosController.index)


router.get("/area-contratante/historico-bru/:id", authCliente, historicoController.index)


router.get("/area-contratante/chat", authCliente, chatClienteController.index) 
// ...5620/usuario/area-contratante/chat 


router.get("/area-contratante/favoritos", authCliente, (req, res) => {
    res.render("areaContratante", {view: "favoritosAreaContratante", loggado: req.session.cliente});
    // ...5620/usuario/area-contratante/favoritos
})


router.get("/area-contratante/cupons/:id", authCliente, cuponsController.index)
    // ...5620/usuario/area-contratante/cupons


router.get("/area-contratante/pagamentos-bru", authCliente, (req, res) => {
    res.render("areaContratante", {view: "pagamentos", loggado: req.session.cliente});
    // ...5620/usuario/area-contratante/pagamentos-bru
})


// rotas prestador
router.get("/area-prestador/cadastro-servicos/:id", authPrestador, cadastroServicosController.index)

router.get("/area-prestador/pedidos", authPrestador,(req, res) => {
    res.render("areaPrestador", {view: "pedidosAreaPrestador", loggado: req.session.prestador});
})

router.get("/area-prestador/meusDados/:id", authPrestador, prestadorController.index);
router.post("/area-prestador/meusDados/endereco/:id", authPrestador, prestadorController.store);

router.get("/area-prestador/meusDados/:id", authPrestador, prestadorController.index);
router.post("/area-prestador/meusDados/endereco/:id", authPrestador, prestador_enderecoController.store);
router.post("/area-prestador/meusDados/contatos/:id", authPrestador, prestador_contatosController.store);
router.post("/area-prestador/meusDados/profissao/:id", authPrestador, habilidadesController.store);


router.get("/area-prestador/requisicoes", authPrestador,(req, res) => {
    res.render("areaPrestador", {view: "requisicoes-prestador", loggado: req.session.prestador});
})
router.get("/area-prestador/chat", authPrestador, chatPrestadorController.index) 


module.exports = router;