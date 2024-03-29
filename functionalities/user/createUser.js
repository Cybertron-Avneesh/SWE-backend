const { Client } = require('../../utils/db.js');


const { createlog, getuserType } = require('../logs.js');


exports.createUser = async function (req, res) {
    const user_id = req.body.user_id;
    const name = req.body.name;
    const photo = req.body.photo;
    const admin_level = req.body.admin_level;
    const my_id = req.body.my_id;
    const my_level = req.body.my_level;


    const log_message = `New ${getuserType(admin_level)}  :: ${user_id} Added By ${my_id}`;
    // console.log(log_message)

    // console.log(user_id, name, admin_level)
    var ret;
    if (!user_id || !name || admin_level == undefined) {

        res.status(400).send({ msg: 'userID,name and Admin level are mandatory' });
        return { msg: 'userID,name and Admin level are mandatory' };
    }

    const client = await Client();
    var data;

    await client
        .query(`SELECT * FROM ldap WHERE user_id=$1`, [user_id])
        .then(response => { data = response })
        .catch(err => console.log(`${err}`))


    if (data.rows.length == 1) {
        await client
            .query(`INSERT INTO user_table VALUES ('${user_id}','${name}','${photo}',${admin_level},1);`)
            .then(resData => {
                res.status(200).send({ msg: ` '${user_id}' is now ${getuserType(admin_level)}` });
                createlog(my_id, getuserType(my_level), log_message);
            })
            .catch(err => {
                console.log(`${err}`);
                res.status(400).send({ msg: `${err}` });
            });
        await client.release();

        return { msg: "User created" };
    } else {
        await client.release();

        res
            .status(400)
            .json({
                msg: "User ldap not found"
            })
            .end();

        return { msg: "User ldap not found" }
    }



}