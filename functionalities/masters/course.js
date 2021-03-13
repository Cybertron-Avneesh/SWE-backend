const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');

exports.addCourse = async function (req, res) {
    const semester_id = req.body.semester_id;
    const branch_id = req.body.branch_id;
    const course_id = req.body.course_id;
    const credits = req.body.credits;
    const course_name = req.body.course_name;


    const my_id = req.body.my_id;
    const my_level = req.body.my_level;
    const log_message = `New course :'${course_name}' added in branch :'${branch_id}' for semester : ${semester_id} by user : ${my_id}`;


    const client = await Client();

    await client
        .query('INSERT INTO course VALUES($1,$2,$3,$4,$5)', [course_id, semester_id, branch_id, course_name, credits])
        .then(response => {
            res.status(200).send(`Course : ${course_name} added successfully`)
            createlog(my_id, getuserType(my_level), log_message)
        })
        .catch(err => {
            res.status(400).send("Unable to add course")
            console.log(`programAddError : ${err}`)
            // createlog(my_id, getuserType(my_level), `programAddError : ${err}`)
        })

    await client.end();

}