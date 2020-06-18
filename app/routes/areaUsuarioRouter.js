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


//rotas contratante - meus-dados
router.get("/area-contratante/meus-dados/:id", authCliente, clienteController.index);
//router.put("/area-contratante/meus-dados/:id", authCliente, clienteController.update);

//rotas contratante - meus-dados-endereços
router.get("/area-contratante/meus-dados/:fk_cliente/endereco", authCliente, clientes_enderecoController.index);
router.post("/area-contratante/meus-dados/:fk_cliente/endereco", authCliente, clientes_enderecoController.store);
//router.put("/area-contratante/meus-dados/:fk_cliente/endereco", authCliente, clientes_enderecoController.update);

//rotas contratante - meus-dados-contatos
router.get("/area-contratante/meus-dados/:fk_cliente/contatos", authCliente, contatosController.index);
router.post("/area-contratante/meus-dados/:fk_cliente/contatos", authCliente, contatosController.store);
//router.put("/area-contratante/meus-dados/:fk_cliente/contatos", authCliente, contatosController.update);


router.get("/area-contratante/pedidos", authCliente, pedidosClienteController.index)


router.get("/area-contratante/acompanhe", authCliente, (req, res) => {
    res.render("areaContratante", {view: "acompanheAreaContratante", loggado: req.session.cliente, data:{}});
    // ...5620/usuario/area-contratante/acompanhe
})


router.get("/area-contratante/orcamentos-bru", authCliente, orcamentosController.index)


router.get("/area-contratante/historico-bru", authCliente, historicoController.index)


router.get("/area-contratante/chat", authCliente, chatClienteController.index) 
// ...5620/usuario/area-contratante/chat 


router.get("/area-contratante/favoritos", authCliente, (req, res) => {
    res.render("areaContratante", {view: "favoritosAreaContratante", loggado: req.session.cliente});
    // ...5620/usuario/area-contratante/favoritos
})


router.get("/area-contratante/cupons", authCliente, cuponsController.index)
    // ...5620/usuario/area-contratante/cupons


router.get("/area-contratante/pagamentos-bru", authCliente, (req, res) => {
    res.render("areaContratante", {view: "pagamentos", loggado: req.session.cliente});
    // ...5620/usuario/area-contratante/pagamentos-bru
})


// rotas prestador
router.get("/area-prestador/cadastro-servicos", authPrestador, cadastroServicosController.index)

router.get("/area-prestador/pedidos", authPrestador,(req, res) => {
    res.render("areaPrestador", {view: "pedidosAreaPrestador", loggado: req.session.prestador});
})
//rotas meus-dados
router.get("/area-prestador/meusDados/:id", authPrestador, prestadorController.index);
router.post("/area-prestador/meusDados/:id", authPrestador, prestadorController.store);

//rotas meus-dados-endereço
router.post("/area-prestador/meusDados/:fk_cliente/endereco", authPrestador, prestador_enderecoController.store);

//rotas meus-dados-contatos
router.post("/area-prestador/meusDados/:fk_cliente/contatos", authPrestador, prestador_contatosController.store);

//rotas cadastro profissão
router.post("/area-prestador/meusDados/:fk_cliente/profissao", authPrestador, habilidadesController.store);
//router.put("/area-prestador/meusDados/:fk_cliente/profissao", authPrestador, habilidadesController.update);


router.get("/area-prestador/requisicoes", authPrestador,(req, res) => {
    res.render("areaPrestador", {view: "requisicoes-prestador", loggado: req.session.prestador});
})
router.get("/area-prestador/chat", authPrestador, chatPrestadorController.index) 


module.exports = router;