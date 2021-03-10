const { pool } = require('./utils/config.js');


exports.fillDummydata = async function (req, res) {

    var client;
    try {
        client = await pool.connect();
        console.log("CONNECTED");
    } catch (err) {
        console.error(err);
    }

    try {

        //ldap
        await client
            .query("INSERT INTO ldap (user_id,password,unique_id) VALUES ('iib2019050','iib2019050',1234567890)")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password,unique_id) VALUES ('iib2019051','iib2019051',1234567891)")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password,unique_id) VALUES ('iib2019052','iib2019052',1234567892)")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password,unique_id) VALUES ('iib2019053','iib2019053',1234567893)")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password,unique_id) VALUES ('iib2019054','iib2019054',1234567894)")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password,unique_id) VALUES ('iib2019055','iib2019055',1234567895)")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));

        //system admin
        await client
            .query("INSERT INTO user_table (unique_id,name,admin_level,has_access) VALUES (1234567890,'Mr.X',2,1)")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));

        res.status(200).send("Data filled");

    } catch (err) {
        res.status(503).send(`Error : ${err}`);
    }

}