const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');
var my_id;
var my_level;

exports.Semester = async function (req, res) {
    const action = req.query.action;
    my_id = req.body.my_id;
    my_level = req.body.my_level;

    if (action == 1) addSemester(req, res)
    else if (action == 2) listSemester(req, res)
    // else if (action == 3) updateSemester(req, res)
    else if (action == 4) deleteSemester(req, res)
}
async function addSemester(req, res) {
    const semester_id = req.body.semester_id;
    const branch_id = req.body.branch_id;
    const semester_num = req.body.semester_num;

    const log_message = `New semester '${semester_id}' added in '${branch_id}' by ${my_id}`;


    const client = await Client();

    await client
        .query('INSERT INTO semester VALUES($1,$2,$3)', [semester_id, branch_id, semester_num])
        .then(response => {
            res.status(200).send(`Semester : ${semester_id} added successfully`)
            createlog(my_id, getuserType(my_level), log_message)
        })
        .catch(err => {
            res.status(400).send("Unable to add semester")
            console.log(`programAddError : ${err}`)
        })

    await client.end();

}
async function listSemester(req, res) {
    const branch_id = req.body.branch_id;

    const log_message = `Semester List Viewed by ${my_id}`;


    const client = await Client();

    await client
        .query('SELECT * FROM semester WHERE branch_id=$1', [branch_id])
        .then(response => {
            res
                .status(200)
                .json({
                    semesters: response.rows
                })
                .end();
            createlog(my_id, getuserType(my_level), log_message)
        })
        .catch(err => {
            res.status(400).send("Unable to List semester")
        })

    await client.end();

}
// async function updateSemester(req, res) {
//     const branch_id = req.body.branch_id;
//     const semester_num = req.body.branch_name;
//     const semester_id = req.body.semester_id;

//     const log_message = `Semester : '${semester_id}' updated by ${my_id}`;


//     const client = await Client();

//     await client
//         .query('UPDATE semester SET branch_id=$2,semester_num=$3 WHERE semester_id=$1', [semester_id, branch_id, semester_num])
//         .then(response => {
//             res.status(200).send(`Semester : ${semester_id} updated successfully`)
//             createlog(my_id, getuserType(my_level), log_message)
//         })
//         .catch(err => {
//             res.status(400).send("Unable to update semester")
//         })

//     await client.end();

// }
async function deleteSemester(req, res) {
    const semester_id = req.body.semester_id;

    const log_message = `Semester : '${semester_id}' removed by ${my_id}`;


    const client = await Client();

    await client
        .query('DELETE FROM semester WHERE semester_id=$1', [semester_id])
        .then(response => {
            res.status(200).send(`Semester : ${semester_id} removed successfully`)
            createlog(my_id, getuserType(my_level), log_message)
        })
        .catch(err => {
            res.status(400).send("Unable to remove semester")
        })

    await client.end();

}