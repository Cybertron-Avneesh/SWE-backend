const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');
var my_id;
var my_level;
exports.Disciplinary = async function (req, res) {
    const action = req.query.action;
    my_id = req.body.my_id;
    my_level = req.body.my_level;
    if (action == 1) {
        var addDisplinaryStatus = await addDisciplinary(req, res);

         return addDisplinaryStatus;
    }
    else if (action == 2) {

        var listDisplinaryStatus = listDisciplinary(req, res)
         return listDisplinaryStatus;
    }


}


async function addDisciplinary(req,res){
    const enrollment_id = req.body.enrollment_id;
    const action = req.body.action;
    const reason = req.body.reason;


    const client = await Client();
    const log_message = `Disciplinary action : '${action}' for : ${enrollment_id}, taken by ${my_id}`;

    await client
        .query('INSERT INTO disciplinary_actions VALUES($1,$2,$3,NOW())', [enrollment_id, action,reason])
        .then(response => {
         //  console.log(log_message);
            res.status(200).send(`Disciplinary action : ${action} taken successfully`)
            createlog(my_id, getuserType(my_level), log_message)

             ret = { msg: "Disciplinary action : Added" }
           // console.log(ret);
        })
        .catch(err => {
            res.status(400).send("Unable to take action")
            // console.log(`programAddError : ${err}`)
             ret = { msg: "error " }

        })
    await client.release();

    return ret;
}

async function listDisciplinary(req, res) {

    const log_message = `Disciplinary List viewed by ${my_id}`;


    const client = await Client();
    var ret;
    await client
        .query('SELECT * FROM disciplinary_actions')
        .then(response => {
            res
                .status(200)
                .json({
                    actions: response.rows
                })
                .end();
            createlog(my_id, getuserType(my_level), log_message)
            ret = { msg: "Listing succesfull" }
        })
        .catch(err => {
            res.status(400).send("Unable to list actions")
            // ret = { msg: "Listing unsuccessful" }
        })
    await client.release();
    return ret;

}