const {Cliente, Pedido, Prestador} = require("../models")
const moment = require("moment");
moment.locale("pt-BR");

const OrcamentosController = {
    index: async (req, res) => {
        const {id} = req.session.cliente
        const idPedido = req.params.id
        const cliente = await Cliente.findByPk(id)

        const pedido = await Pedido.findOne({
            where:{
                id:idPedido,
                clientes_id:id
            },
            include:[{
                model:Cliente,
                as:'cliente'
            },{
                model:Prestador,
                as:'prestador'
            }]
    
        })
        
        if(pedido){
            const dadoPedido = {
                numeroPedido:pedido.id,
                status:pedido.status_andamento,
                dataServico:pedido.data_servico,
                titulo:pedido.titulo,
                descricao:pedido.descricao,
                nomePrestador:pedido.prestador.nome,
                nomeCliente:pedido.cliente.nome,
                valor:pedido.valor,
                resumo:pedido.resumo,
                orcamentoAceito:pedido.aprovacao_cliente_orcamento
            }
            return res.render("areaContratante", {view: "orcamentoCliente", loggado: req.session.cliente, data:{moment,cliente, pedido:dadoPedido}});
        }

    
    },
    store: async (req, res) => {

        const {id} = req.session.cliente
        const {idPedido, resposta} = req.body

        try {
            

        const cliente = await Cliente.findByPk(id)

        const pedido = await Pedido.findOne({
            where:{
                id:idPedido,
                clientes_id:id
            },
            include:[{
                model:Cliente,
                as:'cliente'
            },{
                model:Prestador,
                as:'prestador'
            }]
    
        })
        
        
        const atualizado = await Pedido.update({ aprovacao_cliente_orcamento:resposta}, {
            where: {
                id: idPedido,
                clientes_id:id
            }
        });
        let msg = ''
        if(atualizado[0] == 0){
            msg = "Esta resposta ja foi cadastrada!" 
        }else if(resposta == 0){
            msg = "Sua resposta foi recebida!" 
        }else if(resposta == 1){
            msg = "Sua resposta foi recebida!" 
        }

        if(pedido){
            const dadoPedido = {
                numeroPedido:pedido.id,
                status:pedido.status_andamento,
                dataServico:pedido.data_servico,
                titulo:pedido.titulo,
                descricao:pedido.descricao,
                nomePrestador:pedido.prestador.nome,
                nomeCliente:pedido.cliente.nome,
                valor:pedido.valor,
                resumo:pedido.resumo,
                orcamentoAceito:pedido.aprovacao_cliente_orcamento
            }
    
            return res.render("areaContratante", {view: "orcamentoCliente", loggado: req.session.cliente, data:{cliente, pedido:dadoPedido, moment, msg}});

        }

    } catch (error) {
     console.log(error)       
    }

    
    },
}
module.exports = OrcamentosController
