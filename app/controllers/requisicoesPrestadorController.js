const { Prestador, Pedido, HistoricoPedidos } = require('../models')
const requisicoesController = {
    index:(req, res) => {
        res.render("areaPrestador", {view: "requisicoes-prestador", loggado: req.session.prestador,data:{}});
    }
}

module.exports = requisicoesController