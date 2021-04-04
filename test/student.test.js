const assert = require('chai').assert;
const app = require('../functionalities/student/student.js');
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
const newStudent ={ 
    
    body:
     {
     my_id :"1",
     my_level:2,
     enrollment_id:"IIB2019055",
     email_id: "dungeon@gamer.com",
     name:"Ramesh",
     dob:"11/5/96" ,
     age :18,
     photo:" ",
     phone_num:922922222,
     address:"22/24 karol bagh",
     program_id:"prog_3",
     branch_id:"unique_5",
     section:"A",
     current_semester_number:4,
     cgpi:5.55,
     credits_completed:140,
     grade_card:"test grade card",
     medal:"3",


    },
     query:{action:1}
    
    }


const updateStudent ={ 
    
    body:
     {
     my_id :"1",
     my_level:2,
     enrollment_id:"IIB2019055",
     email_id: "dungeon@gamer.com",
     name:"Ghanshyam",
     dob:"11/5/96" ,
     age :18,
     photo:" ",
     phone_num:922922222,
     address:"22/24 karol bagh",
     program_id:"prog_3",
     branch_id:"unique_5",
     section:"A",
     current_semester_number:4,
     cgpi:5.55,
     credits_completed:140,
     grade_card:"test grade card",
     medal:"3",


    },
     query:{action:3}
    
    }
     


describe('Student Use case ', function () {
    it("verifies  add student function  with valid input", async function () {

        const result = await app.Student(newStudent, res);
        //console.log(result);
        assert.deepEqual(result,  { msg: "Student Added" });

    });


    it("verifies  update student function  with valid input", async function () {

        const result = await app.Student(updateStudent, res);
        //console.log(result);
        assert.deepEqual(result,   { msg: "Student data updated" });

    });

    it("verifies  remove student function  with valid input", async function () {

        const result = await app.Student({ body:{ enrollment_id:"IIB2019055", my_id :"1",my_level:2,},query:{action:4}}, res);
        //console.log(result);
        assert.deepEqual(result,   { msg: "Student un-enrolled " });

    });

    it("verifies  list student function  with valid input", async function () {

        const result = await app.Student({ body:{ my_id :"1",my_level:2,},query:{action:2},url:"student/create/IIB2019051?action=2'"}, res);
        //console.log(result);
        assert.deepEqual(result,   { msg: "Successfully listed student data " });

    });






});
