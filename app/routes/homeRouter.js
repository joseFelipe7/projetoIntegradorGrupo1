const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
})

router.get("/sobre", (req, res) => {
    res.send("sobre");
})

module.exports = router;