const { Prestador, Prestador_endereco, Habilidades, Avaliacoes, Categorias } = require('../models');
const { Op } = require('sequelize');

const listarPrestadoresController = {
    index: async (req, res) => {
        let { page = 1 } = req.query;
        // findAndCountAll faz a busca e traz a contagem de todos itens no BD.
        let { rows: prestadores } = await Prestador.findAndCountAll({
            // limita a 12 resultados na busca ao BD.
            limit: 12,
            // ao trocar pagina ele sempre pula os 12 anteriores.
            offset: (page - 1) * 12,
            include: [{
                model: Habilidades,
                required: true
            }, {
                model: Avaliacoes,
                required: true,
            }, {
                model: Prestador_endereco,
                required: true,
                as: 'prestadores_enderecos'
            }]
        });

        let { count: totalPage } = await Prestador.findAndCountAll()

        prestadores.forEach((prestador, index) => {
            let soma = 0;
            let qtdNotas = 0;
            prestador.Avaliacoes.forEach(avaliacao => {
                soma += avaliacao.nota
                qtdNotas++
            })
            prestadores[index].nota = soma/qtdNotas;
        })

        // ele divide totalPage por 12 itens cada page e arredonda para não trazer número quebrado.
        let totalPages = Math.round(totalPage/12);
        res.render("listaPrestadores", {loggado: req.session.cliente, prestadores, totalPages, textoPesquisa: [], idCategoria: [], avaliacaoPesquisa: []});
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
                    titulo: {
                        [Op.like]: `%${pesquisa}%`
                    }
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
        res.render("listaPrestadores", {loggado: req.session.cliente, prestadores, totalPages, textoPesquisa: [ pesquisa ], idCategoria: [], avaliacaoPesquisa: []});
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
                required: true,
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
        res.render("listaPrestadores", {loggado: req.session.cliente, prestadores, totalPages, textoPesquisa: [ categorias[0].categoria ], idCategoria: [ categoria_id ], avaliacaoPesquisa: []});
    },

    showPesquisaAvaliacao: async (req, res) => {
        let { pesquisa, avaliacao } = req.params;
        let { page = 1 } = req.query;
        let { count: totalPage, rows: prestadores } = await Prestador.findAndCountAll({
            limit: 12,
            offset: (page - 1) * 12,
            include: [{
                model: Habilidades,
                required: true,
                where: {
                    titulo: {
                        [Op.like]: `%${pesquisa}%`
                    }
                }
            }, {
                model: Avaliacoes,
                required: true,
                where: {
                    nota: avaliacao
                }
            }, {
                model: Prestador_endereco,
                required: true,
                as: 'prestadores_enderecos'
            }]
        });
        let totalPages = Math.round(totalPage/12);
        res.render("listaPrestadores", {loggado: req.session.cliente, prestadores, totalPages, textoPesquisa: [ pesquisa ], idCategoria: [], avaliacaoPesquisa: [ avaliacao ]});
    },

    showCategoriaAvaliacao: async (req, res) => {
        let { categoria_id, avaliacao } = req.params;
        let { page = 1 } = req.query;
        let { count: totalPage, rows: prestadores } = await Prestador.findAndCountAll({
            limit: 12,
            offset: (page - 1) * 12,
            where: {
                categoria_id
            },
            include: [{
                model: Habilidades,
                required: true,
            }, {
                model: Avaliacoes,
                required: true,
                where: {
                    nota: avaliacao
                }
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
        res.render("listaPrestadores", {loggado: req.session.cliente, prestadores, totalPages, textoPesquisa: [ categorias[0].categoria ], idCategoria: [ categoria_id ], avaliacaoPesquisa: [ avaliacao ]});
    }

};

module.exports = listarPrestadoresController;