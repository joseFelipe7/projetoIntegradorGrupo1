const { Prestador, Pedido, HistoricoPedidos, Cliente } = require('../models')
const moment = require("moment");
moment.locale("pt-BR");     
const requisicoesController = {
    index: async (req, res) => {
        const { id } = req.session.prestador

        //busca usuario logado e direciona seus dados
        const prestador = await Prestador.findByPk(id)

        const listPedidos = await Pedido.findAll({
            where: {
                idprestadores: id
            },
            include: [{
                model: Prestador,
                required: true,
                as: 'prestador'
            },{
                model: Cliente,
                required: true,
                as: 'cliente'
            },{
                model:HistoricoPedidos,
                as:'historicos'
            }]
        })
        listEnv = []
        listCanc = []
        listAceitas = []
        listPedidos.forEach(element => {
            let pedido = {
                numero:element.id,
                titulo:element.titulo,
                descricao:element.descricao,
                formaPagamento:element.forma_pagamento,
                andamento:element.status_andamento,
                dataSolicitacao:element.data_solicitacao,
                nomePrestador:element.prestador.nome,
                nomeCliente:element.cliente.nome,
                historico:element.historicos.map( historico => { return {
                    data:historico.data_modificacao,
                    status: historico.status_ 
                }})
            }
            if(element.status_andamento == 'CANC'){
                listCanc.push(pedido) 
            }else if(element.status_andamento == 'ENV'){
                listEnv.push(pedido) 
            }else{
                listAceitas.push(pedido) 
            }

        });
        res.render("areaPrestador", {
            view: "requisicoes-prestador",
            loggado: req.session.prestador,
            data: {
                prestador,
                listAceitas,
                listEnv,
                listCanc,
                moment
            }
        });
    },
    store: async (req,res)=>{
        const { id } = req.session.prestador
        let { respota, pedido } = req.body
        if(respota == 'A'){
            await Pedido.update({ status_andamento:'ANALI'}, {
                where: {
                id: pedido,
                idprestadores:id
                }
            });
        }else if(respota == 'R'){
            await Pedido.update({ status_andamento:'CANC'}, {
                where: {
                id: pedido,
                idprestadores:id
                }
            });
        }
        res.redirect('/usuario/area-prestador/requisicoes')
    }
}

module.exports = requisicoesController