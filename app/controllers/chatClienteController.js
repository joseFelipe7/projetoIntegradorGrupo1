/*
const { Op } = require('sequelize');
const { check, validationResult, body} = require('express-validator');

const { Chat, Mensagem, Prestador, Cliente } = require('../models/index');

module.exports = {
    //exibe pagina de login
    index: async (req, res) => {
        let loggado = req.session.cliente;

        loggado.id == clientes_id //cliente

        let cliente = await Chat.findOne({
            where: {
                cliente:{ 
                    [Op.eq]: loggado.id,
                }
            }
        })

        let prestadores = await Chat.findAll({
            where: {
                email:{ 
                    [Op.eq]: email,
                }
            }
        })

        res.render("loginContratante");
    },

    //logga
    store: async (req, res) => {
        
    }
}
*/