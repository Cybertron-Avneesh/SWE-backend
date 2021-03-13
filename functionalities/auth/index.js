const { response } = require('express');
const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');

exports.verifyUser = async function (req, res) {
    const user_id = req.body.user_id;
    const password = req.body.password;
    const admin_level = req.body.admin_level;
    const log_message = `${user_id} Logged In`;


    if (!user_id || !password) {


        res.status(400).send({ msg: 'User ID and password are mandatory' });
        return { msg: 'User ID and password are mandatory' }
    }

    const client = await Client();
    var data;


    await client
        .query(`SELECT * FROM ldap NATURAL INNER JOIN user_table WHERE user_id=$1 AND password=$2 AND has_access=1 AND admin_level=$3;`, [user_id, password, admin_level])
        .then((resData) => {
            data = resData;
        })
        .catch(err => console.log(`${err}`))

    await client.end();



    if (data.rows.length == 1) {
        res
            .status(200)
            .json({
                name: data.rows[0].name,
                photo: data.rows[0].photo,
                user_id: data.rows[0].user_id
            })
            .end();

        createlog(user_id, getuserType(admin_level), log_message);
        await client.end();

        return {
            name: data.rows[0].name,
            photo: data.rows[0].photo,
            user_id: data.rows[0].user_id
        }

    } else {
        res
            .status(400)
            .json({
                msg: "Authentication Failed"
            })
            .end();
        await client.end();

        return { msg: "Authentication Failed" }
    }


}

exports.createUser = async function (req, res) {
    const user_id = req.body.user_id;
    const name = req.body.name;
    const photo = req.body.photo;
    const admin_level = req.body.admin_level;
    const my_id = req.body.my_id;
    const my_level = req.body.my_level;

    const log_message = `New ${getuserType(admin_level)}  :: ${user_id} Added By ${my_id}`;

    // console.log(user_id, name, admin_level)

    if (!user_id || !name || admin_level == undefined) {

        return res.status(400).send({ msg: 'userID,name and Admin level are mandatory' });
    }

    const client = await Client();
    var data;

    await client
        .query(`SELECT * FROM ldap WHERE user_id=$1`, [user_id])
        .then(response => { data = response })
        .catch(err => console.log(`${err}`))


    if (data.rows.length == 1) {
        await client
            .query(`INSERT INTO user_table VALUES ('${user_id}','${name}','${photo}',${admin_level},1);`)
            .then(resData => {
                res.status(200).send(` '${user_id}' is now ${getuserType(admin_level)}`);
                createlog(my_id, getuserType(my_level), log_message);
            })
            .catch(err => {
                console.error(err);
                res.status(400).send(`${err}`);
            });
        await client.end();

        return;
    } else {
        await client.end();

        return res
            .status(400)
            .json({
                msg: "User ldap not found"
            })
            .end();
    }



}