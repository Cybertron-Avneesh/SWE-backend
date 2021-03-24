const { createdb } = require('./createDatabase.js');
const { fillDummydata } = require('./dummydata.js');
const { verifyUser } = require('./functionalities/auth/login.js');
const { listUser } = require('./functionalities/user/listuser.js');
const { createUser } = require('./functionalities/user/createUser.js');
const { removeUser } = require('./functionalities/user/removeUser.js');

const { grantRevoke } = require('./functionalities/user/permission.js');
const { Program } = require('./functionalities/masters/program.js');
const { Branch } = require('./functionalities/masters/branch.js');
const { Semester } = require('./functionalities/masters/semester.js');
const { Course } = require('./functionalities/masters/course.js');
const { getlog } = require('./functionalities/logs.js');

const { Student } = require('./functionalities/student/student.js');





const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

app.get('/createdb', createdb);
app.get('/filldummydata', fillDummydata);
app.post('/login', verifyUser);
app.post('/user/create', createUser);
app.post('/user/remove', removeUser);
app.post('/user/list', listUser);
app.post('/user/permission', grantRevoke);
app.post('/masters/program', Program);
app.post('/masters/branch', Branch);
app.post('/masters/semester', Semester);
app.post('/masters/course', Course);
app.get('/logs',getlog);
app.post(`/student/create/*`,Student);



const PORT = 5440;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})



