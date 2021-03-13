const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');
var my_id;
var my_level;

exports.Program = async function (req, res) {
    const action = req.query.action;
    my_id = req.body.my_id;
    my_level = req.body.my_level;

    if (action == 1) {
        var addProgramStatus = await addProgram(req, res);

        return addProgramStatus;
    }
    else if (action == 2) {

        var listProgramStatus = listProgram(req, res)
        return listProgramStatus;
    }
    else if (action == 3) {
        var updateProgramStatus = updateProgram(req, res);
        return updateProgramStatus;
    }
    else if (action == 4) return deleteProgram(req, res)


}

async function addProgram(req, res) {
    const program_id = req.body.program_id;
    const program_name = req.body.program_name;
    const log_message = `New Program '${program_id}' added by ${my_id}`;


    const client = await Client();
    var ret
    await client
        .query('INSERT INTO program VALUES($1,$2)', [program_id, program_name])
        .then(response => {
            res.status(200).send(`Program : ${program_name} added successfully`)
            createlog(my_id, getuserType(my_level), log_message)

            ret = { msg: "programm added" };

        })
        .catch(err => {
            res.status(400).send("Unable to add program")
            console.log(`programAddError : ${err}`)
            ret = { msg: "error " }

        })
    await client.end();
    return ret;

}
async function listProgram(req, res) {

    const log_message = `Programs List viewed by ${my_id}`;


    const client = await Client();
    var ret;
    await client
        .query('SELECT * FROM program')
        .then(response => {
            res
                .status(200)
                .json({
                    programs: response.rows
                })
                .end();
            createlog(my_id, getuserType(my_level), log_message)
            ret = { msg: "Listing succesfull" }
        })
        .catch(err => {
            res.status(400).send("Unable to list programs")
            ret = { msg: "Listing unsuccessful" }
        })
    await client.end();
    return ret;

}
async function updateProgram(req, res) {
    const program_id = req.body.program_id;
    const program_name = req.body.program_name;
    const log_message = `Program : '${program_id}' name updated to : ${program_name} by ${my_id}`;


    const client = await Client();
    var ret
    await client
        .query('UPDATE program SET program_name=$2  WHERE program_id=$1', [program_id, program_name])
        .then(response => {
            res.status(200).send(`Program : ${program_id} updated successfully`)
            createlog(my_id, getuserType(my_level), log_message)
            ret ={ msg : "Update Successfull"}
        })
        .catch(err => {
            res.status(400).send("Unable to update program")
            ret ={ msg : "Update unsuccessfull"}
        })

    await client.end();

    return ret;

}
async function deleteProgram(req, res) {
    const program_id = req.body.program_id;
    const log_message = `Program '${program_id}' Removed by ${my_id}`;


    const client = await Client();

    await client
        .query('DELETE FROM program WHERE program_id=$1', [program_id])
        .then(response => {
            res.status(200).send(`Program : ${program_id} removed successfully`)
            createlog(my_id, getuserType(my_level), log_message)
        })
        .catch(err => {
            res.status(400).send("Unable to remove program")
        })
    await client.end();

}