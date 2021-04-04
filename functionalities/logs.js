const { pool } = require('../utils/config.js');
const { Client } = require('../utils/db.js');


exports.getuserType = function (admin_level) {
    if (admin_level == 0) return 'operating user';
    else if (admin_level == 1) return 'priviledged user';
    else if (admin_level == 2) return 'system admin';
    else return 'Invalid admin';
}

exports.createlog = async function (user_id, user_type, action) {
    const client = await Client();

    var ret;
    await client
        .query('INSERT INTO logs VALUES ($1,$2,$3,NOW())', [user_id, user_type, action])
        .then(
             ret={msg: "logs created"}
        )
        .catch((err) => console.log(`Log Error : ${err}`));
    client.release();
    // await client.end();

    return ret;
}

exports.getlog = async function(req,res){
    const client = await Client();
    var ret;
    await client
        .query('SELECT * FROM logs')
        .then(response => {
            // console.log(response.rows);
            res
                .status(200)
                .json({
                    logs: response.rows
                })
                .end();
            ret= { msg: "logs fetched"}

        })
        .catch(err => {
            console.log(`${err}`)
            res
                .status(400)
                .json({
                    msg: 'Cannot Get Users List'
                })
                .end();
            ret= { msg: 'Cannot Get Users List' }

        });
    client.release();
    // await client.end();
    return ret;
}