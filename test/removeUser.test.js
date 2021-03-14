const assert = require('chai').assert;
const app = require('../functionalities/user/removeUser.js');
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

describe('Remove User  ', function () {
    it("verifies remove user with valid  ", async function () {

        const result = await app.removeUser({ body: { user_id: "iib2019055",  my_id: "11", my_level: 1 } }, res);
    //     console.log(result);
        assert.deepEqual(result, { msg:"User removed"});

    });

   


});

