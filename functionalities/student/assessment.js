const { Client } = require('../../utils/db.js');
const { createlog, getuserType } = require('../logs.js');


var my_id;
var my_level;

exports.assessment = async function(req,res){
    const action = req.query.action;
    my_id = req.body.my_id;
    my_level = req.body.my_level;
    if(action==1){
        addAssessment(req,res);
    }else if(action==2){
        listAssessment(req,res);
    }
}

async function addAssessment (req, res) {
    const enrollment_id = req.body.enrollment_id;
    const semester_number = req.body.semester_number;
    const c1 = parseInt(req.body.c1);
    const c2 = parseInt(req.body.c2);
    const c3 = parseInt(req.body.c3);
    const course_id = req.body.course_id;

    const client = await Client();
    const log_message = `Marks added for : '${enrollment_id}', by ${my_id}`;
    // console.log(semester_number);
    var ret;
    await client
        .query('INSERT INTO marks VALUES($1,$2,$3,$4,$5,$6)', [enrollment_id, semester_number,course_id,c1,c2,c3])
        .then(response => {
         //  console.log(log_message);
            res.status(200).send(`Result added successfully`)
            createlog(my_id, getuserType(my_level), log_message)

            ret = { msg: "marks added" }
           // console.log(ret);
        })
        .catch(err => {
            res.status(400).send("Unable to add result")
            console.log(`resultAddError : ${err}`)
            //  ret = { msg: "error " }

        })
    await client.release();
    return ret;   
}

async function listAssessment(req,res){
    const log_message = `Assessment compiled by ${my_id}`;
    const enrollment_id = req.body.enrollment_id;

    const client = await Client();
    var ret;
    await client
        .query('SELECT * FROM marks WHERE enrollment_id=$1',[enrollment_id])
        .then(response => {
            res
                .status(200)
                .json({
                    assessment: response.rows
                })
                .end();
            createlog(my_id, getuserType(my_level), log_message)
            ret = { msg: "Listing succesfull" }
        })
        .catch(err => {
            res.status(400).send("Unable to list marks")
            // ret = { msg: "Listing unsuccessful" }
        })
    await client.release();
    return ret;
}