//configuração de email
const nodemailer = require("nodemailer");

const email = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'toolshallservicos@gmail.com',
        pass:'2020toolshall'
    },
    tls: { 
        rejectUnauthorized: false 
    }
})

module.exports = email;