const path = require('path');
const bcrypt = require('bcrypt');
const moment = require("moment");
moment.locale("pt-BR"); 

const { Op } = require('sequelize');
const { Prestador, Contatos_prestador, Prestador_endereco, Habilidades } = require('../models')


const prestadorController = {
    index: async (req, res) => {
        const {id} = req.session.prestador

        //busca usuario logado e direciona seus dados
        const prestador = await Prestador.findByPk(id, {

            //inclui associações do usuario
            include: [
                {
                    model:Contatos_prestador,
                    as: 'contatos_prestadores'
                    
                },
                {
                    model:Habilidades,
                },
                {
                    model:Prestador_endereco,
                    as: 'prestadores_enderecos'
                }
            ]})
        return res.render("areaPrestador", {view: "meusDados-prestador", loggado: req.session.prestador, data:{prestador, moment}})
    },

    create:(req, res) => {
            res.render("cadastroPrestador");
    },
    store: async (req,res)=>{
        let {   
            prestadorEmail, 
            prestadorNome,
            prestadorSenha, 
            prestadorCpf,
            // prestadorNascimento
        } = req.body
        let cpfSemMascaraP = prestadorCpf.replace(/[^0-9]+/g,'');
        let conferirEmailP = await Prestador.findOne({
            where: {
                email: { [Op.eq]: prestadorEmail }
            }
        });

        if (conferirEmailP) {
            return res.render('cadastroPrestador', {
                msgEmailP: "Email já cadastrado!"
            });
        }

        console.log(bcrypt.hashSync(prestadorSenha,10))
            await Prestador.create({
                nome:prestadorNome,
                email:prestadorEmail,
                senha:bcrypt.hashSync(prestadorSenha,10),
                cpf: cpfSemMascaraP,
                status_:'A',
                avatar:false,
                categoria_id:false,
                // data_nascimento:prestadorNascimento,
                data_cadastro:Date.now()
            })

            const {id} = req.params;
            const prestador = await Prestador.findByPk(id, {
                include: [
                    {
                        model:Contatos_prestador,
                        as: 'contatos_prestadores'
                    },
                    {
                        model:Habilidades,
                    },
                    {
                        model:Prestador_endereco,
                        as: 'prestadores_enderecos'
                    }
                ]
            })
        res.redirect('/login/Prestador/#login-prestador')
    },
    update: async (req, res) => {
        const {id} = req.params
        const {files} = req
        const {
            prestadorEmail, 
            prestadorNome,
            prestadorSenha, 
            prestadorCpf,
            prestadorNascimento

        } = req.body;

        const prestador = Prestador.update({
            avatar:`/uploads/${files[0].filename}`,
            nome:prestadorNome,
            // senha:bcrypt.hashSync(prestadorSenha,10),
            cpf: prestadorCpf,
            status_:'A',
           
            categoria_id:false,
            data_nascimento:prestadorNascimento
        },{
            where: {
                id 
            }
        })
        res.redirect('/usuario/area-prestador/meusDados/'+id)
        
    }   
}
module.exports = prestadorController;

