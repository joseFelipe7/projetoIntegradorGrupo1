const { Cliente, Clientes_endereco, Contatos } = require('../models')
const ClienteController = { 

    /*index: async (req, res) => {
        const cliente = await Clientes_endereco.findAll()
        return res.send("clientes", {cliente})
           

        },*/
        index: async (req,res) => {
            const {id} = req.params
    
            //const cliente = await Cliente.findByPk(id);

            const cliente = await Cliente.findOne({
                where:{
                    id
                },
                include:{
                    model:Clientes_endereco,
                    as: 'clientes_enderecos',
                    required:true
                },
                include:{
                    model:Contatos,
                    as: 'contatos',
                    required:true
                }
            })
            console.log(cliente)
            
            return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, data:{cliente}})
        },/*
        index: async (req, res) => {
            const {id} = req.params;
            const cliente = await Cliente.findOne({
                where:{
                    id
                },
                include:{
                    model:Clientes_endereco,
                    as: 'clientes_enderecos',
                    required:true
                },
                include:{
                    model:Contatos,
                    as: 'contatos',
                    required:true
                }
            })
                
            return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, cliente})
            
        },*/
        updade: async (req, res) => {
            
            const {
                contratanteNome,
                contratanteNascimento,
                contratanteCpf
            } = req.params;

       

            const cliente = await Cliente.update({
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
                }
            })
           
            
            return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, data:{cliente}})

        }
    }


module.exports = ClienteController 