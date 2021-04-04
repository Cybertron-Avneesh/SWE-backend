const { Client } = require('../../utils/db.js');
const { createlog, getuserType } = require('../logs.js');
const url = require('url');

var my_id;
var my_level;

exports.Student = async function (req, res) {
    const action = req.query.action;
    my_id = req.body.my_id;
    my_level = req.body.my_level;
    // console.log(action)
    if (action == 1) {

        var addBranchStatus = addStudent(req, res);
        return addBranchStatus;
    }
    else if (action == 2) {
        var listBranchStatus = listStudent(req, res);
        return listBranchStatus;

    }
    else if (action == 3) {
        var listBranchStatus = updateStudent(req, res)
        return listBranchStatus;
    }
    else if (action == 4) {
        var deleteBranchStatus = deleteStudent(req, res);
        return deleteBranchStatus;
    }
}

async function addStudent(req, res) {
    const enrollment_id = req.body.enrollment_id;
    const email_id = req.body.email_id;
    const name = req.body.name;
    const dob = req.body.dob;
    const age = req.body.age;
    const photo = req.body.photo;
    const phone_num = req.body.phone_num;
    const address = req.body.address;
    const program_id = req.body.program_id;
    const branch_id = req.body.branch_id;
    const section = req.body.section;
    const current_semester_number = req.body.current_semester_number;
    const cgpi = req.body.cgpi;
    const credits_completed = req.body.credits_completed;
    const is_verified = 0;
    const grade_card = req.body.grade_card;
    const medal = req.body.medal;
    var log_message;

    if(current_semester_number==1)
        log_message = `Fresh admission of Student : '${enrollment_id}' in ${program_id}-${branch_id} by ${my_id}`;
    else
        log_message = `Lateral admission of Student : '${enrollment_id}' in ${program_id}-${branch_id} in Semester : ${current_semester_number} by ${my_id}`;


    const client = await Client();
    var ret;
    await client
        .query('INSERT INTO student VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)', [enrollment_id, email_id, name,dob,age,photo,phone_num,address,program_id,branch_id,section,current_semester_number,cgpi,credits_completed,is_verified,grade_card,medal])
        .then(response => {
            res.status(200).send(`Successful Fresh admission of Student : '${enrollment_id}' in ${program_id}-${branch_id}`)
            createlog(my_id, getuserType(my_level), log_message)
            ret = { msg: "Student Added" }
        })
        .catch(err => {
            res.status(400).send("Unable to add Student")
            console.log(`studentAddError : ${err}`)
            ret = { msg: "Student Not Added" }
        })

    await client.release();

    return ret;

}
async function listStudent(req, res) {
    let pathname = req.url;
    pathname = pathname.split("/");
    var enrollment_id = pathname[pathname.length-1];
    enrollment_id = enrollment_id.split("?");
    enrollment_id = enrollment_id[0];
    const log_message = `Student : ${enrollment_id} Viewed by ${my_id}`;


    const client = await Client();
    var ret;
    await client
        .query('SELECT * FROM student WHERE enrollment_id=$1', [enrollment_id])
        .then(response => {
            res
                .status(200)
                .json({
                    student: response.rows
                })
                .end();
            createlog(my_id, getuserType(my_level), log_message)
            ret = { msg: "Successfully listed student data " }
        })
        .catch(err => {
            res.status(400).send("Unable to List branch")
            ret = { msg: "Unable to List Student Data" }
        })

    await client.release();

    return ret;

}
async function updateStudent(req, res) {
    const enrollment_id = req.body.enrollment_id;
    const email_id = req.body.email_id;
    const name = req.body.name;
    const dob = req.body.dob;
    const age = req.body.age;
    const photo = req.body.photo;
    const phone_num = req.body.phone_num;
    const address = req.body.address;
    const program_id = req.body.program_id;
    const branch_id = req.body.branch_id;
    const section = req.body.section;
    const current_semester_number = req.body.current_semester_number;
    const cgpi = req.body.cgpi;
    const credits_completed = req.body.credits_completed;
    const is_verified = req.body.is_verified;
    const grade_card = req.body.grade_card;
    const medal = req.body.medal;
    const log_message = `Branch : '${branch_id}' updated by ${my_id}`;


    const client = await Client();
    var ret;
    await client
        .query('UPDATE student SET branch_id=$2,section=$3,current_semester_number=$4,cgpi=$5,credits_completed=$6,is_verified=$7,grade_card=$8,medal=$9 WHERE enrollment_id=$1', [enrollment_id,branch_id,section,current_semester_number,cgpi,credits_completed,is_verified,grade_card,medal])
        .then(response => {
            res.status(200).send(`Student : ${enrollment_id} data updated successfully`)
            createlog(my_id, getuserType(my_level), log_message)
            ret = { msg: "Student data updated" }
        })
        .catch(err => {
            res.status(400).send("Unable to update student data")
            ret = { msg: "Student data not updated" }
        })

    await client.release();

    return ret;

}
async function deleteStudent(req, res) {
    const enrollment_id = req.body.enrollment_id;

    const log_message = `Student : '${enrollment_id}' removed by ${my_id}`;


    var ret;
    const client = await Client();

    await client
        .query('DELETE FROM student WHERE enrollment_id=$1', [enrollment_id])
        .then(response => {
            res.status(200).send(`Student : ${enrollment_id} un-enrolled successfully`)
            createlog(my_id, getuserType(my_level), log_message)

            ret = { msg: "Student un-enrolled " }
        })
        .catch(err => {
            res.status(400).send("Unable to un-enrolled student")
            ret = { msg: "Student not un-enrolled " }
        })

    await client.release();

    return ret;

}