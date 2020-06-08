const Sequelize = require('sequelize')
const config = require('../../config/database')
const {Clientes_endereco, Cliente} = require('../models')
const Clientes_EnderecoController = { 

    index: async (req, res) => {
        const {fk_cliente } = req.params;
        const cliente = await Cliente.findByPk(fk_cliente, {
            include: {
                model: Cliente,
                as: 'clientes_enderecos',
                required:true
            }
        })
        

        

      /* const clientes_enderecos = await Clientes_endereco.findAll({
            include: {
                model: Cliente,
                as: 'cliente',
                required:true
            }
        });
            */
        return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, cliente})
    },
    store: async (req, res) => {
        const {fk_cliente} = req.params;
        const {
            contratanteCep,
            contratanteRua,
            contratanteN,
            contratanteCidade,
            contratanteComplemento,
            contratanteUf
        } = req.body;

        const cliente = await Cliente.findByPk(fk_cliente);
        if (!cliente){
            return res.send("cliente nao existe")
        }
        
        const clientes_endereco = await Clientes_endereco.create({
            logradouro:contratanteRua,
            uf:contratanteUf,
            cidade:contratanteCidade,
            cep:contratanteCep,
            numero:contratanteN,
            complemento:contratanteComplemento,
            fk_cliente:fk_cliente

        })

        return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, clientes_endereco})
        
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
        return res.render("areaContratante", {view: "meusDadosContratante", loggado: req.session.cliente, cliente_endereco})

    }

}
module.exports = Clientes_EnderecoController