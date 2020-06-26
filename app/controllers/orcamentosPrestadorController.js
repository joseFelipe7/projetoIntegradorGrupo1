const moment = require("moment");
moment.locale("pt-BR"); 

const { Op } = require('sequelize');       

const { Cliente, Pedido, Prestador } = require('../models/index');

const orcamentosPrestadorController = {
    index: async (req, res) => {
        let idPedido = 5;
        let loggado = req.session.prestador;

        let pedido = await Pedido.findOne({
            //traz os pedido...
            where: {
                idprestadores:{ 
                    [Op.eq]: loggado.id,
                },
                id:{ 
                    [Op.eq]: idPedido,
                } 
            },
            include: [
                {
                    model: Prestador,
                    as: 'prestador',
                },
                {
                    model: Cliente,
                    as: 'cliente',
                }
            ]
        })

        dados = {
            numServico: pedido.id,
            nomePrestador: pedido.prestador.nome,
            nomeCliente: pedido.cliente.nome,
            servico: pedido.titulo,
            data: pedido.data_servico,
            detalhes: pedido.descricao,
        }

        console.log(dados)

        res.render("areaPrestador", {view: "cadastroOrcamento", loggado: req.session.prestador,data:{dados, moment}});
    },
    store: async (req, res) => {
        let loggado = req.session.prestador;

        let idPedido = 5;
        let resumo = "resumo do prestador";
        let valor = 500.00;

        let updatePedido = await Pedido.update({ valor:valor, resumo:resumo }, {
            where: {
                idprestadores:{ 
                    [Op.eq]: loggado.id,
                },
                id:{ 
                    [Op.eq]: idPedido,
                }
            }
        });

        console.log(updatePedido)

        let pedido = await Pedido.findOne({
            //traz os pedido...
            where: {
                idprestadores:{ 
                    [Op.eq]: loggado.id,
                },
                id:{ 
                    [Op.eq]: idPedido,
                } 
            },
            include: [
                {
                    model: Prestador,
                    as: 'prestador',
                },
                {
                    model: Cliente,
                    as: 'cliente',
                }
            ]
        })

        dados = {
            numServico: pedido.id,
            nomePrestador: pedido.prestador.nome,
            nomeCliente: pedido.cliente.nome,
            servico: pedido.titulo,
            data: pedido.data_servico,
            detalhes: pedido.descricao,
        }

        if(updatePedido[0] >= 1){
            msg = {
                status:true,
                resposta:'Orçamento enviado!'
            }
          
        }else{
            msg = {
                status:false,
                resposta:'Falha ao enviar orçamento!'
            }
        }

        res.render("areaPrestador", {view: "cadastroOrcamento", loggado: req.session.prestador,data:{dados, moment, msg}});
    },
}
module.exports = orcamentosPrestadorController;