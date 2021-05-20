const { Client } = require('../../utils/db.js');
const { createlog, getuserType } = require('../logs.js');


var my_id;
var my_level;

exports.resultCompilation = async function (req, res) {
    const action = req.query.action;
    my_id = req.body.my_id;
    my_level = req.body.my_level;
    if(action==1){
       var addResultStatus= addResult(req,res);
       return addResultStatus;
    }else if(action==2){

        var listResultStatus= listResult(req,res);
        return listResultStatus;
    }

}

async function addResult(req,res){
    const enrollment_id = req.body.enrollment_id;
    const semester_number = req.body.semester_number;
    const total_credits = req.body.total_credits;
    const sgpi = req.body.sgpi;
    const medal = req.body.medal;
    const client = await Client();
    const log_message = `Result added for : '${enrollment_id}', by ${my_id}`;

    await client
        .query('INSERT INTO results VALUES($1,$2,$3,$4,$5)', [enrollment_id, semester_number,total_credits,sgpi,medal])
        .then(response => {
         //  console.log(log_message);
            res.status(200).send(`Result added successfully`)
            createlog(my_id, getuserType(my_level), log_message)

             ret = { msg:"results : Added" }
           // console.log(ret);
        })
        .catch(err => {
            res.status(400).send("Unable to add result")
            console.log(`resultAddError : ${err}`)
             ret = { msg: "error " }

        })
     
    await client.release();
    return ret;
   
}

async function listResult(req, res) {

    const log_message = `Results compiled by ${my_id}`;
    const semester_number = req.body.semester_number;

    const client = await Client();
    var ret;
    await client
        .query('SELECT * FROM results WHERE semester_number=$1',[semester_number])
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
            res.status(400).send("Unable to list results")
            // ret = { msg: "Listing unsuccessful" }
        })
    await client.release();
    return ret;

}