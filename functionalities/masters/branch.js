const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');

var my_id;
var my_level;

exports.Branch = async function (req, res) {
    const action = req.query.action;
    my_id = req.body.my_id;
    my_level = req.body.my_level;

    if (action == 1) addBranch(req, res)
    else if (action == 2) listBranch(req, res)
    else if (action == 3) updateBranch(req, res)
    else if (action == 4) deleteBranch(req, res)
}

async function addBranch(req, res) {
    const branch_id = req.body.branch_id;
    const branch_name = req.body.branch_name;
    const program_id = req.body.program_id;

    const log_message = `New Branch : '${branch_id}' added in ${program_id} by ${my_id}`;


    const client = await Client();

    await client
        .query('INSERT INTO branch VALUES($1,$2,$3)', [branch_id, program_id, branch_name])
        .then(response => {
            res.status(200).send(`Program : ${branch_name} added successfully`)
            createlog(my_id, getuserType(my_level), log_message)
        })
        .catch(err => {
            res.status(400).send("Unable to add branch")
            console.log(`programAddError : ${err}`)
        })

    await client.end();

}
async function listBranch(req, res) {
    const program_id = req.body.program_id;

    const log_message = `Branch List Viewed by ${my_id}`;


    const client = await Client();

    await client
        .query('SELECT * FROM branch WHERE program_id=$1', [program_id])
        .then(response => {
            res
                .status(200)
                .json({
                    branches: response.rows
                })
                .end();
            createlog(my_id, getuserType(my_level), log_message)
        })
        .catch(err => {
            res.status(400).send("Unable to List branch")
        })

    await client.end();

}
async function updateBranch(req, res) {
    const branch_id = req.body.branch_id;
    const branch_name = req.body.branch_name;

    const log_message = `Branch : '${branch_id}' updated by ${my_id}`;


    const client = await Client();

    await client
        .query('UPDATE branch SET branch_name=$2 WHERE branch_id=$1', [branch_id, branch_name])
        .then(response => {
            res.status(200).send(`Branch : ${branch_id} updated successfully`)
            createlog(my_id, getuserType(my_level), log_message)
        })
        .catch(err => {
            res.status(400).send("Unable to update branch")
        })

    await client.end();

}
async function deleteBranch(req, res) {
    const branch_id = req.body.branch_id;

    const log_message = `Branch : '${branch_id}' removed by ${my_id}`;


    const client = await Client();

    await client
        .query('DELETE FROM branch WHERE branch_id=$1', [branch_id])
        .then(response => {
            res.status(200).send(`Branch : ${branch_id} removed successfully`)
            createlog(my_id, getuserType(my_level), log_message)
        })
        .catch(err => {
            res.status(400).send("Unable to remove branch")
        })

    await client.end();

}