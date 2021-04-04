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

    await client.release();



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
        await client.release();

        // return {
        //     name: data.rows[0].name,
        //     photo: data.rows[0].photo,
        //     user_id: data.rows[0].user_id
        // }

        return { msg: 'Authentication Verified' }

    } else {
        res
            .status(400)
            .json({
                msg: "Authentication Failed"
            })
            .end();
        await client.release();

        return { msg: "Authentication Failed" }
    }


}