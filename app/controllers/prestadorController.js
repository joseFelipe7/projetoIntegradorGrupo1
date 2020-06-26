const path = require('path');
const bcrypt = require('bcrypt');
const { Prestador, Contatos_prestador, Prestador_endereco, Habilidades } = require('../models')


const prestadorController = {
    index: async (req, res) => {
        const {id} = req.session.prestador

        //busca usuario logado e direciona seus dados
        const prestador = await Prestador.findByPk(id, {

            //inclui associações do usuario
            include: [
                {
                    model:Contatos_prestador,
                    as: 'contatos_prestadores'
                    
                },
                {
                    model:Habilidades,
                },
                {
                    model:Prestador_endereco,
                    as: 'prestadores_enderecos'
                }
            ]})
            console.log(prestador)
        return res.render("areaPrestador", {view: "meusDados-prestador", loggado: req.session.prestador, data:{prestador}})
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
    },
    update: async (req, res) => {
        
    }   
}
module.exports = prestadorController;

