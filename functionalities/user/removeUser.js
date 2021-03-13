const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');


exports.removeUser = async function (req, res) {
    const user_id = req.body.user_id;
    const my_id = req.body.my_id;
    const my_level = req.body.my_level;

    const log_message = `User : ${user_id} Removed By ${my_id}`;

    const client = await Client();



    await client
        .query(`DELETE FROM user_table WHERE user_id=$1`, [user_id])
        .then(resData => {
            res.status(200).send(` '${user_id}' Removed`);
            createlog(my_id, getuserType(my_level), log_message);
        })
        .catch(err => {
            console.error(err);
            res.status(400).send(`User Not found`);
        });
    await client.end();

    return;


}