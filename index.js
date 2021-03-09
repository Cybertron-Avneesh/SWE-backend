const { createdb } = require('./createDatabase.js');
const { fillDummydata } = require('./dummydata.js');
const { verifyUser, createUser } = require('./auth/index.js');



const express = require('express');
const app = express();
app.use(express.json());


app.get('/createdb', createdb);
app.get('/filldummydata', fillDummydata);
app.get('/login', verifyUser);
app.get('/createuser', createUser);






const PORT = 5440;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})



