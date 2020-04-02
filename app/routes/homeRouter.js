const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
    res.send("Home");
})

router.get("/sobre", (req, res) => {
    res.send("sobre");
})

module.exports = router;