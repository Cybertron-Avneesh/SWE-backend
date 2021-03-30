const assert = require('chai').assert;
const app = require('../functionalities/user/listuser.js');
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

describe('List Users ', function () {
   
    it("verifies  user listing ", async function () {

        const result = await app.listUser({ query: { admin_level: 3 } ,body: { my_id: "11", my_level: 2 } }, res);
       // console.log(result);
       // assert.deepEqual(result, { msg: 'Users Listed'});
        expect(result).to.eql( { msg: 'Users Listed'}); 
    });



});

