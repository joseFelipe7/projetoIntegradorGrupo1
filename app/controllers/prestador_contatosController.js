const {Prestador, Contatos_prestador} = require('../models')

const prestador_contatosController = {

    index: async (req, res) => {
        const {fk_prestador} = req.params
        const contatos_prestadores = await Prestador.findByPk(fk_prestador, {
            include: [
                {
                    model:Contatos_prestador,
                    as:'contatos_prestadores'
                },
                {
                    model:Prestador_endereco,
                    as:'contatos_prestadores'
                },
                {
                    model:Habilidades,
                   
                }
            ]
        })
       
        return res.render("areaPrestador", {view: "meusDados-prestador", loggado: req.session.prestador, data:{contatos_prestadores}})
    },

    store: async (req, res) => {
        const {id} = req.params
        const {
            prestadorCel1,
            prestadorCel2,
            prestadorTelefone,
            prestadorEmail1,
            prestadorEmail2,
            
        } = req.body;

        const prestador = await Prestador.findByPk(id)
        if(!prestador){
            return res.send("Prestador não encontrado")
        }
        const prestadores_contatos = await Prestador_endereco.create({
            celular_principal:prestadorCel1,
            celular_secundario: prestadorCel2,
            telefone_residencial: prestadorTelefone,
            email_principal:prestadorEmail1,
            email_secundario:prestadorEmail2,
            fk_prestador:id

        })
        console.log(prestadores_enderecos)
        return res.render("areaPrestador", {view: "meusDados-prestador", loggado: req.session.prestador, data:{prestadores_contatos}})

    }
}
module.exports = prestador_contatosController