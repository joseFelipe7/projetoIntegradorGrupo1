const {Cliente} = require("../models")

const orcamentosPrestadorController = {
    index: async (req, res) => {
        let loggado = req.session.cliente;
        
        res.render("areaPrestador", {view: "cadastroOrcamento", loggado: req.session.prestador,data:{}});
    },
    store: async (req, res) => {
        res.render("areaPrestador", {view: "cadastroOrcamento", loggado: req.session.prestador,data:{}});
    },
}
module.exports = orcamentosPrestadorController;