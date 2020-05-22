const authCliente = (req, res, next) => {
    //se estiver session
    if (req.session.cliente) {
        //acessa
        next();
    } else {
        res.redirect('/login/contratante/');
    }
}

module.exports = authCliente;