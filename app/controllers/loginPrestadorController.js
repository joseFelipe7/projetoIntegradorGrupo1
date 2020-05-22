const bcrypt = require('bcrypt');
const { Prestador } = require('../models/Prestador');

module.exports = {
  create: (_req, res) => {
    res.render('loginPrestador');
  },

  store: async (req, res) => {
    const { email, password } = req.body;
    
    // select passqord é pra trazer o campo de password, pois o BD está com select: false
    const umPrestador = await Prestador.findOne({ email }).select('+password');

    // Se não exister o email return mensagem de erro!!!
    if (!umPrestador) {
      return res.render('loginPrestador', {
        msg: "Email ou password errados!!!"
      });
    }

    // Se não exister o password return mensagem de erro!!!
    if (!await bcrypt.compare(password, umPrestador.password)) {
      return res.render('loginPrestador', {
        msg: "Email ou password errados!!!"
      });
    }

    // return res.redirect('/prestador/lista', { umPrestador })
    return res.send({ umPrestador });

  }

}