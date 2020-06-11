const {Prestador} = require("../models")

const CadastroServicosController = {
    index: async (req, res) => {
        const {id} = req.params

        const prestador = await Prestador.findByPk(id)

        res.render("areaPrestador", {view: "cadastroServiçosPrestador", loggado: req.session.prestador, data:{prestador}});
    
    }
}
module.exports = CadastroServicosController