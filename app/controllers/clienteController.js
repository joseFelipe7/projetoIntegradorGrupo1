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
            
           return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, data:{cliente}})
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

            const cliente = Cliente.update({
                avatar:`/uploads/${files[0].filename}`,
                extensao_avatar:false,
                nome: contratanteNome,
                email: contratanteEmail,
                data_nascimento:contratanteNascimento,
                status_:'A',
            
                cpf: contratanteCpf,
                data_cadastro:Date.now()
            },
            {
                where: {
                    id
                }
            })
        
        res.redirect('/usuario/area-contratante/meus-dados/'+id)          
   
        }
    }


module.exports = ClienteController 