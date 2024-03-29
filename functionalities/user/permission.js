const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');

const { createlog, getuserType } = require('../logs.js');

exports.grantRevoke = async function (req, res) {
    const has_access = req.body.has_access;
    const user_id = req.body.user_id;
    const my_id = req.body.my_id;
    const admin_level = req.body.admin_level;

    var log_message;
    if (has_access == 1) log_message = `Access Granted to ${user_id}`;
    else log_message = `Access Revoked from ${user_id}`;


    var query = `UPDATE user_table SET has_access=${has_access} WHERE user_id='${user_id}'`;
    // console.log(query)
    var ret ;
    const client = await Client();
    await client
        .query(query)
        .then(response => {
            res
                .status(200)
                .json({
                    msg: log_message
                })
                .end();
            createlog(my_id, getuserType(admin_level), log_message);
            if(has_access==1)
            ret = { msg :"Access Granted"};
            else
            ret ={ msg :"Access Revoked"};
            
        })
        .catch(err => {
            console.log(`${err}`)
            res
                .status(400)
                .json({
                    msg: 'Cannot Update Permission'
                })
                .end();

                ret = {  msg: 'Cannot Update Permission'};
        });
    await client.release();
    return ret;
}