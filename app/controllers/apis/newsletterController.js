const { Op } = require('sequelize');
const { check, validationResult, body} = require('express-validator');

const { Newsletter } = require('../../models/index');
const emailConfig = require("../../../config/email");

module.exports = {
    store: async (req, res) => {
         
        //RECEBE PELA API...
        let { nomeNewsletter, emailNewsletter } = req.body;
        console.log(nomeNewsletter)
        console.log(emailNewsletter)

        let umEmail = await Newsletter.findOne({
            where: {
                email:{ 
                    [Op.eq]: emailNewsletter,
                }
            }
        })

        try{//tenta fazer
            if(!umEmail){ //nao existe email
                //insere os dados na tabela newsletter...
                const newsletter = await Newsletter.create({
                    nome: nomeNewsletter,
                    email: emailNewsletter,
                    data_cadastro: Date.now(),
                })

                //201 = criado com sucesso
                //retorna em formato json
                return res.status(201).json(newsletter);
    
            } else { //já existe email
                // mensagem
                return res.status(400).json({
                    error: true,
                    msg:"Usuario já existente"
                  })
            } 
        } catch (e) { //se der erro
            //validacao generica
           
            return res.status(400).json({
              error: true,
              msg:"Erro na requisição, tente novamente"
            })
        }
    },
}