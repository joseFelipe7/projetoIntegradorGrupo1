const {Contatos, Cliente} = require('../models')

const ContatosController = { 


    index: async (req, res) => {
        const {fk_cliente} = req.params;
        const cliente = await Cliente.findByPk(fk_cliente, {
            include: {
                model: Cliente,
                as: 'contatos',
                required: true
            }
        })

        /*const contatos = await Contatos.findAll({
            include: {
                model: Cliente,
                as: 'cliente',
                required: true
            }
        });*/
            
        return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, cliente})
    },
    store: async (req, res) => {
        const {fk_cliente} = req.params;
        const {
            contratanteCelular1,
            contratanteCelular2,
            contratanteTelefone,
            contratanteEmail,
            contratanteEmail2 
           
        } = req.body;

        const cliente = await Cliente.findByPk(fk_cliente);
        if(!cliente){
            return res.send("erro")
        }
        const contatos = await Contatos.create({
            celular_principal:contratanteCelular1,
            celular_secundario:contratanteCelular2,
            telefone_residencial:contratanteTelefone,
            email_principal:contratanteEmail,
            email_secundario:contratanteEmail2,
            fk_cliente:fk_cliente
       
        })

        return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, contatos})
        
    },
    updade: async (req, res) => {
        const {fk_cliente} = req.params;

        const {
            contratanteCelular1,
            contratanteCelular2,
            contratanteTelefone,
            contratanteEmail,
            contratanteEmail2 
        } = req.params;

        const cliente = await Cliente.findByPk(fk_cliente);
        if (!cliente){
            return res.send("cliente nao existe")
        }

        const contato = await Cliente.update({
            celular_principal:contratanteCelular1,
            celular_secundario:contratanteCelular2,
            telefone_residencial:contratanteTelefone,
            email_principal:contratanteEmail,
            email_secundario:contratanteEmail2,
            
        },
        {
            where: {
                id
            }
        })
        return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, contato})

    }

}
module.exports = ContatosController