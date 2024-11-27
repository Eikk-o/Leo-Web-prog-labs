/*
Quick Review:

Step#1 - Run these commands:
- npm init -y
- npm i express
- npm i mysql
- npm i --save-dev nodemon

Step#2 - Modify the JSON file "package.json"
- Adding this line => "start":"nodemon index.js"

Step#3 - Start your code inside the js file
- Required task to be done: 
    > Create operation:
        - create your database
        - creating/adding a new record to your database
    > Reading operation:
        - select * from your table
- You can skip the "update" and "delete" operation (optional)


Step#4 - Running and testing the code file: npm start

Step#5 - Submit the code file to GitHub

*/


const express = require('express');
const mysql = require('mysql2');
const app = express(); 

const PORT = 3000; 


const dbCon = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    // we will create this database through our application first,
    // Then activate the following property after creating our database:
    database: "node_practical"
});



dbCon.connect((err) => {
    // Check if there is an error
    if (err) {
        throw err;
    }
    console.log("MySQL Connection is DONE!");
});



// Database sql_practical has been created in MySQL WorkBench

/*
app.post('/add', (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(query, [name, email], (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Error adding user', error: err });
        } else {
            res.status(201).send({ message: 'User added successfully', userId: result.insertId });
        }
    });
});
*/


app.get('/records', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send({ message: 'Error fetching records', error: err });
        } else {
            res.status(200).json(results);
        }
    });
});

/*
app.get('/record/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Error fetching record', error: err });
        } else if (result.length === 0) {
            res.status(404).send({ message: 'User not found' });
        } else {
            res.status(200).json(result[0]);
        }
    });
});
*/


/*

// Insert a user:
app.get('/adduser', (req, res) => {
    // creating an object:
    // let user = { first_name: 'Alex', last_name: 'Chow', email: 'alexchow@yahoo.ca'};
    let firstName = 'Alex';
    let lastName = 'Chow';
    let email = 'alexchow@yahoo.ca';
    // To pass data to an SQL statement, you use the question marks (?) as the placeholders.
    // acting as a prepared statement
    const sql = `INSERT INTO users (first_name, last_name, email) VALUES (?, ?, ?);`;

    // Creating queries 
    dbCon.query(sql, [firstName, lastName, email], (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('One user was inserted');
    });
});


// Select:
app.get('/selectall', (req, res) => {
    const sql = `SELECT * FROM users`;

    // Creating queries 
    dbCon.query(sql, (err, records) => {
        if (err) {
            throw err;
        }
        console.log(records);
        res.send('All users');
    });
});

// Select individual user:
// passing the id as parameter
app.get('/select/:id', (req, res) => {
    const sql = `SELECT * FROM users WHERE user_id= ${req.params.id}`;
    // Creating queries 
    dbCon.query(sql, (err, record) => {
        if (err) {
            throw err;
        }
        console.log(record);
        res.send('One user');
    });
});

// Delete User:
app.get('/delete/:id', (req, res) => {
    const sql = `DELETE FROM users WHERE user_id= ${req.params.id}`;
    // Creating queries 
    dbCon.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('One record was deleted');
    });
});

*/
