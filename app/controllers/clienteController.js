const moment = require("moment");
moment.locale("pt-BR"); 

const { Cliente, Clientes_endereco, Contatos } = require('../models')

const ClienteController = { 

        index: async (req,res) => {
            const {id} = req.params
            
            //busca usuario logado e direciona seus dados
            const cliente = await Cliente.findByPk(id, {

                //inclui associações do usuario
                include:[ 
                {
                    model:Clientes_endereco,
                    as: 'clientes_enderecos'
                },
                {
                    model:Contatos,
                    as: 'contatos'
                }
                ]})
            
           return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, data:{cliente, moment}})
        },
        
       update: (req, res) => {
           const {id} = req.params
            const {files} = req
            const {
                contratanteNome,
                contratanteNascimento,
                contratanteCpf,
                contratanteEmail,
               
            } = req.body;

            var dadosCliente = {
                
                extensao_avatar:false,
                nome: contratanteNome,
                email: contratanteEmail,
                data_nascimento:contratanteNascimento,
                status_:'A',
            
                cpf: contratanteCpf,
                data_cadastro:Date.now()
            }

            if (typeof files[0].filename != "undefined") {
                dadosCliente["avatar"] = `/uploads/${files[0].filename}`
            }

            console.log(files)

            const cliente = Cliente.update(
                dadosCliente,
                {
                    where: {
                        id
                    }
                })
        
        res.redirect('/usuario/area-contratante/meus-dados/'+id)          
   
        }
    }


module.exports = ClienteController 