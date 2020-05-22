const path = require('path');
const bcrypt = require('bcrypt');
const { Prestador } = require('../models')


const prestadorController = {

    viewFormCadastro: (req, res)=>{
       return res.render('areaPrestador', {view: "cadastroPrestador"})
    },
    cadastrar: async (req, res) => {
         let { password, ...dados } = req.body;
        console.log(dados)
         //let dados.password = bcrypt.hashSync(password, 10)

         const newPrestador = await Prestador.create({dados})
         console.log(newPrestador)
         
         
         return res.send("Olá " + dados.name + ", seu cadastro foi realizado com sucesso!");

    }/*,
    listarPrestadores: (req, res) => {
        let cadastroPrestador = fs.readFileSync(cadastroPrestadorJson, {encoding: 'utf-8'})
        cadastroPrestador = JSON.parse(cadastroPrestador)
        res.render("listaPrestadores", {listaPrestadores:cadastroPrestador});
    }*/
}
module.exports = prestadorController;

