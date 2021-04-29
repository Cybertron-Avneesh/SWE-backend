const { Client } = require('./utils/db.js');
var client;

async function alter(query, table_name) {

    try {
        await client
            .query(query)
            .then(response => console.log(`Table '${table_name}' ALtered`))
            .catch(err => console.log(`${err}`));
    } catch (err) {
        console.log(`${err}`);
    }

}

exports.alterTable = async function (req, res) {
    try {
        client = await Client();



        /* CREATING TABLES */

        //results
        await alter('ALTER TABLE results ADD COLUMN medal VARCHAR(100)','results')   ;     
        res.status(200).send("TAble Altered");
        await client.release();
    } catch (err) {
        console.log(`${err}`);
        res.status(400).send("Unable to create DB");
    }

}