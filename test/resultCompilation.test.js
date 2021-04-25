const assert = require('chai').assert;
const app = require('../functionalities/student/resultCompilation.js');
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
const newResult ={ 
    
    body:
     {
     my_id :"1",
     my_level:2,
     semester_number:2,
     total_credits:20,
     sgpi:8.1,
   // enrollment_id:"IIB2019055",


    },
     query:{action:1}
    
    }

    const listResult ={ 
    
        body:
         {
         my_id :"1",
         my_level:2,
         semester_number:2,
    
    
        },
         query:{action:2}
        
        }
    const newInvalidResult ={ 
    
        body:
         {
         my_id :"1",
         my_level:2,
     
     
    
    
        },
         query:{action:1}
        
        }
    
    




describe('Result Use case ', function () {
    it("verifies  add result function  with valid input", async function () {

        const result = await app.resultCompilation(newResult, res);
        //console.log(result);
        assert.deepEqual(result,  { msg: "results : Added" });

    });

    it("verifies  add listresult function  with valid input", async function () {

        const result = await app.resultCompilation(listResult, res);
        //console.log(result);
        assert.deepEqual(result,  ret = { msg: "Listing succesfull" });

    });

   





});
