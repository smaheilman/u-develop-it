const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '7Rdcmnse.',
        database:'election'
    },
    console.log('connected to the election database.')
);

//db.query('SELECT * FROM candidates', (err, rows) => {
//    console.log(rows);
//});

//Get a solo candidate
//db.query('SELECT * From candidates where id=1', (err,row)=> {
//    if (err) {
//        console.log(err);
//    }
//    console.log(row);
//});

//Delete a candidate
//db.query('DELETE from candidates where id=?',1,(err, result) => {
//    if(err){
//        console.log(err);
//    }
//    console.log(result);
//});

//Create a candidate
const sql = `insert into candidates (id, first_name, last_name, industry_connected)
            VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result)=> {
    if(err){
        console.log(err);
    }
    console.log(result);
});

//Default response for any other request (NOT FOOUNDDD)
app.use((req,res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});