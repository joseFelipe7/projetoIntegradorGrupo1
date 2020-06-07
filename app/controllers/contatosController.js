const Sequelize = require('sequelize')
const config = require('../../config/database')
const {Contatos, Cliente} = require('../models')
const ContatosController = { 

    index: async (req, res) => {
        const contatos = await Contatos.findAll({
            include:{
             model: Cliente,
             as: 'cliente',
             required: true
            }

        })
        return res.send("contatos dos clientes cadastrados")
    }

}
module.exports = Contatos