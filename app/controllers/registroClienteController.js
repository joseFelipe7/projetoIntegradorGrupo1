const { Cliente, Contatos, Clientes_endereco } =  require('../models');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

module.exports = {
    create:(req, res) => {
            res.render("cadastroContratante");
    },
    store: async (req,res)=>{
        
        let {   
            contratanteEmail, 
            contratanteNome,
            contratanteSenha, 
            contratanteCpf,
            contratanteNascimento
        } = req.body
        let cpfSemMascaraC = contratanteCpf.replace(/[^0-9]+/g,'');
        let conferirEmailC = await Cliente.findOne({
            where: {
                email: { [Op.eq]: contratanteEmail }
            }
        });

        if (conferirEmailC) {
            return res.render('cadastroContratante', {
                msgEmailC: "Email já cadastrado!"
            });
        }

            await Cliente.create({
                nome:contratanteNome,
                email:contratanteEmail,
                senha:bcrypt.hashSync(contratanteSenha,10),
                cpf: cpfSemMascaraC,
                status_:'A',
                avatar:false,
                data_nascimento:contratanteNascimento,
                data_cadastro:Date.now()
            })
            const {id} = req.params;
            const cliente = await Cliente.findByPk(id, {
                include:[
                    {
                    model:Contatos,
                    as: 'contatos',
                    
                }, 
                {
                    model:Clientes_endereco,
                    as: 'clientes_enderecos',
                    
                }
                ]})
                
            
        res.redirect('/login/contratante/#login-contratante')
        }
}