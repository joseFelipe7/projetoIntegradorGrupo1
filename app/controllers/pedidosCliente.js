const { Op } = require('sequelize');
const { check, validationResult, body} = require('express-validator');
const moment = require("moment");
const {Cliente} = require('../models')
moment.locale("pt-BR");        


const { Pedido, HistoricoPedidos, Prestador } = require('../models/index');

module.exports = {
    //exibe pedidos
    index: async (req, res) => {
        const {id} = req.session.cliente
        const cliente = await Cliente.findByPk(id)
        
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
                },
                {
                    model: Prestador,
                    as: 'prestador',
                }
            ],
            //ordena pela ordem do campo, de forma decrescente
            order: [["data_solicitacao","DESC"]],
        })

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

        let infoPedido = []

        pedidos.forEach(pedido => {
            infoPedido.push(
                {
                    nomeServico : pedido.titulo,
                    status : pedido.status_andamento,
                    idServico : pedido.id,
                    nomePrestador : pedido.prestador.nome,
                    formaPag : pedido.forma_pagamento,
                    aprovacaoCliente: pedido.aprovacao_cliente_orcamento,
                    valor:pedido.valor,
                    historico : pedido.historicos.map(historico => {
                        return {
                            statusHistorico : historico.status_,
                            modificacao : historico.data_modificacao,
                        }
                    })
                    /*
                    historico: [{statusHistorico, modificacao},{statusHistorico, modificacao}]
                    */
                }
            );
        });

        console.log(infoPedido)
        /*
        [
        {
            nomeServico: 'Pedicure',
            status: 'CANC',
            idServico: 4,
            nomePrestador: 'Luh',
            formaPag: 'dinheiro',
            historico: [ [Object] ]
        },
        {
            nomeServico: 'AGUA',
            status: 'ENV',
            idServico: 3,
            nomePrestador: 'Luh',
            formaPag: 'dinheiro',
            historico: [ [Object] ]
        },
        {
            nomeServico: 'Front',
            status: 'CANC',
            idServico: 2,
            nomePrestador: 'Luh',
            formaPag: 'dinheiro',
            historico: [ [Object] ]
        },
        {
            nomeServico: 'Back',
            status: 'ENV',
            idServico: 1,
            nomePrestador: 'Luh',
            formaPag: 'dinheiro',
            historico: [ [Object], [Object], [Object] ]
        }
        ] 
        */

        res.render("areaContratante", {view: "pedidosAreaContratante", loggado: req.session.cliente, data:{cliente, infoPedido, moment}});
    }
}