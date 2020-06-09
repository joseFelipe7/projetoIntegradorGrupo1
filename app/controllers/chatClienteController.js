const { Op } = require('sequelize');
const { check, validationResult, body} = require('express-validator');

const { Chat, Mensagem, Prestador, Cliente } = require('../models/index');

module.exports = {
    //exibe pagina de login
    index: async (req, res) => {
        let loggado = req.session.cliente;

        //clientes_id == cliente

        let infoMsg = await Chat.findAll({
            //traz os dados do cliente com mesmo id do cliente loggado
            where: {
                clientes_id:{ 
                    [Op.eq]: loggado.id,
                }
            },
            //inclui os dados que estão na tabela Clientes e Prestadores
            include: [ 
                {
                    model: Cliente,
                    as: 'cliente'
                },
                {
                    model: Prestador,
                    as: 'prestador'
                },
                {
                    model: Mensagem,
                    as: 'mensagens'
                },
            ]
        })

        let previewMgs = []

        infoMsg.forEach(item => {
            previewMgs.push({
                nomePrestador : item.prestador.nome,
                avatarPrestador: item.prestador.avatar,
                statusPrestador : "online",
                ultimaMsg : item.mensagens.mensagem,
                dataMsg : item.mensagens.datamensagem,
                notificacoes:1
            });
        });

        /* teste
        infoMsg.forEach(item => {
            console.log(item.dataValues)
            //dataValues contém as colunas da tabela selecionada

            console.log(item.cliente.nome)
            console.log(item.prestador.nome)
        });
        */

        res.render("areaContratante", {view: "chatCliente", loggado: req.session.cliente, previewMgs});
    }
}