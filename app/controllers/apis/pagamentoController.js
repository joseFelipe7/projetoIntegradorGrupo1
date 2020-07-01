const MercadoPago = require('mercadopago');

const getFullUrl = (req) => {
  const url = req.protocol + '://' + req.get('host');
  console.log(url);
  return url;
}

module.exports = {
  async checkout(req, res) {

    console.log(process.env)
    MercadoPago.configure({
      sandbox: process.env.SANDBOX === 'true' ? true : false,
      access_token: process.env.MP_ACCESS_TOKEN
    });

    const { id, email, description, amount } = req.params;

    // Criar modelo de objecto de compra
    const ordemCompra = {
      items: [
        item = {
          id: id,
          title: description,
          description : description,
          quantity: 1,
          currency_id: 'BRL',
          unit_price: parseFloat(amount)
        }
      ],
      payer : {
        email: email
      },
      auto_return : "all",
      external_reference : id,
      back_urls : {
        success : getFullUrl(req) + "/usuario/area-contratante/checkout/sucesso",
        pending : getFullUrl(req) + "/usuario/area-contratante/checkout/pendente",
        failure : getFullUrl(req) + "/usuario/area-contratante/checkout/falhou"
      }
    };

    //Gerar init_point para checkout
    try {
      const preferencia = await MercadoPago.preferences.create(ordemCompra);
      return res.redirect(`${preferencia.body.init_point}`);
    }catch(err){
      return res.send(err.message);
    }
  },

  pagSucesso(_req, res) {
    res.render('pagamentoSucesso');
  },

  pagPendente(_req, res) {
    res.render('pagamentoPendente');
  },

  pagFalhou(_req, res) {
    res.render('pagamentoFalhou');
  },
}