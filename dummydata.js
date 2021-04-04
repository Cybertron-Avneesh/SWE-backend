const { pool } = require('./utils/config.js');
const { Client } = require('./utils/db.js');



exports.fillDummydata = async function (req, res) {

    const client = await Client();
    try {

        //ldap
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019050','iib2019050')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019051','iib2019051')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019052','iib2019052')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019053','iib2019053')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019054','iib2019054')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019055','iib2019055')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019056','iib2019056')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019057','iib2019057')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019058','iib2019058')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019059','iib2019059')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019060','iib2019060')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));

        //system admin
        await client
            .query("INSERT INTO user_table (user_id,name,admin_level,has_access) VALUES ('iib2019050','admin1',2,1)")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));

        res.status(200).send("Data filled");
        await client.release();

    } catch (err) {
        res.status(503).send(`Error : ${err}`);
    }

}