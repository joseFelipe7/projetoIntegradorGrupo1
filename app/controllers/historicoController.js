const {Cliente, Pedidos} = require("../models")

const HistoricoController = {
    index: async (req, res) => {
        const {id} = req.params

        const cliente = await Cliente.findByPk(id)

        res.render("areaContratante", {view: "historicoAreaContratante", loggado: req.session.cliente, data:{cliente}});
    
    }
}
module.exports = HistoricoController



