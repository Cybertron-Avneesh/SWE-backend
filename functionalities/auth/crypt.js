const bcrypt = require('bcrypt');

exports.cryptPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    return password;
};

exports.comparePassword = async function(plainPass, hashword) {
    const validPassword = await bcrypt.compare(plainPass, hashword);
    return validPassword;
};