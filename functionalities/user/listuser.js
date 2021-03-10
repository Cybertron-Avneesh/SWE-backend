const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');

const { createlog, getuserType } = require('../logs.js');

exports.listUser = async function (req, res) {
    const admin_level = req.body.admin_level;
    const log_message = "Viewed list of users";
    const my_id = req.body.my_id;
    const my_level = req.body.my_level;
    const name = req.body.name;


    var query = `SELECT (name,photo,admin_level,has_access) FROM user_table WHERE admin_level=${admin_level}`;
    if (admin_level == 3) query = `SELECT (name,photo,admin_level,has_access) FROM user_table`;
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

            createlog(my_id, name, getuserType(my_level), log_message);

        })
        .catch(err => {
            console.log(`${err}`)
            res
                .status(400)
                .json({
                    msg: 'Cannot Get Users List'
                })
                .end();
        });
}