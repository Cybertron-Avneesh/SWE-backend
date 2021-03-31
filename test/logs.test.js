const assert = require('chai').assert;
const app = require('../functionalities/logs.js');
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

describe('Logs  ', function () {
    it("verifies  createlog functions", async function () {

        const result = await app.createlog("12","system admin","New Program");
     // console.log(result);
     assert.deepEqual(result, {msg: "logs created"});

    });
    it("verifies  getlog functions", async function () {

        const result = await app.getlog({ body: {}}, res);
     // console.log(result);
     assert.deepEqual(result, { msg: "logs fetched"});

    });

   

});

