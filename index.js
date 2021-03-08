const { createdb } = require('./createDatabase.js');

const { Pool } = require('pg');
const express = require('express');
const app = express();
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'amsaaa',
    password: '<your PG password>',
    port: 5433

})

async function init() {
    var client;
    try {
        client = await pool.connect();
        console.log("CONNECTED");
    } catch (err) {
        console.error(err);
    }

    createdb(client);

    app.listen(5440, () => {
        console.log("Listening on port 4000")
    })
}
init();


