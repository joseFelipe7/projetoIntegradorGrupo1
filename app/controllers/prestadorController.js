const path = require('path');
const bcrypt = require('bcrypt');
const { Prestador } = require('../models')


const prestadorController = {

    create:(req, res) => {
            res.render("cadastroPrestador");
    },
    store:(req,res)=>{
        let {   
            prestadorEmail, 
            prestadorNome,
            prestadorSenha, 
            prestadorCpf,
            prestadorNascimento
        } = req.body
        console.log(bcrypt.hashSync(prestadorSenha,10))
            Prestador.create({
                nome:prestadorNome,
                email:prestadorEmail,
                senha:bcrypt.hashSync(prestadorSenha,10),
                cpf:prestadorCpf,
                status_:'A',
                data_nascimento:prestadorNascimento,
                data_cadastro:Date.now()
            })
        res.redirect('/login/Prestador/#login-prestador')
    },
    editorForm: async (req, res) => {
        const {id} = req.params

        const prestador = await Prestador.findByPk(id)
        return res.render("areaPrestador", {view: "meusDados-prestador", loggado: req.session.prestador, prestador});
         
    }

    
}
module.exports = prestadorController;

