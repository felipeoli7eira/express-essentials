/* modules */

const express = require("express")
const app = express()

const style = "text-align: center ; font-weight: 100 ; margin-top: 2rem ;"

/* Rota simples */

app.get("/", (req, res) => {

    res.send("<h1>home page</h1>") // Resposta
})

/* Rota com route-params */

app.get("/welcome/:username", (req, res) => {

    res.send(`<h1 style="${style}">welcome ${req.params.username} :)</h1>`)
})

/* Rota com parâmetros opcionais */

app.get("/articles/:category?", (req, res) => {

    if(req.params.category)
    {
        res.send(`<h1 style="${style}">Artigos sobre <b>${req.params.category}</b></h1>`)
    }
    else
    {
        res.send(`<h1 style="${style}">Artigos em geral</h1>`)
    }
})

/* Query params (Não amigáveis) */

app.get("/consulta", (req, res) => {

    if(req.query["id"])
    {
        res.send(`<h1 style="${style}">Buscar pelo ID ${req.query["id"]}</h1>`)
    }
    else
    {
        res.send(`<h1 style="${style}">Buscar todos</h1>`)
    }
})

/* starting server */

app.listen(8080, (error) => {

    if(error)
    {
        console.log(error)
        return false
    }

    console.log("running")
    return true
})