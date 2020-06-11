const {Cliente} = require("../models")

const OrcamentosController = {
    index: async (req, res) => {
        const {id} = req.params

        const cliente = await Cliente.findByPk(id)

        res.render("areaContratante", {view: "orcamentoUsuario", loggado: req.session.cliente, data:{cliente}});
    
    }
}
module.exports = OrcamentosController
