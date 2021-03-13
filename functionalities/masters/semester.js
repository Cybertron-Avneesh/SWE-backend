const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');

exports.addSemester = async function (req, res) {
    const semester_id = req.body.semester_id;
    const branch_id = req.body.branch_id;
    const semester_num = req.body.semester_num;

    const my_id = req.body.my_id;
    const my_level = req.body.my_level;
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
            // createlog(my_id, getuserType(my_level), `programAddError : ${err}`)
        })

    await client.end();

}