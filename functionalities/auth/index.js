const { Client } = require('../../utils/db.js');
const {comparePassword} = require('./crypt.js');
const {generateNewToken,verifyToken} = require('./jwtservice.js');
const { createlog, getuserType } = require('../logs.js');

exports.verifyUser = async function (req, res) {
    const user_id = req.body.user_id;
    const password = req.body.password;
    const admin_level = req.body.admin_level;
    const log_message = `${user_id} Logged In`;


    if (!user_id || !password) {


        res.status(400).send({ msg: 'User ID and password are mandatory' });
        return { msg: 'User ID and password are mandatory' }
    }

    const client = await Client();
    var data;


    await client
        .query(`SELECT * FROM ldap NATURAL INNER JOIN user_table WHERE user_id=$1 AND has_access=1 AND admin_level=$2;`, [user_id, admin_level])
        .then(async (resData) => {
            let validate = await comparePassword(password,resData.rows[0].password);
            if(validate) data = resData;
        })
        .catch(err => console.log(`${err}`))

    await client.release();

    // console.log(data);

    if (data.rows.length == 1) {
        res
            .status(200)
            .json({token:generateNewToken(data.rows[0])})
            .end();

        createlog(user_id, getuserType(admin_level), log_message);
        return { msg: 'Authentication Verified' }

    } else {
        res
            .status(400)
            .json({
                msg: "Authentication Failed"
            })
            .end();
        return { msg: "Authentication Failed" }
     
    }

}

exports.validateRequest = async (req, res, next) => {
    const bearer = req.headers.authorization;

    if (!bearer || bearer.indexOf('Bearer ') == -1) {

        return res.status(401).send({ msg: "Bearer token missing" });
    }



    let token = req.headers.authorization.split(' ')[1]

    let payload;

    try {
        payload = await verifyToken(token);
        // console.log(req.body)
        req.body["my_id"] = payload.sub;
        req.body["my_level"] = payload.admin_level;
        // console.log(req.body)

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send({ msg: "Bearer token not valid" });
    }
}