const { Client } = require('../../utils/db.js');
const { createlog, getuserType } = require('../logs.js');
const url = require('url');

var my_id;
var my_level;

exports.UpdateSemester = async function (req, res) {
    my_id = req.body.my_id;
    my_level = req.body.my_level;
    const program_id = req.body.program_id;
    let success = 1;
    const log_message = `Students of : ${program_id} Are upgraded to next sem by ${my_id}`;


    const client = await Client();
    var ret;
    await client
        .query('SELECT * FROM student WHERE program_id=$1', [program_id])
        .then(async (response) => {
            // console.log(response.rows)

            await response.rows.forEach(async (element) => {
                let client1 =await Client();

                let enrollment_id = element.enrollment_id;
                let new_semester = element.current_semester_number+1;
                await client1
                .query('UPDATE student SET current_semester_number=$2 WHERE enrollment_id=$1', [enrollment_id,new_semester])
                .then(response1 => {
                    // res.status(200).send(`Student : ${enrollment_id} is upgraded successfully`)
                
                })
                .catch(err => {
                    console.log(`${err}`)
                    // res.status(400).send("Unable to update student data")
                    success = 0;
                })
                await client1.release();
                

            });

            if(success){
                createlog(my_id, getuserType(my_level), log_message)
                res.status(200).send(`Students of : ${program_id} are upgraded to next semester successfully`)
                ret = { msg :"Semester updated"}
                
            }else{
                res.status(400).send("Unable to Upgrade Semester")
                ret = { msg :"Semester  not updated"}
            }
        })
        .catch(err => {
            res.status(400).send("Unable to Upgrade Semester")
            ret = { msg :"Semester  not updated"}
        })

    await client.release();
    return ret;

}
