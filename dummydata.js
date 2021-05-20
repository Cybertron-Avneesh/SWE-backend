const { pool } = require('./utils/config.js');
const { Client } = require('./utils/db.js');



exports.fillDummydata = async function (req, res) {

    const client = await Client();
    try {

        // ldap
        await client.query("INSERT INTO ldap(user_id, password) VALUES('iib2019050', 'iib2019050')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('iib2019051', 'iib2019051')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('iib2019052', 'iib2019052')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('iib2019053', 'iib2019053')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('iib2019054', 'iib2019054')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('iib2019055', 'iib2019055')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('iib2019056', 'iib2019056')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('iib2019057', 'iib2019057')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('iib2019058', 'iib2019058')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('iib2019059', 'iib2019059')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('iib2019060', 'iib2019060')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('a', 'a')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('b', 'b')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('c', 'c')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('d', 'd')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('e', 'e')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('f', 'f')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('SYSADMIN01', 'SYSADMIN01')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('PRIVUSER01', 'PRIVUSER01')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO ldap(user_id, password) VALUES('OPERUSER01', 'OPERUSER01')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));

        // user_table
        await client.query("INSERT INTO user_table(user_id, name, photo, admin_level, has_access) VALUES('iib2019050', 'admin1', NULL, 2, 1)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO user_table(user_id, name, photo, admin_level, has_access) VALUES('iib2019060', 'op3', 'undefined', 1, 1)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO user_table(user_id, name, photo, admin_level, has_access) VALUES('SYSADMIN01', 'Shyam Tayal', 'undefined', 2, 1)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO user_table(user_id, name, photo, admin_level, has_access) VALUES('PRIVUSER01', 'Pradhuman Singh', 'undefined', 1, 1)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO user_table(user_id, name, photo, admin_level, has_access) VALUES('a', 'User Aman', 'undefined', 1, 1)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO user_table(user_id, name, photo, admin_level, has_access) VALUES('b', 'User B', 'undefined', 0, 1)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO user_table(user_id, name, photo, admin_level, has_access) VALUES('c', 'User C', 'undefined', 0, 1)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO user_table(user_id, name, photo, admin_level, has_access) VALUES('OPERUSER01', 'Avneesh Kumar', 'undefined', 0, 1)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));

        // program
        await client.query("INSERT INTO program(program_id, program_name) VALUES('MTECH', 'Masters of Technology')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO program(program_id, program_name) VALUES('BTECH', 'Bachelors of Technology')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO program(program_id, program_name) VALUES('PhD', 'Doctor of Philosophy')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        // branch
        await client.query("INSERT INTO branch(branch_id, program_id, branch_name) VALUES('IT', 'BTECH', 'Information Technology')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO branch(branch_id, program_id, branch_name) VALUES('ECE', 'BTECH', 'Electronics & Comm. Eng.')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO branch(branch_id, program_id, branch_name) VALUES('ITBI', 'BTECH', 'IT with Business Informatics')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        // semester
        await client.query("INSERT INTO semester(semester_id, branch_id, semester_num) VALUES('1_IT', 'IT', 1)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO semester(semester_id, branch_id, semester_num) VALUES('1_ECE', 'ECE', 1)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO semester(semester_id, branch_id, semester_num) VALUES('2_ECE', 'ECE', 2)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO semester(semester_id, branch_id, semester_num) VALUES('3_ECE', 'ECE', 3)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO semester(semester_id, branch_id, semester_num) VALUES('4_ECE', 'ECE', 4)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO semester(semester_id, branch_id, semester_num) VALUES('5_ECE', 'ECE', 5)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO semester(semester_id, branch_id, semester_num) VALUES('6_ECE', 'ECE', 6)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO semester(semester_id, branch_id, semester_num) VALUES('2_IT', 'IT', 2)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO semester(semester_id, branch_id, semester_num) VALUES('3_IT', 'IT', 3)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO semester(semester_id, branch_id, semester_num) VALUES('4_IT', 'IT', 4)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        // course
        await client.query("INSERT INTO course(course_id, semester_id, branch_id, course_name, credits) VALUES('FEE', '1_IT', 'IT', 'Fundamentals of Ele. ', 4)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO course(course_id, semester_id, branch_id, course_name, credits) VALUES('POC', '1_IT', 'IT', 'Principle of Communication', 2)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO course(course_id, semester_id, branch_id, course_name, credits) VALUES('PHY', '1_IT', 'IT', 'Physics', 4)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO course(course_id, semester_id, branch_id, course_name, credits) VALUES('ITP', '1_IT', 'IT', 'Intro to programming', 4)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO course(course_id, semester_id, branch_id, course_name, credits) VALUES('POM', '1_IT', 'IT', 'Principle of Mgmt.', 2)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));

        // student
        await client.query("INSERT INTO student(enrollment_id, email_id, name, dob, age, photo, phone_number, address, program_id, branch_id, section, current_semester_number, cgpi, credits_completed, is_verified, grade_card, medal) VALUES('TEST01', 'abc@email.com', 'John Doe', '2000-01-01', 21, NULL, 987, 'Nalanda Bihar, India', 'BTECH', 'IT', 'C', 3, 0, 0, 0, NULL, NULL)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO student(enrollment_id, email_id, name, dob, age, photo, phone_number, address, program_id, branch_id, section, current_semester_number, cgpi, credits_completed, is_verified, grade_card, medal) VALUES('IIB2019001', 'harsh@gmail.com', 'Harsh Mahajan', '2000-01-01', 21, NULL, 9876, '	Bhopal, Madhaya Pradesh, India', 'BTECH', 'ITBI', 'C', 6, 8.8, 100, 1, NULL, NULL)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO student(enrollment_id, email_id, name, dob, age, photo, phone_number, address, program_id, branch_id, section, current_semester_number, cgpi, credits_completed, is_verified, grade_card, medal) VALUES('IIB2019002', 'prad@gmail.com', 'Pradhuman Singh Baid', '2001-02-02', 20, NULL, 1234, 'Bikaner, Rajasthan, India', 'BTECH', 'IT', 'C', 6, 8.7, 100, 1, NULL, NULL)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO student(enrollment_id, email_id, name, dob, age, photo, phone_number, address, program_id, branch_id, section, current_semester_number, cgpi, credits_completed, is_verified, grade_card, medal) VALUES('TEST02', 'abc@test.com', 'AKS', '2001-02-02', 20, NULL, 123, 'ABC Sector Noida, india', 'BTECH', 'IT', 'B', 6, 6.7, 72, 0, NULL, NULL)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO student(enrollment_id, email_id, name, dob, age, photo, phone_number, address, program_id, branch_id, section, current_semester_number, cgpi, credits_completed, is_verified, grade_card, medal) VALUES('IIB2019003', 'vasu@gmail.com', 'Vasu Gupta', '2002-03-03', 19, NULL, 2345, 'Kanpur, Uttar Pradesh, India', 'BTECH', 'IT', 'A', 6, 8.6, 100, 1, NULL, NULL)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        // alumni
        await client.query("INSERT INTO alumni (enrollment_id, email_id, name, dob, age, photo, phone_number, address, program_id, branch_id, section, cgpi, credits_completed, is_verified, grade_card, medal) VALUES ('iit2016001', 'iit2016001@iiita.ac.in', 'Rajesh', '1998-01-01', 24, '', 8989, 'indore', 'BTECH', 'IT', 'C', 9.9, 160, 1, '', '3')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        // marks
        await client.query("INSERT INTO marks(enrollment_id, semester_number, course_id, c1, c2, c3) VALUES('IIB2019002', 1, 'ITP', 24, 30, 36)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO marks(enrollment_id, semester_number, course_id, c1, c2, c3) VALUES('IIB2019002', 1, 'POM', 20, 30, 35)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO marks(enrollment_id, semester_number, course_id, c1, c2, c3) VALUES('IIB2019001', 1, 'ITP', 20, 20, 30)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO marks(enrollment_id, semester_number, course_id, c1, c2, c3) VALUES('IIB2019003', 1, 'ITP', 20, 20, 30)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO marks(enrollment_id, semester_number, course_id, c1, c2, c3) VALUES('IIB2019001', 1, 'POC', 28, 28, 36)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        // fees
        await client.query("INSERT INTO fees(enrollment_id, semester_number, fee_status, payment_date) VALUES('IIB2019001', 1, 1, '2019-07-27')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO fees(enrollment_id, semester_number, fee_status, payment_date) VALUES('IIB2019001', 2, 0, 'N/A')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO fees(enrollment_id, semester_number, fee_status, payment_date) VALUES('IIB2019001', 3, 0, 'N/A')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO fees(enrollment_id, semester_number, fee_status, payment_date) VALUES('IIB2019001', 4, 0, 'N/A')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO fees(enrollment_id, semester_number, fee_status, payment_date) VALUES('IIB2019001', 5, 0, 'N/A')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO fees(enrollment_id, semester_number, fee_status, payment_date) VALUES('IIB2019001', 6, 0, 'N/A')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO fees(enrollment_id, semester_number, fee_status, payment_date) VALUES('IIB2019002', 1, 1, '2019-07-27')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO fees(enrollment_id, semester_number, fee_status, payment_date) VALUES('IIB2019002', 2, 1, '2020-01-01')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO fees(enrollment_id, semester_number, fee_status, payment_date) VALUES('IIB2019002', 3, 1, '2020-07-20')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO fees(enrollment_id, semester_number, fee_status, payment_date) VALUES('IIB2019002', 4, 1, '2021-01-05')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO fees(enrollment_id, semester_number, fee_status, payment_date) VALUES('IIB2019003', 1, 0, 'N/A')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO fees(enrollment_id, semester_number, fee_status, payment_date) VALUES('IIB2019003', 2, 0, 'N/A')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO fees(enrollment_id, semester_number, fee_status, payment_date) VALUES('IIB2019003', 3, 0, 'N/A')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO fees(enrollment_id, semester_number, fee_status, payment_date) VALUES('IIB2019003', 4, 0, 'N/A')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        // results
        await client.query("INSERT INTO results(enrollment_id, semester_number, total_credits, gpa, medal) VALUES('IIB2019002', 1, 24, 8.8, NULL)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO results(enrollment_id, semester_number, total_credits, gpa, medal) VALUES('IIB2019002', 2, 22, 8.9, NULL)").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO results(enrollment_id, semester_number, total_credits, gpa, medal) VALUES('IIB2019003', 1, 24, 8.5, '')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO results(enrollment_id, semester_number, total_credits, gpa, medal) VALUES('IIB2019001', 2, 24, 8.5, 'None')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));

        // notifications
        await client.query("INSERT INTO notification(enrollment_id, description, `time`) VALUES('', 'This is a broadcast message', '2021-04-29 12:45:22.393123')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO notification(enrollment_id, description, `time`) VALUES('IIB2019001', 'Hey Harsh Your fees is not paid', '2021-04-29 13:00:21.640363')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO notification(enrollment_id, description, `time`) VALUES('PRIVUSER01', 'This is a test', '2021-04-29 13:05:45.573423')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO notification(enrollment_id, description, `time`) VALUES('OPERUSER01', 'hfvjdkfvjsdnkjsfvsd', '2021-04-29 13:08:06.846344')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO notification(enrollment_id, description, `time`) VALUES('IIB2019003', 'Fee reminder to you', '2021-04-30 20:14:33.15919')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO notification(enrollment_id, description, `time`) VALUES('PREVUSER01', 'Hey this ia test to priv user', '2021-04-30 20:17:45.748979')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        await client.query("INSERT INTO notification(enrollment_id, description, `time`) VALUES('PRIVUSER01', 'TEST', '2021-04-30 20:22:56.438784')").then(res => console.log("Data added")).catch(err => console.log(`${err}`));
        // disciplinary_actions
        // logs

        res.status(200).send("Data filled");
        await client.release();

    } catch (err) {
        res.status(503).send(`Error : ${err}`);
    }

}

/* OLD Dummy data file
const { pool } = require('./utils/config.js');
const { Client } = require('./utils/db.js');



exports.fillDummydata = async function (req, res) {

    const client = await Client();
    try {

        //ldap
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019050','iib2019050')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019051','iib2019051')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019052','iib2019052')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019053','iib2019053')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019054','iib2019054')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019055','iib2019055')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019056','iib2019056')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019057','iib2019057')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019058','iib2019058')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019059','iib2019059')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));
        await client
            .query("INSERT INTO ldap (user_id,password) VALUES ('iib2019060','iib2019060')")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));

        //system admin
        await client
            .query("INSERT INTO user_table (user_id,name,admin_level,has_access) VALUES ('iib2019050','admin1',2,1)")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));

        //alumni
        await client
            .query("INSERT INTO alumni (enrollment_id,email_id,name,dob,age,photo,phone_number,address,program_id,branch_id,section,cgpi,credits_completed,is_verified,grade_card,medal) VALUES ('iib2019001','iib2019001@iiita.ac.in','harsh','01-01-01',20,'',8989,'indore','B.Tech','IT-BI','C',9.9,160,1,'',3)")
            .then(res => console.log("Data added"))
            .catch(err => console.log(`${err}`));

        res.status(200).send("Data filled");
        await client.release();

    } catch (err) {
        res.status(503).send(`Error : ${err}`);
    }

}
*/