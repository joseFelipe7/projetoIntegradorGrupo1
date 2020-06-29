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
        console.log(pedido)
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
        const {id} = req.params

        const cliente = await Cliente.findByPk(id)

        res.redirect("areaContratante", {view: "orcamentoCliente", loggado: req.session.cliente, data:{cliente}});
    
    },
}
module.exports = OrcamentosController
