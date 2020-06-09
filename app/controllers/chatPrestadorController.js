const { Op } = require('sequelize')

const {Mensagem, Chat, Prestador, Cliente} = require('../models')
const moment = require('moment')
moment.locale('pt-BR');

const chatPrestadorController = {
    index:async (req,res)=>{
        //let idPrestador = req.session.prestador.id
        
        const listaChat = await Chat.findAll({
            where:{
                prestadores_id:1,
            },

            include:[
                {
                    model: Cliente,
                    as: 'cliente',
                },
                {
                    model: Mensagem,
                    as: 'mensagens',
                    order: [["datamensagem","DESC"]],
                    limit:1
                },
                
            ]
        })
        
        listaDeChat =  listaChat.map(chat => {
               return {
                    nomeCliente:chat.cliente.nome,
                    ultimaMensagem:chat.mensagens[0].mensagem,
                    dataUltimaMensagem:chat.mensagens[0].datamensagem,
                }
        });
        console.log(listaDeChat)
        return res.render("areaPrestador", {view: "chatPrestador", loggado: req.session.prestador, data:{listaDeChat, moment}})
        
     }
}
 
module.exports = chatPrestadorController