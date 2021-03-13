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





const express = require('express');
const app = express();
app.use(express.json());


app.get('/createdb', createdb);
app.get('/filldummydata', fillDummydata);
app.post('/login', verifyUser);
app.post('/user/create', createUser);
app.post('/user/remove', removeUser);
app.get('/user/list', listUser);
app.post('/user/permission', grantRevoke);
app.get('/masters/program', Program);
app.get('/masters/branch', Branch);
app.get('/masters/semester', Semester);
app.get('/masters/course', Course);





const PORT = 5440;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})



