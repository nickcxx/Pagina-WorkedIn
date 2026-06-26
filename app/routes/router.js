const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("pages/index");
})

router.get("/mensagens", (req, res)=>{
    res.render("pages/mensagens");
})

router.get("/rede", (req, res)=>{
    res.render("pages/rede");
})

router.get("/vagas", (req, res)=>{
    res.render("pages/vagas");
})

module.exports = router;