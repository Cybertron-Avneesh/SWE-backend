const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');

exports.listUser = async function (req, res) {
    const admin_level = req.query.admin_level;
    const log_message = "Viewed list of users";
    const my_id = req.body.my_id;
    const my_level = req.body.my_level;

    var ret;
    // console.log(admin_level)
    var query = `SELECT * FROM user_table WHERE admin_level=${admin_level}`;
    if (admin_level == 3) query = `SELECT * FROM user_table`;
    const client = await Client();
    await client
        .query(query)
        .then(response => {
            // console.log(response.rows);
            res
                .status(200)
                .json({
                    users: response.rows
                })
                .end();
            createlog(my_id, getuserType(my_level), log_message);
           // console.log(response.rows);

            //return { users: response.rows };
           ret=  { msg: 'Users Listed'}

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