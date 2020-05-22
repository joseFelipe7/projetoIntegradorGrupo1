const express = require("express");
const router = express.Router();

const prestadorController = require('../controllers/prestadorController');

router.get("/single", (req, res) => {
    res.render("singleprestador");
})

router.get("/lista", (req, res) => {
    res.render("listaPrestadores");
})

module.exports = router;