const { Cliente, Clientes_endereco, Contatos } = require('../models')

const ClienteController = { 

        index: async (req,res) => {
            const {id} = req.params
            console.log(id)
            
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
            console.log(cliente)
           return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, data:{cliente}})
        },
        
       updade: (req, res) => {
            
            const {
                contratanteNome,
                contratanteNascimento,
                contratanteCpf
            } = req.params;

       

            const cliente = Cliente.update({
                nome: contratanteNome,
                email: contratanteEmail,
                data_nascimento: contratanteNascimento,
                status_:'A',
                cpf: contratanteCpf,
                data_cadastro:Date.now()
            },
            {
                where: {
                    id
                },
                include:{
                    model:Clientes_endereco,
                    as: 'clientes_enderecos',
                    
                },
                include:{
                    model:Contatos,
                    as: 'contatos',
                    
                }
            })
           console.log(cliente)
            
            return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, data:{cliente}})

        }
    }


module.exports = ClienteController 