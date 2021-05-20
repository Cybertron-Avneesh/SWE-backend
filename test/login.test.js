const assert = require('chai').assert;
const app = require('../functionalities/auth/login.js');
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

describe('Login ', function () {
    it("verifies  valid log in details", async function () {

        const result = await app.verifyUser({ body: { user_id: "iib2019053", password: "iib2019053", admin_level: 0 } }, res);
     // console.log(result);
     assert.deepEqual(result, { msg: 'Authentication Verified' });

    });

    it("verifies  invalid log in details", async function () {

        const result = await app.verifyUser({ body: { user_id: "invalid kumar", password: "iib2019050", admin_level: 2 } }, res);
    //   console.log(result.msg);
        assert.deepEqual(result, { msg: 'Authentication Failed' });

    });
    it("verifies  empty details", async function () {

        const result = await app.verifyUser({ body: {  password: "iib2019050", admin_level: 2 } }, res);
     // console.log(result);
      assert.deepEqual(result, { msg: 'User ID and password are mandatory' });
     

    });

});

