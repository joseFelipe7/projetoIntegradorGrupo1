const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {Habilidades, Prestador, Avaliacoes, Prestador_endereco} = require('../models')

const homeController = {
    index: async (req, res) => {
        const prestadores = await Prestador.findAll({
            include: [{
                model: Habilidades,
                required: true
            }, {
                model: Avaliacoes,
                required:true,
            }, {
                model: Prestador_endereco,
                required: true,
                as: 'prestadores_enderecos'
            }]
        })
        return  res.render("home",{loggado: req.session.cliente,prestadores, idCategoria: [], avaliacaoPesquisa: []});
    }
}

module.exports = homeController;

