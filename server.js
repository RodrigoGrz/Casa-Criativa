const express = require('express');

const app = express();

const ideas = [
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
    {
        img: "https://image.flaticon.com/icons/png/512/2983/2983223.png",
        title: "Rock",
        category: "Música",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: ""
    },
    {
        img: "https://image.flaticon.com/icons/png/512/2983/2983202.png",
        title: "Livros",
        category: "Cultura",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: ""
    },
    {
        img: "https://image.flaticon.com/icons/png/512/2983/2983215.png",
        title: "Academia",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: ""
    }
]

app.use(express.static('public'));

// Configuration nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure("views", {
    express: app,
    noCache: true
})

app.get("/", (req, res) => {

    const reversedIdeas = [...ideas].reverse();

    let lastIdeas = [];
    for(idea of reversedIdeas) {
        if(lastIdeas.length < 2) {
            lastIdeas.push(idea);
        }
    }

    return res.render("index.html", { ideas: lastIdeas });
})

app.get("/ideias", (req, res) => {

    const reversedIdeas = [...ideas].reverse();

    return res.render("ideias.html", { ideas: reversedIdeas });
})

app.listen(3333, () => console.log("Serving is Running!"));