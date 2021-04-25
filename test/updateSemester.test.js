const assert = require('chai').assert;
const app = require('../functionalities/student/updateSemester.js');
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
const newSem ={ 
    
    body:
     {
     my_id :"1",
     my_level:2,
     program_id:"prog_3"
   // enrollment_id:"IIB2019055",


    },
    
    }

    const newSemInvalid ={ 
    
        body:
         {
         my_id :"1",
         my_level:2,
      
       // enrollment_id:"IIB2019055",
    
    
        },
        
        }
    

describe('Update Semester  Use case ', function () {
    it("verifies  add update Semester function  with valid input", async function () {

        const result = await app.UpdateSemester(newSem, res);
        //console.log(result);
        assert.deepEqual(result,  { msg :"Semester updated"});

    });







});
