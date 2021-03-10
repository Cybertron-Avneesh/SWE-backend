const { createdb } = require('./createDatabase.js');
const { fillDummydata } = require('./dummydata.js');
const { verifyUser, createUser } = require('./functionalities/auth/index.js');
const { listUser } = require('./functionalities/user/listuser.js');
const { grantRevoke } = require('./functionalities/user/permission.js');



const express = require('express');
const app = express();
app.use(express.json());


app.get('/createdb', createdb);
app.get('/filldummydata', fillDummydata);
app.get('/login', verifyUser);
app.get('/createuser', createUser);
app.get('/listuser', listUser);
app.get('/permission', grantRevoke);


const PORT = 5440;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})



