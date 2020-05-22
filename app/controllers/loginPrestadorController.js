const Sequelize = require("sequelize");
const config = require("../configs/database");
const bcrypt = require("bcrypt");

module.exports = {
  create: (_req, res) => {
    res.render('loginPrestador');
  },

  store: async (req, res) => {
    const { email, password } = req.body;
    const con = new Sequelize(config);
    
    const [user] = await con.query(
      "SELECT * FROM users WHERE email=:email LIMIT 1",
      {
        replacements: {
          email
        },

        type: Sequelize.QueryTypes.SELECT
      }
    );

    // Se não exister email ou password return mensagem de erro!!!
    if (!user || !bcrypt.compareSync(password, umPrestador.password)) {
      return res.render('loginPrestador', {
        msg: "Email ou password errados!!!"
      });
    }

    return res.redirect('/prestador/single');

  }

}