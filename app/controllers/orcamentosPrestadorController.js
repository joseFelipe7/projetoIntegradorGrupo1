const moment = require("moment");
moment.locale("pt-BR"); 

const { Op } = require('sequelize');       

const { Cliente, Pedido, Prestador, HistoricoPedidos } = require('../models/index');

const orcamentosPrestadorController = {
    index: async (req, res) => {
        let idPedido = req.query.pedido;
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

        res.render("areaPrestador", {view: "cadastroOrcamento", loggado: req.session.prestador,data:{dados, moment, prestador:loggado}});
    },
    store: async (req, res) => {
        try {
            let loggado = req.session.prestador;

            let idPedido = req.body.numServico;
            let resumo = req.body.resumo;
            let valor = req.body.valor;

            let updatePedido = await Pedido.update({ valor:valor, resumo:resumo, status_andamento:"AGUAR" }, {
                where: {
                    idprestadores:{ 
                        [Op.eq]: loggado.id,
                    },
                    id:{ 
                        [Op.eq]: idPedido,
                    }
                }
            });

            let historico = await HistoricoPedidos.create({
                //itens para inserir
                //nomeCampo:valorInserido
                pedidos_id: idPedido,
                status_: "AGUAR",
                data_modificacao: Date.now(),
            });

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

            res.render("areaPrestador", {view: "cadastroOrcamento", loggado: req.session.prestador,data:{dados, moment, msg, prestador:loggado}});
        } catch (error) {
            console.log(error)
        }
        
    },
}
module.exports = orcamentosPrestadorController;