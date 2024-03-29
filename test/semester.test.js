const assert = require('chai').assert;
const app = require('../functionalities/masters/semester.js');
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

describe('Semester Use case ', function () {
    it("verifies  add Semester function  with valid input", async function () {

        const result = await app.Semester({ body: {my_id :"1",my_level:2,semester_id: "1234",branch_id:"branch_1",semester_num:3}, query:{action:1}}, res);
     //   console.log(result);
        assert.deepEqual(result,  {msg : "Semester added"});

    });

    it("verifies  Semester listing function", async function () {

        const result = await app.Semester({ body: {my_id :"1",my_level:2,branch_id:"branch_1" ,}, query:{action:2}}, res);
        //console.log(result);
        assert.deepEqual(result, {msg : "Semeser Listed"});

    });


  
    it("verifies  Semester  deletion function", async function () {

        const result = await app.Semester({ body: {my_id :"1",my_level:2,semester_id: "1234",}, query:{action:4}}, res);
        //console.log(result);
        assert.deepEqual(result,   {msg :"Semester deleted"});

    });

    







});
