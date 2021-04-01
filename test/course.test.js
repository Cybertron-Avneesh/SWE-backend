const assert = require('chai').assert;
const app = require('../functionalities/masters/course.js');
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

describe('Course Use case ', function () {
    it("verifies  add course function  with valid input", async function () {

        const result = await app.Course({ body: {my_id :"1",my_level:2,course_id:"_1st_course",semester_id: "1211",branch_id:"12",credits:4 ,course_name :"SWE",}, query:{action:1}}, res);
        //console.log(result);
        assert.deepEqual(result, { msg :"Course Added"});

    });

    it("verifies  course  listing function", async function () {

        const result = await app.Course({ body: {my_id :"1",my_level:2,branch_id:"12" ,}, query:{action:2}}, res);
        //console.log(result);
        assert.deepEqual(result,  { msg :"Course listed"});

    });


    it("verifies  Course updation function", async function () {

        const result = await app.Course({ body: {my_id :"1",my_level:2,course_id:"_1st_course",credits:4 ,course_name :"SWE",semester_id: "1211"}, query:{action:3}}, res);
        //console.log(result);
        assert.deepEqual(result, { msg :"Course updated "});

    });
    it("verifies  Course  deletion function", async function () {

        const result = await app.Course({ body: {my_id :"1",my_level:2,course_id:"_1st_course",semester_id: "1211"}, query:{action:4}}, res);
        //console.log(result);
        assert.deepEqual(result,    { msg :"Course deleted "});

    });

    







});
