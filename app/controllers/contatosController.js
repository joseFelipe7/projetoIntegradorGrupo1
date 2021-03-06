const {Clientes_endereco, Cliente, Contatos} = require('../models')

const ContatosController = { 


    index: async (req, res) => {
        const {id } = req.params;
         const cliente = await Cliente.findByPk(id, {
            include:[
                {
                    model: Clientes_endereco,
                    as: 'clientes_enderecos',
                    
                },
                {
                    model: Contatos,
                    as: 'contatos',
                   
                }
            ] 
        })
        
        return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, data:{cliente}})
    },
    
    store: async (req, res) => {
        const {id} = req.params
       
        const {
            contratanteCelular1,
            contratanteCelular2,
            contratanteTelefone,
            contratanteEmail1,
            contratanteEmail2 
           
        } = req.body;

        const cliente = await Cliente.findByPk(id) 
        if(!cliente){
            return res.send("cliente n encontrado")
        }

      
        const contatos = await Contatos.create({
            celular_principal:contratanteCelular1,
            celular_secundario:contratanteCelular2,
            telefone_residencial:contratanteTelefone,
            email_principal:contratanteEmail1,
            email_secundario:contratanteEmail2,
            fk_cliente:id
            
       
        }
        )
        
        req.session.cliente = cliente.dataValues;
        res.redirect('/usuario/area-contratante/meus-dados/'+id)    
    },
    update: async (req, res) => {
        const {id} = req.params;

        const {
            contratanteCelular1,
            contratanteCelular2,
            contratanteTelefone,
            contratanteEmail,
            contratanteEmail2 
        } = req.body;

        const cliente = await Cliente.findByPk(id);
        if (!cliente){
            return res.send("cliente nao existe")
        }

        const contato = await Contatos.update({
            celular_principal:contratanteCelular1,
            celular_secundario:contratanteCelular2,
            telefone_residencial:contratanteTelefone,
            email_principal:contratanteEmail,
            email_secundario:contratanteEmail2,
            fk_cliente:id
            
        },
        {
           
            where:{
                fk_cliente:id
            } 
        })
        res.redirect('/usuario/area-contratante/meus-dados/'+id)    

    }

}
module.exports = ContatosController