const jwt = require('jsonwebtoken');
const {config} = require("../../utils/config.js");
// console.log(config)

exports.generateNewToken = (user) => {
    return jwt.sign({ sub: user.user_id, admin_level: user.admin_level }, config.jwkkey, {
        algorithm: 'HS256',
        expiresIn: '24h'
    })
};

exports.verifyToken = (token) =>{
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.jwkkey, {
            algorithm: 'HS256'
        }, (err, payload) => {
            if (err) {
                reject(err);
            }
            resolve(payload);
        })
    })

}