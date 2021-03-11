const { pool } = require('./../utils/db.js');

async function getClient() {
    try {
        client = await pool.connect();
        return client;
    } catch (err) {
        return res.status(503).end("Server Error,Please try again after some time");
    }
}

exports.verifyUser = async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const admin_level = req.body.admin_level;


    if (!username || !password) {
        // res.status(400).send({ msg: 'usename and password are mandatory' });
         return { msg: 'usename and password are mandatory' };
       // return 'usename and password are mandatory';
    }

    const client = await getClient();
    var data;


    await client
        .query(`SELECT * FROM ldap NATURAL INNER JOIN user_table WHERE user_id=$1 AND password=$2 AND has_access=1 AND admin_level=$3;`, [username, password, admin_level])
        .then((resData) => {
            data = resData;
        })
        .catch(err => console.log(`${err}`))

    await client.end();
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
        return {
            data: data.rows[0].name,
            photo: data.rows[0].photo,
            unique_id: data.rows[0].unique_id,
        }
    } else {
        return res
            .status(400)
            .json({
                msg: "Authentication Failed"
            })
            .end();
    }


}

exports.createUser = async function (req, res) {
    const user_id = req.body.user_id;
    const name = req.body.name;
    const photo = req.body.photo;
    const admin_level = req.body.admin_level;



    if (!user_id || !name || !admin_level) {

        return res.status(400).send({ msg: 'usename,password and Admin level are mandatory' });
    }

    const client = await getClient();
    var data;


    await client
        .query(`SELECT * FROM ldap WHERE user_id=$1`, [user_id])
        .then((resData) => {
            data = resData;
        })
        .catch(err => console.log(`${err}`))

    console.log(`INSERT INTO user_table (unique_id,name,photo,admin_level,has_access) VALUES (${data.rows[0].unique_id},${name},${photo},${admin_level},1)`);
    if (data.rows.length == 1) {
        await client
            .query(`INSERT INTO user_table (unique_id,name,admin_level,has_access) VALUES (${data.rows[0].unique_id},'${name}',${admin_level},1);`)
            .then(resData => res.status(200).send("User Added"))
            .catch(err => {
                console.error(err);
                res.status(400).send(`${err}`);
            });

        return;
    } else {
        return res
            .status(400)
            .json({
                msg: "User ldap not found"
            })
            .end();
    }

}