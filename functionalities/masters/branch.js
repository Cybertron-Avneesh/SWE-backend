const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');

exports.addBranch = async function (req, res) {
    const branch_id = req.body.branch_id;
    const branch_name = req.body.branch_name;
    const program_id = req.body.program_id;

    const my_id = req.body.my_id;
    const my_level = req.body.my_level;
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
            // createlog(my_id, getuserType(my_level), `programAddError : ${err}`)
        })

    await client.end();

}