const { Prestador, Prestador_endereco, Habilidades, Avaliacoes } = require('../models');

const listarPrestadoresController = {
    index: async (req, res) => {
        let { page = 1 } = req.query;
        // findAndCountAll faz a busca e traz a contagem de todos itens no BD.
        let { count: totalPage, rows: prestadores } = await Prestador.findAndCountAll({
            // limita a 12 resultados na busca ao BD.
            limit: 12,
            // ao trocar pagina ele sempre pula os 12 anteriores.
            offset: (page - 1) * 12,
            include: [{
                model: Habilidades,
                required: true
            }, {
                model: Avaliacoes,
                required: true
            }]
        });
        // ele divide totalPage por 12 itens cada page e arredonda para não trazer número quebrado.
        let totalPages = Math.round(totalPage/12);
        res.render("listaPrestadores", {loggado: req.session.cliente, prestadores, totalPages});
    },

    show: async (req, res) => {
        let { pesquisa } = req.params;
        let { nota } = req.query;
        let { page = 1 } = req.query;
        let { count: totalPage, rows: prestadores } = await Prestador.findAndCountAll({
            limit: 12,
            offset: (page - 1) * 12,
            include: [{
                model: Habilidades,
                required: true,
                where: {
                    titulo: pesquisa
                }
            }, {
                model: Avaliacoes,
                required: true,
                where: {
                    nota
                }
            }]
        });
        let totalPages = Math.round(totalPage/12);
        res.render("listaPrestadores", {loggado: req.session.cliente, prestadores, totalPages});
    },

};

module.exports = listarPrestadoresController;