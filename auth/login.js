const { pool } = require('./../utils/db.js');

exports.verifyUser = async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const access_level = req.body.access_level;


    if (!username || !password) {

        return res.status(400).send({ msg: 'usename and password are mandatory' });
    }

    var client, data;
    try {
        client = await pool.connect();
        console.log("CONNECTED");
    } catch (err) {
        return res.status(503).end("Server Error,Please try again after some time");
    }

    await client
        .query(`SELECT * FROM ldap NATURAL INNER JOIN user_table WHERE user_id=$1 AND password=$2 AND has_access=1 AND admin_level=$3`, [username, password, access_level])
        .then((resData) => {
            data = resData;
        })
        .catch(err => console.log(`${err}`))

    console.log(data)

    if (data.rows.length == 1) {
        res
            .status(200)
            .json({
                data: data.rows[0].name,
                photo: data.rows[0].photo,
                unique_id: data.rows[0].unique_id,
            })
            .end();
    } else {
        res
            .status(400)
            .json({
                msg: "Authentication Failed"
            })
            .end();
    }


}