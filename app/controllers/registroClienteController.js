const { Cliente, Contatos, Clientes_endereco } =  require('../models');
const bcrypt = require('bcrypt')
module.exports = {
    create:(req, res) => {
            res.render("cadastroContratante");
    },
    store: async (req,res)=>{
        
        let {   
            contratanteEmail, 
            contratanteNome,
            contratanteSenha, 
            contratanteCpf,
            contratanteNascimento
        } = req.body
        console.log(bcrypt.hashSync(contratanteSenha,10))
            await Cliente.create({
                nome:contratanteNome,
                email:contratanteEmail,
                senha:bcrypt.hashSync(contratanteSenha,10),
                cpf:contratanteCpf,
                status_:'A',
                data_nascimento:contratanteNascimento,
                data_cadastro:Date.now()
            })
            const {id} = req.params;
            const cliente = await Cliente.findByPk(id, {
                include:[
                    {
                    model:Contatos,
                    as: 'contatos',
                    
                }, 
                {
                    model:Clientes_endereco,
                    as: 'clientes_enderecos',
                    
                }
                ]})
                console.log(cliente)
                
            
        res.redirect('/login/contratante/#login-contratante')
        }
}