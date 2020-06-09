const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { check, validationResult, body} = require('express-validator');

const { Prestador, TokenCliente } = require('../models/index');
const emailConfig = require("../../config/email");

module.exports = {
    enviarEmail: async (req, res) => {
        let { email } = req.body;
        
        let prestador = await Prestador.findOne({
            where: {
                email:{ 
                    [Op.eq]: email,
                }
            }
        })

        if(prestador){ //verifico se foi encontrado prestador
          
            //gera token...
            let token = bcrypt.hashSync((Date.now().toString()), 10);
            //retira os '/' do hash gerado...
            token = token.replace(/\//g, "-");

            //insere os dados na tabela token_prestador...
            TokenPrestador.create({
                hash: token,
                usado: false,
                prestador_id: prestador.id,
            })

            //se encontrou o email do cliente, envia...
            let envioEmail = {
                from:'toolshallservicos@gmail.com',
                to: email, //email do prestador
                subject: 'Alteração de Senha',
                text:'ola',
                html:`<h1>Olá ${prestador.nome} <a href="http://localhost:5620/login/contratante/redefinir-senha/${token}">clique aqui</a> para redefinir senha:</h1>`
            }
            //recebe as informações do email que vai ser enviado e o segundo um callback
            emailConfig.sendMail(envioEmail, (error) => {
                if(error){
                    console.log("email não enviado!")
                    console.log(error)
                }else{
                    console.log("E-mail enviado com sucesso")
                }
            })

        } else { //cliente não encontrado
            console.log("não tem cliente");
        } 
        
        //envia para a view uma msg de envio de email(mesmo que não haja email a mensagem é a mesma)
        res.render('loginContratante', { mensagemEmail: `E-mail enviado para: ${ email }` })
    },
    redefinirSenha: async (req, res) => {
        let token = req.params.token;

        let tokenCliente = await TokenCliente.findOne({
            where: {
                hash:{ 
                    [Op.eq]: token,
                },
                usado:{
                    [Op.eq]: false,
                }
            }
        })
        // console.log(tokenCliente.dataValues)

        //se tenho um token não usado...
        if (tokenCliente) {
            res.render("redefinirSenhaCliente.ejs", { token: tokenCliente.hash });
        } else {
            res.render("redefinirSenhaCliente.ejs", { mensagemToken: `Link já utilizado/inexistente!` });
        }
    },
    salvarNovaSenha: async (req, res) => {
        //pega token do input e  anova senha...
        let { token, novaSenha } = req.body;

        //verifica o token no banco..
        let tokenCliente = await TokenCliente.findOne({
            where: {
                hash:{ 
                    [Op.eq]: token,
                },
                usado:{
                    [Op.eq]: false,
                }
            }
        })

        if (tokenCliente) {
            //pega o cliente pelo id do clientes_id do token...
            let umCliente = await Cliente.findOne({
                where: {
                    id:{ 
                        [Op.eq]: tokenCliente.clientes_id,
                    }
                }
            })

            umCliente.senha = bcrypt.hashSync(novaSenha, 10);
            //salva o novo valor na coluna...
            //.save() --> para alterações de campos na tabela
            await umCliente.save();

            //marca o token como usado (true)...
            tokenCliente.usado = true;
            //salva o novo valor na tabela token...
            await tokenCliente.save();

            res.render("redefinirSenhaCliente.ejs", { mensagemSenhaSalva: `Nova senha salva com sucesso!` });
        }
    }
}