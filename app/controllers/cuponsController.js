const {Cliente} = require("../models")

const CuponsController = {
    index: async (req, res) => {
        const {id} = req.params

        const cliente = await Cliente.findByPk(id)

        res.render("areaContratante", {view: "cuponsAreaContratante", loggado: req.session.cliente, data:{cliente}});
    
    }
}
module.exports = CuponsController
