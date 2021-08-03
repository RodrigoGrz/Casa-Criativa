const express = require('express');

const app = express();

const db = require("./db");

// const ideas = [
//     {
//         img: "https://image.flaticon.com/icons/png/512/2983/2983200.png",
//         title: "Jogos de Video game",
//         category: "Games",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         url: ""
//     },
//     {
//         img: "https://image.flaticon.com/icons/png/512/2983/2983223.png",
//         title: "Rock",
//         category: "Música",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         url: ""
//     },
//     {
//         img: "https://image.flaticon.com/icons/png/512/2983/2983202.png",
//         title: "Livros",
//         category: "Cultura",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         url: ""
//     },
//     {
//         img: "https://image.flaticon.com/icons/png/512/2983/2983215.png",
//         title: "Academia",
//         category: "Saúde",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         url: ""
//     }
// ]

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Configuration nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure("views", {
    express: app,
    noCache: true
});

app.get("/", (req, res) => {

    db.all(`SELECT * FROM ideas`, (err, rows) => {
        if(err) return console.log(err);
        
        const reversedIdeas = [...rows].reverse();

        let lastIdeas = [];
        for(idea of reversedIdeas) {
            if(lastIdeas.length < 2) {
                lastIdeas.push(idea);
            }
        }

        return res.render("index.html", { ideas: lastIdeas });
    });

    
});

app.get("/ideias", (req, res) => {
    db.all(`SELECT * FROM ideas`, (err, rows) => {
        if(err) return console.log(err);

        const reversedIdeas = [...rows].reverse();
    
        return res.render("ideias.html", { ideas: reversedIdeas });
    })

});

app.post("/", (req, res) => {
    const query = `
        INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link
        ) VALUES (?,?,?,?,?);
    `;
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,
    ];

    db.run(query, values, (err) => {
        if(err) return console.log(err);

        return res.redirect("/ideias");
    });
});

app.listen(3333, () => console.log("Serving is Running!"));