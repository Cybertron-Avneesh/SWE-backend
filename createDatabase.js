const { pool } = require('./utils/db.js');


exports.createdb = async function () {
    var client;
    try {
        client = await pool.connect();
        console.log("CONNECTED");
    } catch (err) {
        console.error(err);
    }

    try {
        await client
            .query('CREATE TABLE ldap(user_id VARCHAR(100) NOT NULL,password VARCHAR(100) NOT NULL,unique_id INT PRIMARY KEY);')
            .then(res => console.log("Table Created"))
            .catch(err => console.log(`${err}`));

        await client
            .query('CREATE TABLE user_table(unique_id INT REFERENCES ldap(unique_id) ON DELETE CASCADE UNIQUE,name VARCHAR(100),photo VARCHAR(100),admin_level INT NOT NULL,has_access INT NOT NULL);')
            .then(res => console.log("Table Created"))
            .catch(err => console.log(`${err}`));

        res.status(200).send("DB created");
    } catch (err) {
        console.log(`${err}`);
        res.status(400).send("Unable to create DB");
    }

}