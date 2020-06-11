const { Op } = require('sequelize');
const bcrypt = require('bcrypt');

const { Prestador } = require('../models');

module.exports = {
  create: (_req, res) => {
    res.render('loginPrestador');
  },

  store: async (req, res) => {
    const { email, senha } = req.body;

    let prestador = await Prestador.findOne({
      where: {
        email: {
          [Op.eq]: email 
        }
      }
    });
 
    // Se não exister email ou password return mensagem de erro!!!
    if (!prestador || !bcrypt.compareSync(senha, prestador.senha)) {
      return res.render('loginPrestador', {
        msg: "Email ou password errados!!!"
      });
    } 

    req.session.prestador = prestador.dataValues;
    
    //return res.redirect('/usuario/area-prestador/meusDados/');
    return res.render("areaPrestador", {view: "meusDados-prestador", loggado: req.session.prestador, data:{prestador}})
    
  }

}