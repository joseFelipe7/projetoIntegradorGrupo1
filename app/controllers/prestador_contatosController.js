const {Prestador, Contatos_prestador} = require('../models')

const prestador_contatosController = {

    index: async (req, res) => {
        const {id} = req.params
        const contatos_prestadores = await Prestador.findByPk(id, {
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
                    as:'habilidades'
                   
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
        const contatos_prestadores = await Contatos_prestador.create({
            celular_principal:prestadorCel1,
            celular_secundario: prestadorCel2,
            telefone_residencial: prestadorTelefone,
            email_principal:prestadorEmail1,
            email_secundario:prestadorEmail2,
            fk_prestador:id

        })
        req.session.prestador = prestador.dataValues;
        res.redirect('/usuario/area-prestador/meus-dados/'+id)          

    },
    update: async (req, res) => {
        const {id} = req.params;

        const {
            prestadorCel1,
            prestadorCel2,
            prestadorTelefone,
            prestadorEmail1,
            prestadorEmail2

        } = req.body;

        const prestador = await Prestador.findByPk(id)
        if(!prestador){
            return res.send("Prestador não encontrado")
        }
        const contatos_prestadores = await Contatos_prestador.update({
           celular_principal: prestadorCel1,
           celular_secundario: prestadorCel2,
           telefone_residencial: prestadorTelefone,
           email_principal: prestadorEmail1,
           email_secundario: prestadorEmail2,
           fk_prestador:id
        },{
            where:{
                fk_prestador:id
        }
       
        })
        res.redirect('/usuario/area-prestador/meus-dados/'+id)          

    }

}
module.exports = prestador_contatosController