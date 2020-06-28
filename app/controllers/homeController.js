const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {Habilidades, Prestador, Avaliacoes, Prestador_endereco} = require('../models')

const PesquisaPrestadorHomeController = {
    search: async (req, res) => {
        const {key} = req.query
        const pesquisa = await Habilidades.findAll({
            where:{
                titulo:{
                    [Op.like]:`%${key}%`
                }
            }
        })
        return res.render('/prestador/lista', {pesquisa})
    },
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
        console.log(prestadores)
        return  res.render("home",{prestadores, idCategoria: [], avaliacaoPesquisa: []});
    

    }
}

module.exports = PesquisaPrestadorHomeController

