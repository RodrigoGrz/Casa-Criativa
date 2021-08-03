const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(() => {

    // Criar a tabela
    // db.run(`CREATE TABLE IF NOT EXISTS ideas(
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     image TEXT,
    //     title TEXT,
    //     category TEXT,
    //     description TEXT,
    //     link TEXT
    // );`);

    // Inserir dado na tabela
//     const query = `
//     INSERT INTO ideas(
//         image,
//         title,
//         category,
//         description,
//         link
//     ) VALUES (?,?,?,?,?);
// `;
//     const values = [
//         "https://image.flaticon.com/icons/png/512/2983/2983256.png",
//         "Cursos de Astronomia",
//         "Astronomia",
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         "https://rocketseat.com.br"
//     ];

//     db.run(query, values, (err) => {
//         if(err) return console.log(err)

//         console.log(this);
//     });

    // Deletar um dado da tabela
    // db.run(`DELETE FROM ideas WHERE id = ?`, (err) => {
    //     if(err) return console.log(err);
    // });

    // Consultar dados na tabela
    // db.all(`SELECT * FROM ideas`, (err, rows) => {
    //     if(err) return console.log(err);

    //     console.log(rows);
    // });


    

});

module.exports = db;