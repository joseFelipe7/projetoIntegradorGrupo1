const { Op } = require('sequelize');
const { check, validationResult, body} = require('express-validator');
const moment = require("moment");
moment.locale("pt-BR");        

const { Pedido, HistoricoPedidos } = require('../models/index');

module.exports = {
    //exibe pedidos
    index: async (req, res) => {
        let loggado = req.session.cliente;

        let pedidos = await Pedido.findAll({
            //traz os pedidos do cliente loggado
            where: {
                clientes_id:{ 
                    [Op.eq]: loggado.id,
                } 
            },
            include: [
                {
                    model: HistoricoPedidos,
                    as: 'historicos',
                }
            ],
            //ordena pela ordem do campo, de forma decrescente
            order: [["data_solicitacao","DESC"]],
        })

        console.log(pedidos)

        pedidos.forEach(pedido => {
            //array com os dados de PEDIDOS
            console.log(pedido.dataValues)
            //dataValues contém as colunas da tabela selecionada
            console.log(pedido.clientes_id)

            //array com os dados da HISTORICO
            pedido.historicos.forEach(historico => {
                console.log(historico.status_)
            })
        });

        /*

        let previewMgs = []

        infoMsg.forEach(item => {
            previewMgs.push({
                nomePrestador : item.prestador.nome,
                avatarPrestador: item.prestador.avatar,
                statusPrestador : "online",
                //msg da posição 0 do array com as msg em ordem crescente...
                ultimaMsg : item.mensagens[0].mensagem,
                dataMsg : item.mensagens[0].datamensagem,
                notificacoes:1
            });
        });
        */


        res.render("areaContratante", {view: "pedidosAreaContratante", loggado: req.session.cliente, data:{pedidos, moment}});
    }
}