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

db.query('SELECT * FROM candidates', (err, rows) => {
    console.log(rows);
});

//Default response for any other request (NOT FOOUNDDD)
app.use((req,res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});