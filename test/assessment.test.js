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
     enrollment_id:"iib2019001",
     course_id:"course_1",
     semester_number:2,
     c1:23,
     c2:11,
     c3:12,


    },
    query: { action: 1 }
    
    }


    const listAssessment ={ 
    
        body:
         {
         my_id :"1",
         my_level:2,
         enrollment_id:"iib2019001",
        
    
    
        },
        query: { action: 2 }
        
        }

describe('Assessment Use case ', function () {
    it("verifies  add marks function  with valid input", async function () {

        const result = await app.assessment(newAssessment, res);
        //console.log(result);
        assert.deepEqual(result,  { msg: "marks added" });

    });


    it("verifies  list marks function  with valid input", async function () {

        const result = await app.assessment(listAssessment, res);
        //console.log(result);
        assert.deepEqual(result, { msg: "Listing succesfull" });

    });






});
