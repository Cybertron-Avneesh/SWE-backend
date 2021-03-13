const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');

exports.addProgram = async function (req, res) {
    const program_id = req.body.program_id;
    const program_name = req.body.program_name;
    const my_id = req.body.my_id;
    const my_level = req.body.my_level;
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
            // createlog(my_id, getuserType(my_level), `programAddError : ${err}`)
        })

    await client.end();

}