const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { check, validationResult, body} = require('express-validator');

const { Cliente } = require('../models/index');

module.exports = {
    //exibe pagina de login
    create: (req, res) => {
        res.render("loginContratante");
    },

    //logga
    store: async (req, res) => {
        let erros = validationResult(req); 
        //emial e senha dos campos login

        if(erros.isEmpty()) {//se está vazio
            let { email, senha } = req.body;

            let umCliente = await Cliente.findOne({
                where: {
                    email:{ 
                        [Op.eq]: email,
                    }
                }
            })
            
            if(umCliente){ //existe cliente
                console.log(umCliente.dataValues);
                //pega senha db
                let senhaCliente = umCliente.senha;

                //compara senha db com a digitada
                let checkSenha = bcrypt.compareSync(senha, senhaCliente);
                if (checkSenha) {
                    // console.log("Aeeee, loggado!");

                    //cria a sessao cliente com os valores do cliente no banco
                    req.session.cliente = umCliente.dataValues;

                    res.redirect('/prestador/lista');
                } else {
                    // console.log("nao loggou!");
                    res.render('loginContratante', { msg:"E-mail ou senha errados" });
                }
            } else { //nao existe cliente
                // console.log('nao tem cliente')
                res.render('loginContratante', { msg:"E-mail ou senha errados"  });
            } 
        } else {
            //renderizo para o usuario a view de cadastro de novo e envio para a view a lista de erros via objeto
            return res.render("loginContratante", {errors:erros.errors})
        } 
    }
}