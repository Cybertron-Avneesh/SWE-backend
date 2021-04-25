const assert = require('chai').assert;
const app = require('../functionalities/student/assessment.js');
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
const newAssessment ={ 
    
    body:
     {
     my_id :"1",
     my_level:2,
     enrollment_id:"IIB2019000",
     course_id:"1111",
     semester_number:2,
     c1:23,
     c2:11,
     c3:12,


    },
    
    
    }




describe('Assessment Use case ', function () {
    it("verifies  add marks function  with valid input", async function () {

        const result = await app.assessment(newAssessment, res);
        //console.log(result);
        assert.deepEqual(result,  { msg: "marks added" });

    });


   




});
