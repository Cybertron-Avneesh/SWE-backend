const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');
var my_id;
var my_level;
exports.Fees = async function (req, res) {
    const action = req.query.action;
    my_id = req.body.my_id;
    my_level = req.body.my_level;
    if (action == 1) {
        var addFeeStatus = await addFees(req, res);

         return addFeeStatus;
    }
    else if (action == 2) {

        var listFeeStatus =await listFees(req, res)

        return listFeeStatus;
        // return listProgramStatus;
    }
    else if (action == 3){
        var updateFeeStatus = await updateFees(req,res);

        return updateFeeStatus;
    }

}


async function addFees(req,res){
    const enrollment_id = req.body.enrollment_id;
    const semester_number = req.body.semester_number;
    const fee_status = req.body.fee_status;
    const payment_date = req.body.payment_date;

    // if(!enrollment_id) enrollment_id = "";
    const client = await Client();
    const log_message = `Fee of student : ${enrollment_id}, added for sem : ${semester_number} by ${my_id}`;
    
    await client
        .query('INSERT INTO fees VALUES($1,$2,$3,$4)', [enrollment_id, semester_number,fee_status, payment_date])
        .then(response => {
            res.status(200).send(`Fee for : ${enrollment_id} added successfully`)
            createlog(my_id, getuserType(my_level), log_message)

             ret = { msg: "Fees added" };

        })
        .catch(err => {
            res.status(400).send("Unable to add fees")
            console.log(`Fee_add_Err : ${err}`)
             ret = { msg: "Fess not added " }

        })
    await client.release();
    return ret;
}

async function listFees(req, res) {


    var enrollment_id = req.body.enrollment_id;
    var log_message;
    var queryString;
    if(enrollment_id===""){
        log_message = `Dues Statues viewed by ${my_id}`;
        queryString = 'SELECT * FROM fees';
    }
    else{
        log_message = `Fee status of ${enrollment_id} viewed by ${my_id}`;
        queryString = `SELECT * FROM fees WHERE enrollment_id='${enrollment_id}'`;

    }

    const client = await Client();
    var ret;
    await client
        .query(queryString)
        .then(response => {
            res
                .status(200)
                .json({
                    Fees: response.rows
                })
                .end();
            createlog(my_id, getuserType(my_level), log_message)

            if(enrollment_id==="")
            ret = { msg: "Listed succesfull for all student" }
            else
            ret = { msg: "Listed succesfull for Specific student" }

        })
        .catch(err => {
            res.status(400).send("Unable to list Fees status")
            console.log(`FeeListErr : ${err}`)
            // ret = { msg: "Listing unsuccessful" }
        })
    await client.release();
    return ret;

}

async function updateFees(req,res){
    const enrollment_id = req.body.enrollment_id;
    const fee_status = req.body.fee_status;
    const semester_number = req.body.semester_number;
    const payment_date = req.body.payment_date;

    const log_message = `Fee status for : '${enrollment_id}' changed to : ${fee_status} by ${my_id}`;


    const client = await Client();
    var ret;
    await client
        .query('UPDATE fees SET fee_status=$3, payment_date=$4 WHERE enrollment_id=$1 AND semester_number=$2', [enrollment_id,semester_number,fee_status, payment_date])
        .then(response => {
            res.status(200).send(`Fee Status for : ${enrollment_id} updated successfully`)
            createlog(my_id, getuserType(my_level), log_message)
            ret = { msg: "Student Fee Status updated" }
        })
        .catch(err => {
            res.status(400).send("Unable to update student's fee status")
            ret = { msg: "Student fee status not updated" }
        })

    await client.release();

    return ret;
}