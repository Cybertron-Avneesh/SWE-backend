const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');
var my_id;
var my_level;
exports.Notification = async function (req, res) {
    const action = req.query.action;
    my_id = req.body.my_id;
    my_level = req.body.my_level;
    if (action == 1) {
        var addNotificaitonStatus = await addNotification(req, res);

        return addNotificaitonStatus;
    }
    else if (action == 2) {

        var listNotificaitonStatus = listNotification(req, res)
         return listNotificaitonStatus;
    }


}


async function addNotification(req,res){
    var enrollment_id = req.body.enrollment_id;
    const description = req.body.description;
    if(!enrollment_id) enrollment_id = "";
    const client = await Client();
    const log_message = `Notification : '${description}' for : ${enrollment_id}, added by ${my_id}`;

    await client
        .query('INSERT INTO notification VALUES($1,$2,NOW())', [enrollment_id, description])
        .then(response => {
            res.status(200).send(`Notification : ${description} sent successfully`)
            createlog(my_id, getuserType(my_level), log_message)

            ret = { msg: "Notification Added" };

        })
        .catch(err => {
            res.status(400).send("Unable to send notification")
            console.log(`Notification_add_rrr : ${err}`)
            // ret = { msg: "error " }

        })
    await client.end();
    return ret;
}

async function listNotification(req, res) {


    const enrollment_id = req.body.enrollment_id;
    var log_message;
    if(enrollment_id!=="")
    log_message = `Notifications received by ${enrollment_id}`;
    else
    log_message = `Notifications received by ${my_id}`;

    const client = await Client();
    var ret;
    await client
        .query('SELECT * FROM notification WHERE enrollment_id=$1 or enrollment_id=$2',[enrollment_id, ""])
        .then(response => {
            res
                .status(200)
                .json({
                    Notifications: response.rows
                })
                .end();
            createlog(my_id, getuserType(my_level), log_message)
            ret = { msg: "Listing succesfull" }
        })
        .catch(err => {
            res.status(400).send("Unable to list actions")
            // ret = { msg: "Listing unsuccessful" }
        })
    await client.end();
    return ret;

}