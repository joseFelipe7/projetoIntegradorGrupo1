const { Cliente } =  require('../models');
const bcrypt = require('bcrypt')
module.exports = {
    create:(req, res) => {
            res.render("cadastroContratante");
    },
    store:(req,res)=>{
        let {   
            contratanteEmail, 
            contratanteNome,
            contratanteSenha, 
            contratanteCpf,
            contratanteNascimento
        } = req.body
        console.log(bcrypt.hashSync(contratanteSenha,10))
            Cliente.create({
                nome:contratanteNome,
                email:contratanteEmail,
                senha:bcrypt.hashSync(contratanteSenha,10),
                cpf:contratanteCpf,
                status_:'A',
                data_nascimento:contratanteNascimento,
                data_cadastro:Date.now()
            })
        res.redirect('/login/contratante/#login-contratante')
    },
    viewEditorForm: async (req,res) => {
        const {id} = req.params

        const cliente = await Cliente.findByPk(id)
        return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, cliente})
    },
    update: async (req, res) => {
        const {id} = req.params;
        let {   
            contratanteNome, 
            contratanteCpf,
            contratanteNascimento,
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
            contratanteSenha

        } = req.body;
        console.log(bcrypt.hashSync(contratanteSenha,10))
        const resultado = await Cliente.update({
            nome: contratanteNome,
            email: contratanteEmail,
            senha:bcrypt.hashSync(contratanteSenha,10),
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
        return res.render('/usuario/area-contratante/meus-dados/:id')
    }
}