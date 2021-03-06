
const {Clientes_endereco, Cliente, Contatos} = require('../models')
const Clientes_EnderecoController = { 

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
            contratanteCep,
            contratanteRua,
            contratanteN,
            contratanteCidade,
            contratanteComplemento,
            contratanteUf
        } = req.body;

        const cliente = await Cliente.findByPk(id) 
        if(!cliente){
            return res.send("Cliente n encontrado")
        }
        const clientes_endereco = await Clientes_endereco.create({
            logradouro:contratanteRua,
            uf:contratanteUf,
            cidade:contratanteCidade,
            cep:contratanteCep,
            numero:contratanteN,
            complemento:contratanteComplemento,
            fk_cliente:id
           

        }
        )
        req.session.cliente = cliente.dataValues;
        
        res.redirect('/usuario/area-contratante/meus-dados/'+id)          
    },
    update: async (req, res) => {
        const {id} = req.params;
        const {
            contratanteCep,
            contratanteRua,
            contratanteN,
            contratanteCidade,
            contratanteComplemento,
            contratanteUf
        } = req.body;

        const cliente = await Cliente.findByPk(id);
        if (!cliente){
            return res.send("cliente nao existe")
        }

        const cliente_endereco = await Clientes_endereco.update({
            logradouro:contratanteRua,
            uf:contratanteUf,
            cidade:contratanteCidade,
            cep:contratanteCep,
            numero:contratanteN,
            complemento:contratanteComplemento,
            fk_cliente:id
            
        },
        {
            where: {
                fk_cliente:id
            }
        })
        return res.redirect('/usuario/area-contratante/meus-dados/'+id)
    }

}
module.exports = Clientes_EnderecoController