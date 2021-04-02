const { pool } = require('./utils/config.js');
const { Client } = require('./utils/db.js');
var client;

async function createTable(query, table_name) {

    try {
        await client
            .query(query)
            .then(response => console.log(`Table '${table_name}' Created`))
            .catch(err => console.log(`${err}`));
    } catch (err) {
        console.log(`${err}`);
    }

}

async function dropTable(table_name) {
    try {
        await client
            .query(`DROP TABLE IF EXISTS ${table_name}`)
            .then(response => console.log(`Table '${table_name}' Dropped`))
            .catch(err => console.log(`${err}`));
    } catch (err) {
        console.log(`${err}`);
    }
}

exports.createdb = async function (req, res) {
    try {
        client = await Client();
        //Warning : Dropping sequence is imp as foreign key constraints may interfere
        await dropTable('notification');
        // await dropTable('logs');
        // await dropTable('user_table');
        // await dropTable('ldap');
        await dropTable('marks');
        await dropTable('results');
        await dropTable('fees');
        await dropTable('disciplinary_actions');
        await dropTable('student');
        // await dropTable('course');
        // await dropTable('semester');
        // await dropTable('branch');
        // await dropTable('program');




        /* CREATING TABLES */

        //ldap
        await createTable('CREATE TABLE ldap(user_id VARCHAR(100) NOT NULL PRIMARY KEY,password VARCHAR(100) NOT NULL);', 'ldap');
        //user_table
        await createTable('CREATE TABLE user_table(user_id VARCHAR(100) PRIMARY KEY REFERENCES ldap(user_id) ON DELETE CASCADE UNIQUE,name VARCHAR(100) NOT NULL,photo VARCHAR(100),admin_level INT NOT NULL,has_access INT NOT NULL);', 'user_table');
        //logs
        await createTable('CREATE TABLE logs(user_id VARCHAR(100) NOT NULL ,user_type VARCHAR(100) NOT NULL,action text NOT NULL,time timestamp)', 'logs');
        //program
        await createTable('CREATE TABLE program(program_id VARCHAR(100) PRIMARY KEY,program_name VARCHAR(1000) NOT NULL)', 'program');
        //branch
        await createTable('CREATE TABLE branch(branch_id VARCHAR(100) PRIMARY KEY,program_id VARCHAR(100) REFERENCES program(program_id) ON DELETE CASCADE,branch_name VARCHAR(100) NOT NULL)', 'branch');
        //semester
        await createTable('CREATE TABLE semester(semester_id VARCHAR(100) PRIMARY KEY,branch_id VARCHAR(100) REFERENCES branch(branch_id) ON DELETE CASCADE,semester_num INT NOT NULL)', 'semester');
        //courses
        await createTable('CREATE TABLE course(course_id VARCHAR(100) PRIMARY KEY,semester_id VARCHAR(100) REFERENCES semester(semester_id),branch_id VARCHAR(100) REFERENCES branch(branch_id),course_name VARCHAR(200),credits INT NOT NULL)', 'course');
        //student
        await createTable('CREATE TABLE student(enrollment_id VARCHAR(100) PRIMARY KEY,email_id VARCHAR(100),name VARCHAR(500),dob VARCHAR(200),age INT,photo VARCHAR(100),phone_number INT,address VARCHAR(1000),program_id VARCHAR(100) REFERENCES program(program_id),branch_id VARCHAR(100) REFERENCES branch(branch_id),section VARCHAR(100),current_semester_number INT,cgpi float,credits_completed INT,is_verified INT,grade_card VARCHAR(100),medal VARCHAR(100));', 'student');
        //marks
        await createTable('CREATE TABLE marks(enrollment_id VARCHAR(100) REFERENCES student(enrollment_id),semester_number INT,course_id VARCHAR(100) REFERENCES course(course_id),c1 INT,c2 INT,c3 INT);', 'marks');
        //results
        await createTable('CREATE TABLE results(enrollment_id VARCHAR(100) REFERENCES student(enrollment_id),semester_number INT,total_credits INT,gpa float)', 'results');
        //fees
        await createTable('CREATE TABLE fees(enrollment_id VARCHAR(100) REFERENCES student(enrollment_id),semester_number INT,fee_status INT)', 'fees');
        //disciplinary_actions
        await createTable('CREATE TABLE disciplinary_actions(enrollment_id VARCHAR(100) REFERENCES student(enrollment_id),action VARCHAR(500),reason VARCHAR(1000),time timestamp)', 'disciplinary_actions');
        //notifications
        await createTable('CREATE TABLE notification(enrollment_id VARCHAR(100),description VARCHAR(500),time timestamp)', 'disciplinary_actions');
        
        res.status(200).send("DB created");
        await client.end();
    } catch (err) {
        console.log(`${err}`);
        res.status(400).send("Unable to create DB");
    }

}