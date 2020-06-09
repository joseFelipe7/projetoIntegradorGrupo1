const {Prestador, Prestador_endereco} = require('../models')
const prestador_enderecoController = {
    index: async (req, res) => {
        const enderecos = await Prestador_endereco.findAll({
            include: {
                model: Prestador,
                as:prestador,
                required:true
            }
        })
        return res.send("prestador", {enderecos})
    }
}
module.exports = prestador_enderecoController