const { Cliente } =  require('../models');
const bcrypt = require('bcrypt')
module.exports = {
    
    viewEditorForm: async (req,res) => {
        const {id} = req.params

        const cliente = await Cliente.findByPk(id);
        return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, cliente})
    },
    update: async (req, res) => {
        const {id} = req.params;

        const meusDadosContratante = await Cliente.findByPk(id);
        if(!meusDadosContratante){
            let {   
                contratanteCep,
                contratanteUf,
                contratanteCidade,
                contratanteRua,
                contratanteN,
                contratanteComplemento,
                contratanteCelular1,
                contratanteCelular2,
                contratanteTelefone,
                contratanteEmail,
                contratanteEmail2,
                
    
            } = req.body;

            const meusDadosContratante = await Cliente.create({
               
                logradouro: contratanteRua,
                uf: contratanteUf,
                cidade: contratanteCidade,
                cep: contratanteCep,
                numero: contratanteN,
                complemento: contratanteComplemento,
                celular_principal: contratanteCelular1,
                celular_secundario: contratanteCelular2,
                telefone_residencial: contratanteTelefone,
                email_principal: contratanteEmail,
                email_secundario: contratanteEmail2,

                },{
                    where: {
                        id
                    }
                })
                return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, meusDadosContratante})

            }

        let {   
                contratanteNome,
                contratanteNascimento,
                contratanteCpf,
                contratanteCep,
                contratanteUf,
                contratanteCidade,
                contratanteRua,
                contratanteN,
                contratanteComplemento,
                contratanteCelular1,
                contratanteCelular2,
                contratanteTelefone,
                contratanteEmail,
                contratanteEmail2,
                
    
            } = req.body;


        const resultado = await Cliente.update({
            nome: contratanteNome,
            email: contratanteEmail,
            data_nascimento: contratanteNascimento,
            status_:'A',
            cpf: contratanteCpf,
            data_cadastro:Date.now(),
            celular_principal: contratanteCelular1,
            celular_secundario: contratanteCelular2,
            telefone_residencial: contratanteTelefone,
            email_principal: contratanteEmail,
            email_secundario: contratanteEmail2,
            logradouro: contratanteRua,
            uf: contratanteUf,
            cidade: contratanteCidade,
            cep: contratanteCep,
            numero: contratanteN,
            complemento: contratanteComplemento

        },
        {
            where: {
                id
            }
        })
        console.log(resultado)
        const cliente = await Cliente.findByPk(id)
        return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, cliente, meusDadosContratante})
       
    }
}