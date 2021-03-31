const assert = require('chai').assert;
const app = require('../functionalities/masters/branch.js');
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

describe('Branch Use case ', function () {
    it("verifies  add branch with valid input", async function () {

        const result = await app.Branch({ body: {my_id :"1",my_level:2,branch_id:"_first",program_id:"111221" ,branch_name :"Chemical",}, query:{action:1}}, res);
        //console.log(result);
        assert.deepEqual(result, {msg: "Branch Added"});

    });

    it("verifies  branch listing function", async function () {

        const result = await app.Branch({ body: {my_id :"1",my_level:2,program_id:"111221" ,}, query:{action:2}}, res);
        //console.log(result);
        assert.deepEqual(result, {msg :"Successfully Listed "});

    });


    it("verifies  branch updation function", async function () {

        const result = await app.Branch({ body: {my_id :"1",my_level:2,branch_id:"_first",branch_name :"It-BI",}, query:{action:3}}, res);
        //console.log(result);
        assert.deepEqual(result, {msg : "Branch  updated"});

    });
    it("verifies  branch deletion function", async function () {

        const result = await app.Branch({ body: {my_id :"1",my_level:2,branch_id:"_first",program_id:"111221"}, query:{action:4}}, res);
        //console.log(result);
        assert.deepEqual(result,  {msg: "Branch deleted "});

    });

    







});
