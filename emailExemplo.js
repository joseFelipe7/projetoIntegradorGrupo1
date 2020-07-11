//configuração de email para usar em newsletter e no esqueci a senha.
const nodemailer = require("nodemailer");

const emailExemplo = nodemailer.createTransport({
    service: 'informe serviço de email',
    auth:{
        user:'informe o email que irá usar',
        pass:'informe sua senha'
    },
    tls: { 
        rejectUnauthorized: false 
    }
})

module.exports = emailExemplo;