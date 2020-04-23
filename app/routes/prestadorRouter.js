const express = require("express");

let router = express.Router();

router.get("/single", (req, res) => {
    res.render("singleprestador");
})

router.get("/lista", (req, res) => {
    res.render("listaPrestadores");
})



module.exports = router;