const { createdb } = require('./createDatabase.js');
const { fillDummydata } = require('./dummydata.js');
const { verifyUser, createUser } = require('./functionalities/auth/index.js');
const { listUser } = require('./functionalities/user/listuser.js');
const { grantRevoke } = require('./functionalities/user/permission.js');
const { addProgram } = require('./functionalities/masters/program.js');
const { addBranch } = require('./functionalities/masters/branch.js');
const { addSemester } = require('./functionalities/masters/semester.js');
const { addCourse } = require('./functionalities/masters/course.js');





const express = require('express');
const app = express();
app.use(express.json());


app.get('/createdb', createdb); addProgram
app.get('/filldummydata', fillDummydata);
app.get('/login', verifyUser);
app.get('/createuser', createUser);
app.get('/listuser', listUser);
app.get('/permission', grantRevoke);
app.get('/masters/create/program', addProgram);
app.get('/masters/create/branch', addBranch);
app.get('/masters/create/semester', addSemester);
app.get('/masters/create/course', addCourse);




const PORT = 5440;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})



