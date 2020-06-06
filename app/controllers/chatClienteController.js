/*
const { Op } = require('sequelize');
const { check, validationResult, body} = require('express-validator');

const { Chat, Mensagem, Prestador, Cliente } = require('../models/index');

module.exports = {
    //exibe pagina de login
    index: async (req, res) => {
        let loggado = req.session.cliente;

        //clientes_id == cliente

        let prestadores = await Chat.findAll({
            where: {
                cliente:{ 
                    [Op.eq]: loggado.id,
                }
            }
        })
        console.log(prestadores.dataValues)
        
        produtos.forEach(item => {
            console.log(item.dataValues)
            //dataValues contém as colunas da tabela selecionada
            console.log(item.nome)
            //também é possivel acessar os atributos separados
        });

        res.render("chatCliente");
    }
}
*/