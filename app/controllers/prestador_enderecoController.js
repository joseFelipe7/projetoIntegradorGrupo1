const {Prestador, Prestador_endereco, Habilidades} = require('../models')

const prestador_enderecoController = {
    
    index: async (req, res) => {
        const {fk_prestador} = req.params
        const enderecos = await Prestador.findByPk(fk_prestador, {
            include: [
                {
                    model:Contatos_prestador,
                    as:'contatos_prestadores'
                },
                {
                    model:Prestador_endereco,
                    as:'prestadores_enderecos'
                },
                {
                    model:Habilidades,
                    as: 'habilidades'
                   
                }
            ]
        })
       
        return res.render("areaPrestador", {view: "meusDados-prestador", loggado: req.session.prestador, data:{enderecos}})
    },
    store: async (req, res) => {
        const {id} = req.params
        const {
            prestadorCep,
            prestadorUf,
            prestadorCidade,
            prestadorRua,
            prestadorN,
            prestadorComplemento

        } = req.body;

        const prestador = await Prestador.findByPk(id)
        if(!prestador){
            return res.send("Prestador não encontrado")
        }
        const prestadores_enderecos = await Prestador_endereco.create({
            logradouro:prestadorRua,
            uf: prestadorUf,
            cidade: prestadorCidade,
            cep:prestadorCep,
            numero:prestadorN,
            complemento:prestadorComplemento,
            fk_prestador

        })
        console.log(prestadores_enderecos)
        return res.render("areaPrestador", {view: "meusDados-prestador", loggado: req.session.prestador, data:{prestadores_enderecos}})

    }
}
module.exports = prestador_enderecoController