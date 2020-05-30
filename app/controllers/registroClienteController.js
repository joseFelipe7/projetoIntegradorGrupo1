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
    editar: async (req,res) => {
        const {id} = req.params

        const cliente = await Cliente.findByPk(id)
        return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, cliente})
    },
    update: async (req, res) => {
        res.send("oi")
    }
}