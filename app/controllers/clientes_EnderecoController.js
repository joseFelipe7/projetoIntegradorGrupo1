
const {Clientes_endereco, Cliente, Contatos} = require('../models')
const Clientes_EnderecoController = { 

    index: async (req, res) => {
       const {fk_cliente } = req.params;

        const cliente = await Cliente.findByPk(fk_cliente, {
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
        console.log(clientes_endereco)
        
        return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, data:{cliente, clientes_endereco}})
        
    },
    updade: async (req, res) => {
        const {fk_cliente } = req.params;
        const {
            contratanteCep,
            contratanteRua,
            contratanteN,
            contratanteCidade,
            contratanteComplemento,
            contratanteUf
        } = req.params;

        const cliente = await Cliente.findByPk(fk_cliente);
        if (!cliente){
            return res.send("cliente nao existe")
        }

        const cliente_endereco = await Cliente.update({
            logradouro:contratanteRua,
            uf:contratanteUf,
            cidade:contratanteCidade,
            cep:contratanteCep,
            numero:contratanteN,
            complemento:contratanteComplemento,
            
        },
        {
            where: {
                id
            }
        })
        return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, data:{cliente_endereco}})

    }

}
module.exports = Clientes_EnderecoController