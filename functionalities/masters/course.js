const { pool } = require('../../utils/config.js');
const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');
var my_id;
var my_level;

exports.Course = async function (req, res) {
    const action = req.query.action;
    my_id = req.body.my_id;
    my_level = req.body.my_level;

    if (action == 1) {

        var addCourseStatus = addCourse(req, res);
        return addCourseStatus;
    }
    else if (action == 2) {

        var listCourseStatus = listCourse(req, res)
        return listCourseStatus;
    }
    else if (action == 3) {
        var updateCourseStatus = updateCourse(req, res)
        return updateCourseStatus;
    }
    else if (action == 4) {

        var deleteCourseStatus = deleteCourse(req, res)

        return deleteCourseStatus;
    }
}

async function addCourse(req, res) {
    const semester_id = req.body.semester_id;
    const branch_id = req.body.branch_id;
    const course_id = req.body.course_id;
    const credits = req.body.credits;
    const course_name = req.body.course_name;

    var ret ;
    const my_id = req.body.my_id;
    const my_level = req.body.my_level;
    const log_message = `New course :'${course_name}' added in branch :'${branch_id}' for semester : ${semester_id} by user : ${my_id}`;


    const client = await Client();

    await client
        .query('INSERT INTO course VALUES($1,$2,$3,$4,$5)', [course_id, semester_id, branch_id, course_name, credits])
        .then(response => {
            res.status(200).send(`Course : ${course_name} added successfully`)
            createlog(my_id, getuserType(my_level), log_message)

            ret = { msg :"Course Added"}
        })
        .catch(err => {
            res.status(400).send("Unable to add course")
            console.log(`programAddError : ${err}`)
            // createlog(my_id, getuserType(my_level), `programAddError : ${err}`)

            ret = { msg:"Unable to add course" }
        })

    await client.release();

    return ret ;

}
async function listCourse(req, res) {
    const branch_id = req.body.branch_id;

    const log_message = `Courses List Viewed by ${my_id}`;


    const client = await Client();
    var ret ; 
    await client
        .query('SELECT * FROM course')
        .then(response => {
            res
                .status(200)
                .json({
                    courses: response.rows
                })
                .end();
            createlog(my_id, getuserType(my_level), log_message)
            ret = { msg :"Course listed"}
        })
        .catch(err => {
            res.status(400).send("Unable to List courses")
            ret = { msg :"Unable to list course "}
        })

    await client.release();

    return ret;

}
async function updateCourse(req, res) {
    const course_id = req.body.course_id;
    const course_name = req.body.course_name;
    const credits = req.body.credits;
    const semester_id = req.body.semester_id;


    const log_message = `Course : '${course_id}' updated by ${my_id}`;


    const client = await Client();
    var ret ; 
    await client
        .query('UPDATE course SET credits=$2,course_name=$3 WHERE course_id=$1 AND semester_id=$4', [course_id, credits, course_name, semester_id])
        .then(response => {
            res.status(200).send(`Course : ${course_id} updated successfully`)
            createlog(my_id, getuserType(my_level), log_message)
            ret = { msg :"Course updated "}
        })
        .catch(err => {
            res.status(400).send("Unable to update course")
            ret = { msg : "Unable to update course"}
        })

    await client.release();
    return ret;

}
async function deleteCourse(req, res) {
    const course_id = req.body.course_id;
    const semester_id = req.body.semester_id;

    const log_message = `Course : '${course_id}' removed by ${my_id}`;


    const client = await Client();
    var ret ; 
    await client
        .query('DELETE FROM course WHERE course_id=$1 AND semester_id=$2', [course_id, semester_id])
        .then(response => {
            res.status(200).send(`Course : ${course_id} removed successfully`)
            createlog(my_id, getuserType(my_level), log_message)
            ret = { msg :"Course deleted "}
        })
        .catch(err => {
            res.status(400).send("Unable to remove course")
            ret = { msg :"Course not deleted "}
        })

    await client.release();

    return ret;

}