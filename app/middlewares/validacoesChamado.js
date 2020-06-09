const { check, validationResult, body} = require('express-validator');

const validacoesChamado = [
    check("assunto").not().isEmpty().withMessage("O assunto não pode estar vazio!"),

    check("nome").not().isEmpty().withMessage("Precisamos saber seu nome!"),

    check("email").isEmail().withMessage("Não é um e-mail válido"),
    check("email").not().isEmpty().withMessage("O e-mail não pode estar vazio!"),

    check("celular").not().isEmpty().withMessage("O celular não pode estar vazio!"),

    check("mensagem").not().isEmpty().withMessage("Precisa enviar uma mensagem."),

    check("tipo_remetente").not().isEmpty().withMessage("Precisa informar o tipo do remetente!"),
]

module.exports = validacoesChamado;