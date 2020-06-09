const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { check, validationResult, body} = require('express-validator');

const { Prestador, TokenPrestador } = require('../models/index');
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

            //se encontrou o email do prestador, envia...
            let envioEmail = {
                from:'toolshallservicos@gmail.com',
                to: email, //email do prestador
                subject: 'Alteração de Senha',
                text:'ola',
                html:`<h1>Olá ${prestador.nome} <a href="http://localhost:5620/login/prestador/redefinir-senha/${token}">clique aqui</a> para redefinir senha:</h1>`
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

        } else { //prestador não encontrado
            console.log("prestador não encontrado");
        } 
        
        //envia para a view uma msg de envio de email(mesmo que não haja email a mensagem é a mesma)
        res.render('loginPrestador', { mensagemEmail: `E-mail enviado para: ${ email }` })
    },
    redefinirSenha: async (req, res) => {
        let token = req.params.token;

        let tokenPrestador = await TokenPrestador.findOne({
            where: {
                hash:{ 
                    [Op.eq]: token,
                },
                usado:{
                    [Op.eq]: false,
                }
            }
        })

        //se tenho um token não usado...
        if (tokenPrestador) {
            res.render("redefinirSenhaPrestador.ejs", { token: tokenPrestador.hash });
        } else {
            res.render("redefinirSenhaPrestador.ejs", { mensagemToken: `Link já utilizado/inexistente!` });
        }
    },
    salvarNovaSenha: async (req, res) => {
        //pega token do input e  anova senha...
        let { token, novaSenha } = req.body;

        //verifica o token no banco..
        let tokenPrestador = await TokenPrestador.findOne({
            where: {
                hash:{ 
                    [Op.eq]: token,
                },
                usado:{
                    [Op.eq]: false,
                }
            },
            include:{
                model:Prestador,
                as:'prestador'
            }
        })

        if (tokenPrestador) {
            //altero a senha do prestador
            await Prestador.update({ senha: bcrypt.hashSync(novaSenha, 10)}, {
                where: {
                  id: tokenPrestador.prestador.id
                }
              });
            //marca o token como usado (true)...
            tokenPrestador.usado = true;
            //salva o novo valor na tabela token...
            await tokenPrestador.save();

            res.render("redefinirSenhaPrestador.ejs", { mensagemSenhaSalva: `Nova senha salva com sucesso!` });
        }
    }
}