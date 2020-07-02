const { check, validationResult, body} = require('express-validator');

const validacoesMd = [
    //contratante
    check("assunto").not().isEmpty().withMessage("O assunto não pode estar vazio!"),
    //dados pessoais
    check("contratanteNome").not().isEmpty().withMessage("Precisamos saber seu nome!"),
    check("contratanteNascimento"),

    //contatos
    check("contratanteCelular1"),
    check("contratanteEmail"),

    //endereço
    check("contratanteCep"),
    check("contratanteUf"),
    check("contratanteCidade"),
    check("contratanteRua"),
    check("contratanteN"),

    //prestador
    
     //dados pessoais
     check("prestadorNome").not().isEmpty().withMessage("Precisamos saber seu nome!"),
     check("prestadorNascimento"),
 
     //contatos
     check("prestadorCel1"),
     check("prestadorEmail1"),
 
     //endereço
     check("prestadorCep"),
     check("prestadorUf"),
     check("prestadorCidade"),
     check("prestadorRua"),
     check("prestadorN"),

     //profissão
     check("tituloProfissao"),
     check("dtProfissao"),
     check("descricaoPrestador"),

    check("email").isEmail().withMessage("Não é um e-mail válido"),
    check("email").not().isEmpty().withMessage("O e-mail não pode estar vazio!"),

    check("celular").not().isEmpty().withMessage("O celular não pode estar vazio!"),

    check("mensagem").not().isEmpty().withMessage("Precisa enviar uma mensagem."),

    check("tipo_remetente").not().isEmpty().withMessage("Precisa informar o tipo do remetente!"),
]

module.exports = validacoesMd;