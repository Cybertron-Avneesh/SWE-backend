const { pool } = require('./utils/config.js');
const { Client } = require('./utils/db.js');



exports.fillDummydata = async function (req, res) {

    const client = await Client();
    try {

        //ldap
        // await client
        //     .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019050','iib2019050')")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));
        // await client
        //     .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019051','iib2019051')")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));
        // await client
        //     .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019052','iib2019052')")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));
        // await client
        //     .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019053','iib2019053')")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));
        // await client
        //     .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019054','iib2019054')")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));
        // await client
        //     .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019055','iib2019055')")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));
        // await client
        //     .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019056','iib2019056')")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));
        // await client
        //     .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019057','iib2019057')")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));
        // await client
        //     .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019058','iib2019058')")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));
        // await client
        //     .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019059','iib2019059')")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));
        // await client
        //     .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019060','iib2019060')")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));

        // //system admin
        // await client
        //     .query("INSERT INTO user_table (user_id,name,admin_level,has_access) VALUES ('iib2019050','admin1',2,1)")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));

        // //alumni
        // await client
        //     .query("INSERT INTO alumni (enrollment_id,email_id,name,dob,age,photo,phone_number,address,program_id,branch_id,section,cgpi,credits_completed,is_verified,grade_card,medal) VALUES ('iib2019001','iib2019001@iiita.ac.in','harsh','01-01-01',20,'',8989,'indore','B.Tech','IT-BI','C',9.9,160,1,'',3)")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));


        // await client
        //     .query("INSERT INTO program (program_id,program_name) VALUES ('prog_1','B.Tech')")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));


        // await client
        //     .query("INSERT INTO branch (branch_id,program_id,branch_name) VALUES ('branch_1','prog_1','IT-BI')")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));

        // await client
        //     .query("INSERT INTO semester (semester_id,branch_id,semester_num) VALUES ('sem_1','branch_1',4)")
        //     .then(res => console.log("Data added"))
        //     .catch(err => console.log(`${err}`));


        // await client
        // .query("INSERT INTO student (enrollment_id,email_id,name,dob,age,photo,phone_number,address,program_id,branch_id,section,current_semester_number,cgpi,credits_completed,is_verified,grade_card,medal) VALUES ('iib2019001','iib2019001@iiita.ac.in','harsh','01-01-01',20,'',8989,'indore','prog_1','branch_1','C',4,9.9,160,1,'',3)")
        // .then(res => console.log("Data added"))
        // .catch(err => console.log(`${err}`));

        await client
        .query("INSERT INTO course (course_id,semester_id,branch_id,course_name,credits) VALUES ('course_1','sem_1','branch_1','SWE',4)")
        .then(res => console.log("Data added"))
        .catch(err => console.log(`${err}`));


        res.status(200).send("Data filled");
        await client.release();

    } catch (err) {
        res.status(503).send(`Error : ${err}`);
    }

}