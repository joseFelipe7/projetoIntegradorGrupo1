const Sequelize = require('sequelize')
const config = require('../../config/database')
const {Clientes_endereco, Cliente} = require('../models')
const ClienteController = { 

    /*index: async (req, res) => {
        const cliente = await Clientes_endereco.findAll()
        return res.send("clientes", {cliente})
           

        },*/
        viewEditorForm: async (req,res) => {
            const {id} = req.params
    
            const cliente = await Cliente.findByPk(id);
            return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, cliente})
        },
        show: async (req, res) => {
            const {id} = req.params;
            const cliente = await Cliente.findOne({
                where:{
                    id
                },
                include:{
                    model:Clientes_endereco,
                    as: 'cliente_endereco',
                    required:true
                }
            })
            return res.send("clientes", {cliente})
        }
        //chamou show products em categoria
    }


module.exports = ClienteController 