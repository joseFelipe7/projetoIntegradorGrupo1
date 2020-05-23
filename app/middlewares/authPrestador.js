const authPrestador = (req, res, next) => {
  //se estiver session
  if (req.session.prestador) {
      //acessa
      next();
  } else {
      res.redirect('/login/Prestador/#login-prestador');
  }
}

module.exports = authPrestador;