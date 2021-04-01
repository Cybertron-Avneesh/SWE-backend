const assert = require('chai').assert;
const app = require('../functionalities/user/createUser.js');
const { expect } = require('chai');
var should = require('chai').should();


const res = {
    status: function (param) {
        return res;
    },
    json: function (param) {
        return res;
    },
    send: function (param) {
        return res;
    },
    end: function (param) {
        return res;
    }
}

describe('Create User  ', function () {
    it("verifies  empty details ", async function () {

        const result = await app.createUser({ body: { user_id: "iib2019050", photo: "Asas", admin_level: 2, my_id: "11", my_level: 2 } }, res);
        // console.log(result);
        assert.deepEqual(result, { msg: 'userID,name and Admin level are mandatory' });

    });

    it("verifies  Valid input ", async function () {

        const result = await app.createUser({ body: { user_id: "iib2019056", name :"Ganesh ",photo: "Asas", admin_level: 2, my_id: "11", my_level: 2 } }, res);
     // console.log(result);
      assert.deepEqual(result,{msg : "User created"});


    });

    it("verifies  Invalid input ", async function () {

        const result = await app.createUser({ body: { user_id: "iib201qwqwq9054", name :"Ganesh ",photo: "Asas", admin_level: 2, my_id: "11", my_level: 2 } }, res);
     // console.log(result);
      assert.deepEqual(result,{msg : "User ldap not found"});


    });

});

