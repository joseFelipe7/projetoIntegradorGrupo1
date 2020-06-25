const { Prestador, Prestador_endereco, Habilidades, Avaliacoes, Categorias } = require('../models');

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
                required:true,
            }, {
                model: Prestador_endereco,
                required: true,
                as: 'prestadores_enderecos'
            }]
        });
        // ele divide totalPage por 12 itens cada page e arredonda para não trazer número quebrado.
        let totalPages = Math.round(totalPage/12);
        prestadores.forEach(prestador => {
            console.log(prestador.Avaliacoes);
        })
        res.render("listaPrestadores", {loggado: req.session.cliente, prestadores, totalPages, textoPesquisa: []});
    },

    showPesquisa: async (req, res) => {
        let { pesquisa } = req.params;
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
                required: true
            }, {
                model: Prestador_endereco,
                required: true,
                as: 'prestadores_enderecos'
            }]
        });
        let totalPages = Math.round(totalPage/12);
        res.render("listaPrestadores", {loggado: req.session.cliente, prestadores, totalPages, textoPesquisa: [ pesquisa ]});
    },

    showCategoria: async (req, res) => {
        let { categoria_id } = req.params;
        let { page = 1 } = req.query;
        let { count: totalPage, rows: prestadores } = await Prestador.findAndCountAll({
            limit: 12,
            offset: (page - 1) * 12,
            where: {
                categoria_id
            },
            include: [{
                model: Habilidades,
                required: true
            }, {
                model: Avaliacoes,
                required: true
            }, {
                model: Prestador_endereco,
                required: true,
                as: 'prestadores_enderecos'
            }]
        });
        let categorias = await Categorias.findAll({
            where:{
                id: categoria_id
            }
        })
        let totalPages = Math.round(totalPage/12);
        res.render("listaPrestadores", {loggado: req.session.cliente, prestadores, totalPages, textoPesquisa: [ categorias[0].categoria ]});
    }

};

module.exports = listarPrestadoresController;