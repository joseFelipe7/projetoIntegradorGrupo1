const {Prestador, Contatos_prestador, Prestador_endereco} = require('../models')

const habilidadesController = {

    index: async (req, res) => {
        const {fk_prestador} = req.params
        const habilidades = await Prestador.findByPk(fk_prestador, {
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
       
        return res.render("areaPrestador", {view: "meusDados-prestador", loggado: req.session.prestador, data:{habilidades}})
    },

    store: async (req, res) => {
        const {id} = req.params
        const {
           titulo, 
           dataInicio,
           adicionais
            
        } = req.body;

        const prestador = await Prestador.findByPk(id)
        if(!prestador){
            return res.send("Prestador não encontrado")
        }
        const habilidades = await Habilidades.create({
            titulo, 
            inicio_profissao:dataInicio,
            descricao:adicionais,
            fk_prestador:id

        })
        console.log(habilidades)
        return res.render("areaPrestador", {view: "meusDados-prestador", loggado: req.session.prestador, data:{habilidades}})

    }
}
module.exports = habilidadesController