const assert = require('chai').assert;
const app = require('../functionalities/student/fee.js');
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
const newFee ={ 
    
    body:
     {
     my_id :"1",
     my_level:2,
     enrollment_id:"IIB2019051",
     semester_number:4,
     fee_status:0,
    },
     query:{action:1}
    
    }
 
    

const updateStudent ={ 
    
    body:
     {
     my_id :"1",
     my_level:2,
     enrollment_id:"IIB2019051",
     semester_number:4,
     fee_status:1,

    },
     query:{action:3}
    
    }
     

    const listFeeSpecific ={ 
    
        body:
         {
         my_id :"1",
         my_level:2,
         enrollment_id:"IIB2019051",
    
    
        },
         query:{action:2}
        
        }
         

    const listFeeAll={ 
    
        body:
         {
         my_id :"1",
         my_level:2,
         enrollment_id:"",
    
    
        },
         query:{action:2}
        
        }
         
describe('FEE Use case ', function () {
    it("verifies  add fee function  with valid input", async function () {

        const result = await app.Fees(newFee, res);
        //console.log(result);
        assert.deepEqual(result,  { msg: "Fees added" });

    });

    it("verifies  list fee function  for all student", async function () {

       const result = await app.Fees(listFeeAll, res);
      //  console.log(result);
        assert.deepEqual(result,  { msg: "Listed succesfull for all student" });

    });

    it("verifies  list fee function  for specific enrollment ID", async function () {

        const result = await app.Fees(listFeeSpecific, res);
       //  console.log(result);
         assert.deepEqual(result,  { msg: "Listed succesfull for Specific student" });
 
     });
     it("verifies  update fee function  for specific enrollment ID", async function () {

        const result = await app.Fees(updateStudent, res);
       //  console.log(result);
         assert.deepEqual(result,  { msg: "Student Fee Status updated" });
 
     });
 




});
