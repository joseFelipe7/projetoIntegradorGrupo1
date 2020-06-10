const { Op } = require('sequelize');
const { check, validationResult, body} = require('express-validator');

const { Chamados } = require('../models/index');

module.exports = {
    index: (req, res) => {
        let idPrestador = req.params.id_prestador;

        res.render("singleprestador", { idPrestador });
    },

    //exibe formulario
    create: (req, res) => {
        res.render("contato");
    },

    //envia as informações
    store: async (req, res) => {
        console.log(req.body); 

        /*
        {
            servico: 'encanamento',
            dataServico: '2020-06-09',
            detalhes: 'teste',
            idPrestador: '1'
          }
          */

        /*
        let erros = validationResult(req); 

        if(erros.isEmpty()) {//se está vazio, ou seja, senão tem erros

            //pega input do form contato...
            let { assunto, nome, email, celular, telefone, mensagem, tipo_remetente } = req.body;

            //preenche dados da tabela...
            //create é o mesmo que insert...
            let chamados = await Chamados.create({
                //itens para inserir
                assunto: assunto,
                nome: nome,
                email: email,
                celular: celular,
                telefone: telefone,
                mensagem: mensagem,
                tipo_remetente: tipo_remetente,
                data_chamado: Date.now()
            });

            //renderiza alerta de sucesso
            res.render("contato.ejs", { msgEnviado: `Chamado enviado! Aguarde retorno pelo contato informado.` });

        } else {
            //renderizo para o usuario a view de contato de novo e envio para a view a lista de erros via objeto
            return res.render("contato", {errors:erros.errors})
        } 

        */
    }
}