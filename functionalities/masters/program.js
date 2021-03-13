const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');
var my_id;
var my_level;

exports.Program = async function (req, res) {
    const action = req.query.action;
    my_id = req.body.my_id;
    my_level = req.body.my_level;

    if (action == 1) addProgram(req, res)
    else if (action == 2) listProgram(req, res)
    else if (action == 3) updateProgram(req, res)
    else if (action == 4) deleteProgram(req, res)


}

async function addProgram(req, res) {
    const program_id = req.body.program_id;
    const program_name = req.body.program_name;
    const log_message = `New Program '${program_id}' added by ${my_id}`;


    const client = await Client();

    await client
        .query('INSERT INTO program VALUES($1,$2)', [program_id, program_name])
        .then(response => {
            res.status(200).send(`Program : ${program_name} added successfully`)
            createlog(my_id, getuserType(my_level), log_message)
        })
        .catch(err => {
            res.status(400).send("Unable to add program")
            console.log(`programAddError : ${err}`)
        })
    await client.end();

}
async function listProgram(req, res) {

    const log_message = `Programs List viewed by ${my_id}`;


    const client = await Client();

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
        })
        .catch(err => {
            res.status(400).send("Unable to list programs")
        })
    await client.end();

}
async function updateProgram(req, res) {
    const program_id = req.body.program_id;
    const program_name = req.body.program_name;
    const log_message = `Program : '${program_id}' name updated to : ${program_name} by ${my_id}`;


    const client = await Client();

    await client
        .query('UPDATE program SET program_name=$2  WHERE program_id=$1', [program_id, program_name])
        .then(response => {
            res.status(200).send(`Program : ${program_id} updated successfully`)
            createlog(my_id, getuserType(my_level), log_message)
        })
        .catch(err => {
            res.status(400).send("Unable to update program")
        })
    await client.end();

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