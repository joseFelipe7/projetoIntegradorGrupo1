const { Op } = require('sequelize');
const { check, validationResult, body} = require('express-validator');

const { Prestador, Prestador_endereco, Habilidades, Avaliacoes, Galeria_prestadores, Cliente } = require('../models');
const { Pedido } = require('../models/index');

module.exports = {
    index: async (req, res) => {
        let idPrestador = req.params.id_prestador;
        let prestador = await Prestador.findByPk(idPrestador, {
            include: [{
                model: Prestador_endereco,
                required: true,
                as: 'prestadores_enderecos'
            }, {
                model: Habilidades,
                required: true
            }, {
                model: Avaliacoes,
                required: true,
                include: [{
                    model: Cliente,
                    required: true,
                    as: 'cliente'
                }]
            }, {
                model: Galeria_prestadores,
                required: true
            },]
        });
        console.log(prestador);
        res.render("singleprestador", { idPrestador, prestador });
    },

    //exibe formulario
    create: (req, res) => {
        res.render("contato");
    },

    //envia as informações
    store: async (req, res) => {
        let erros = validationResult(req); 
        let clienteLoggado = req.session.cliente;
        let idPrestador = req.body.idPrestador;

        if (clienteLoggado) {
            //acessa
            if(erros.isEmpty()) {//se está vazio, ou seja, senão tem erros
            
                //pega input do form contato...
                let { servico, dataServico, detalhes } = req.body;
    
                //preenche dados da tabela...
                //create é o mesmo que insert...
                let pedido = await Pedido.create({
                    //itens para inserir
                    //nomeCampo:valorInserido
                    titulo: servico,
                    data_servico: dataServico,
                    descricao: detalhes,
                    idprestadores: idPrestador,
                    data_solicitacao: Date.now(),
                    status_andamento: "ENV",
                    clientes_id: req.session.cliente.id,
                    forma_pagamento: "dinheiro"
                });

                console.log(dataServico)

                //renderiza alerta de sucesso
                res.render("singleprestador", { msgEnviado: `Pedido enviado ao prestador!`, idPrestador });
    
            } else {
                //renderizo para o usuario a view de contato de novo e envio para a view a lista de erros via objeto
                return res.render("singleprestador", {errors:erros.errors, idPrestador})
            }
            
        } else {
            //volta pro login
            res.redirect('/login/contratante/');
        }
    }
}