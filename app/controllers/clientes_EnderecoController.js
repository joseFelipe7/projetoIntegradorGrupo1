const Sequelize = require('sequelize')
const config = require('../../config/database')
const {Clientes_endereco, Cliente} = require('../models')
const Clientes_EnderecoController = { 

    index: async (req, res) => {
        const clientes_endereco = await Clientes_endereco.findAll({
            include:{
             model: Cliente,
             as: 'cliente',
             required: true
            }

        })
        return res.send("enderecos dos clientes cadastrados")
    },
    store: async (req, res) => {
        
    }

}
module.exports = Clientes_EnderecoController