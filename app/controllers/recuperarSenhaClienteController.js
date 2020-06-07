const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { check, validationResult, body} = require('express-validator');

const { Cliente, TokenCliente } = require('../models/index');
const emailConfig = require("../../config/email");

module.exports = {
    enviarEmail: async (req, res) => {
        let { email } = req.body;
        console.log(email)

        let umCliente = await Cliente.findOne({
            where: {
                email:{ 
                    [Op.eq]: email,
                }
            }
        })

        if(umCliente){ //existe cliente
            console.log(umCliente.dataValues);

            //gera token...
            let token = bcrypt.hashSync((Date.now().toString()), 10);
            //retira os '/' do hash gerado...
            token = token.replace(/\//g, "-");

            //insere os dados na tabela token_cliente...
            TokenCliente.create({
                hash: token,
                usado: false,
                clientes_id: umCliente.id,
            })

            //se encontrou o email do cliente, envia...
            let envioEmail = {
                from:'toolshallservicos@gmail.com',
                to: email, //email do cliente
                subject: 'Alteração de Senha',
                text:'ola',
                html:`<a href="http://localhost:5620/login/contratante/redefinir-senha/${token}"><h1>clique aqui para redefinir senha:</h1></a>`
            }
            //recebe as informações do email que vai ser enviado e o segundo um callback
            emailConfig.sendMail(envioEmail, (error) => {
                if(error){
                    console.log("Deu ruim!")
                    console.log(error)
                }else{
                    console.log("Deu bom! E-mail enviado")
                }
            })

        } else { //nao existe cliente
            // res.render('loginContratante', { msg:"E-mail errado" });
            console.log("não tem cliente");
        } 
        
        //envia para a view uma msg de envio de email
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