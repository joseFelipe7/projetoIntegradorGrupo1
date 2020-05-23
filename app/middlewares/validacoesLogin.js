const { check, validationResult, body} = require('express-validator');

const validacoesLogin = [
    check("senha").not().isEmpty().withMessage("A senha não pode estar vazia!"),
    check("email").isEmail().withMessage("Não é um e-mail válido"),
    check("email").not().isEmpty().withMessage("O e-mail não pode estar vazio!")
]

module.exports = validacoesLogin;