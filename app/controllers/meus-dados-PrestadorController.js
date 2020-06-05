const path = require('path');
const { Prestador } = require('../models')


const meusDadosPrestadorController = {

        editorForm: async (req, res) => {
        const {id} = req.params

        const prestador = await Prestador.findByPk(id)
        return res.render("areaPrestador", {view: "meusDados-prestador", loggado: req.session.prestador, prestador});
         
    }

    
}
module.exports = meusDadosPrestadorController;

