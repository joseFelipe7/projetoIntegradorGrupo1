const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {Habilidades, Prestador} = require('../models')

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
    cards: async (req, res) => {
        const prestador = await Prestador.findAll({
            include:{
                model: Habilidades
            }
        })
        return  res.render("home",{prestador});

    }
}

module.exports = PesquisaPrestadorHomeController

