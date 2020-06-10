const {Prestador, Contatos_prestador} = require('../models')
const prestador_contatosController = {
    index: async (req, res) => {
        const contatos = await Contatos_prestador.findAll({
            include: {
                model: Prestador,
                as:Prestador,
                required:true
            }
        })
        return res.send("prestador", {contatos})
    }
}
module.exports = prestador_contatosController