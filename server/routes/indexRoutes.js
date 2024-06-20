const express = require("express")

//*express, facilita o código, porque se não seria imenso.//  

const router = express.Router()

//O router é uma função do express.// 
//Para chamar o router precisa do express, porque o router está dentro o código express.//

const {indexPage} = require("../controllers/indexControllers")

//Foi no código controllers e importou para o routes.//

router.get("/", (req,res) => {
    indexPage(req,res)
})

//Enviando o código res.render,como indexPage, para o usuario.//
//Get: enviar, Post: pedir.//

module.exports = router

//Exportando router.//