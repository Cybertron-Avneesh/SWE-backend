const { pool } = require('./utils/config.js');



async function createTable(query) {
    var client;

    try {
        client = await pool.connect();
        console.log("CONNECTED");
    } catch (err) {
        console.error(err);
    }

    try {
        await client
            .query(query)
            .then(response => console.log("Table Created"))
            .catch(err => console.log(`${err}`));
    } catch (err) {
        console.log(`${err}`);
    }
}

exports.createdb = async function (req, res) {
    try {
        await createTable('CREATE TABLE ldap(user_id VARCHAR(100) NOT NULL,password VARCHAR(100) NOT NULL,unique_id INT PRIMARY KEY);');
        await createTable('CREATE TABLE user_table(unique_id INT REFERENCES ldap(unique_id) ON DELETE CASCADE UNIQUE,name VARCHAR(100),photo VARCHAR(100),admin_level INT NOT NULL,has_access INT NOT NULL);');
        await createTable('CREATE TABLE logs(user_id VARCHAR(100) NOT NULL,name VARCHAR(100) NOT NULL,user_type VARCHAR(100) NOT NULL,action text NOT NULL,time timestamp)');
        res.status(200).send("DB created");
    } catch (err) {
        console.log(`${err}`);
        res.status(400).send("Unable to create DB");
    }

}