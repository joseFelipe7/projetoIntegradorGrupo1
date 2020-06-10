const path = require('path');
const bcrypt = require('bcrypt');
const { Prestador } = require('../models')


const prestadorController = {
    index: async (req, res) => {
        const prestador = await Prestador.findAll()
        return res.send('prestador', {prestador})
    },

    create:(req, res) => {
            res.render("cadastroPrestador");
    },
    store:(req,res)=>{
        let {   
            prestadorEmail, 
            prestadorNome,
            prestadorSenha, 
            prestadorCpf,
            // prestadorNascimento
        } = req.body

        let cpfSemMascaraP = prestadorCpf.replace(/[^0-9]+/g,'');
        
        console.log(bcrypt.hashSync(prestadorSenha,10))
            Prestador.create({
                nome:prestadorNome,
                email:prestadorEmail,
                senha:bcrypt.hashSync(prestadorSenha,10),
                cpf: cpfSemMascaraP,
                status_:'A',
                // data_nascimento:prestadorNascimento,
                data_cadastro:Date.now()
            })
        res.redirect('/login/Prestador/#login-prestador')
    }   
}
module.exports = prestadorController;

