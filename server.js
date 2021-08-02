const express = require('express');

const app = express();

const ideas = [
    {
        img: "https://image.flaticon.com/icons/png/512/2983/2983223.png",
        title: "Rock",
        category: "Música",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: ""
    },
    {
        img: "https://image.flaticon.com/icons/png/512/2983/2983256.png",
        title: "Cursos de Astronomia",
        category: "Astronomia",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: ""
    },
    {
        img: "https://image.flaticon.com/icons/png/512/2983/2983200.png",
        title: "Jogos de Video game",
        category: "Games",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: ""
    },
    {
        img: "https://image.flaticon.com/icons/png/512/2983/2983252.png",
        title: "Receitas de comidas",
        category: "Gastronomia",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: ""
    },
]

app.use(express.static('public'));

// Configuration nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure("views", {
    express: app,
    noCache: true
})

app.get("/", (req, res) => {
    return res.render("index.html", { ideas });
})

app.get("/ideias", (req, res) => {
    return res.render("ideias.html");
})

app.listen(3333, () => console.log("Serving is Running!"));