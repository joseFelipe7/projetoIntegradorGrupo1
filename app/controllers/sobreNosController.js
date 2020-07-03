
const SobreNosController = { 

    show: (req, res) => {
        res.render("sobreNos", {loggado: req.session.cliente});
    },
}
module.exports = SobreNosController