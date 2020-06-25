const {Cliente} = require("../models")

const OrcamentosController = {
    index: async (req, res) => {
        const {id} = req.params

        const cliente = await Cliente.findByPk(id)

        res.render("areaContratante", {view: "orcamentoCliente", loggado: req.session.cliente, data:{cliente}});
    
    },
    store: async (req, res) => {
        const {id} = req.params

        const cliente = await Cliente.findByPk(id)

        res.redirect("areaContratante", {view: "orcamentoCliente", loggado: req.session.cliente, data:{cliente}});
    
    },
}
module.exports = OrcamentosController
