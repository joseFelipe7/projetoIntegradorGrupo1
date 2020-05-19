const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt')

const cadastroPrestadorJson = path.join("cadastroPrestador.json") 

let prestadorController = {

    viewFormCadastro: (req, res)=>{
       return res.render('areaPrestador', {view: "cadastroPrestador"})
    },
    cadastrar:(req, res) => {
        let { 
            prestadorInputEmail1,
            prestadorInputSenha1,
            prestadorInputNome1,
            prestadorInputNascimento,
            prestadorInputRg,
            prestadorInputDataEmissor,
            prestadorInputTelefone1,
            prestadorInputCelular1,
            prestadorInputEmail3,
            prestadorInputEndereco1,
            prestadorInputNumero1,
            prestadorInputBairro1,
            prestadorInputCidade1,
            prestadorInputCep1,
            prestadorInputCpf1,
            prestadorInputCnpj1,
            prestadorInputFantasia,
            prestadorInputEndereco2,
            prestadorInputNumero2,
            prestadorInputBairro2,
            prestadorInputCidade2,
            prestadorInputCep2,
            prestadorInputTelefone2,
            prestadorInputCelular2,
            prestadorInputEmail4
         } = req.body;
         let senhaC = bcrypt.hashSync(prestadorInputSenha1, 10)

         let dadosJson = JSON.stringify([{
            email1P:prestadorInputEmail1,
            prestadorInputSenha1:senhaC,
            nomeP:prestadorInputNome1,
            nascimento:prestadorInputNascimento,
            rgP:prestadorInputRg,
            dt_emissorP:prestadorInputDataEmissor,
            telefone1P:prestadorInputTelefone1,
            celular1P:prestadorInputCelular1,
            email3P:prestadorInputEmail3,
            endereco1P:prestadorInputEndereco1,
            numero1P:prestadorInputNumero1,
            bairro1P:prestadorInputBairro1,
            cidade1P:prestadorInputCidade1,
            cep1P:prestadorInputCep1,
            cpf1P:prestadorInputCpf1,
            cnpj1P:prestadorInputCnpj1,
            fantasia1P:prestadorInputFantasia,
            endereco2P:prestadorInputEndereco2,
            numero2P:prestadorInputNumero2,
            bairro2P:prestadorInputBairro2,
            cidade2P:prestadorInputCidade2,
            cep2P:prestadorInputCep2,
            Telefone2P:prestadorInputTelefone2,
            celular2P:prestadorInputCelular2,
            email4P:prestadorInputEmail4
         }]);
         fs.appendFileSync(cadastroPrestadorJson, dadosJson)
         res.send("Olá " + prestadorInputNome1 + ", seu cadastro foi realizado com sucesso!");

    }/*,
    listarPrestadores: (req, res) => {
        let cadastroPrestador = fs.readFileSync(cadastroPrestadorJson, {encoding: 'utf-8'})
        cadastroPrestador = JSON.parse(cadastroPrestador)
        res.render("listaPrestadores", {listaPrestadores:cadastroPrestador});
    }*/
}
module.exports = prestadorController;

