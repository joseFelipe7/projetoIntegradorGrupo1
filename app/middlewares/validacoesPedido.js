const { check, validationResult, body} = require('express-validator');

const validacoesPedido = [
    check("servico").not().isEmpty().withMessage("Serviço não pode estar vazio!"),

    check("dataServico").not().isEmpty().withMessage("Informe a data do serviço!"),

    check("detalhes").not().isEmpty().withMessage("Detalhes não pode estar vazio!"),
]

module.exports = validacoesPedido;