const { pool } = require('../utils/config.js');
const { Client } = require('../utils/db.js');


exports.getuserType = function (admin_level) {
    if (admin_level == 0) return 'operating user';
    else if (admin_level == 1) return 'priviledged user';
    else if (admin_level == 2) return 'system admin';
    else return 'Invalid admin';
}

exports.createlog = async function (user_id, user_type, action) {
    const client = await Client();

    await client
        .query('INSERT INTO logs VALUES ($1,$2,$3,NOW())', [user_id, user_type, action])
        .then()
        .catch((err) => console.log(`Log Error : ${err}`));

    await client.end();
}