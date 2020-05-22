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
        //res.redirect('/login/contratante/#login-contratante')
    }
}