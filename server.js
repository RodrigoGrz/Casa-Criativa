// Express para criar e configurar o servidor
const express = require('express')
const server = express()

// Coonfigurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))


// Configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, 
})

const ideas = [
    {
        img: "https://www.flaticon.com/svg/static/icons/svg/2920/2920226.svg",
        tittle: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/svg/static/icons/svg/1668/1668531.svg",
        tittle: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/svg/static/icons/svg/926/926128.svg",
        tittle: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/svg/static/icons/svg/1142/1142696.svg",
        tittle: "MasterChef",
        category: "Cozinhar",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    }
]

// Criando rota "/"
server.get("/", function(req, res) {

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }
    
    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function(req, res) {

    const reversedIdeas = [...ideas].reverse()

    return res.render("ideias.html", { ideas: reversedIdeas})
})


// Ligar Servidor
server.listen(3000)

/* Para Ligar o servidor em seu pc sem o Visual Studio Code
Vá até seu terminal navegue até a pasta "workshopdev"
e coloque o comando npm start
Acesse no browser http://localhost:3000/ */