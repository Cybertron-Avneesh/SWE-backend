const assert = require('chai').assert;
const app = require('../functionalities/masters/program.js');
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

describe('Program Use case ', function () {



    it("verifies  program Add functions with valid input", async function () {

        const result = await app.Program({ body: { my_id: "11", my_level: 2, program_id: "prog_8", program_name: "random" }, query: { action: 1 } }, res);

        assert.deepEqual(result, { msg: "programm added" });

    });
   

    it("verifies  ListProgram function", async function () {

        const result = await app.Program({ body: { my_id: "11", my_level: 2, }, query: { action: 2 } }, res);

        assert.deepEqual(result, { msg: "Listing succesfull" });

    });

    it("verifies  UpdateProgram function with valid input", async function () {

        const result = await app.Program({ body: { my_id: "11", my_level: 2, program_id: "prog_8", program_name: "changedName" }, query: { action: 3 } }, res);

        assert.deepEqual(result, { msg: "Update Successfull" });

    });

    it("verifies  UpdateProgram function with invalid input", async function () {

        const result = await app.Program({ body: { my_id: "11", my_level: 2, program_id: "prog_8", program_name: "changedName" }, query: { action: 3 } }, res);

        assert.deepEqual(result, { msg: "Update Successfull" });

    });


    it("verifies  deleteProgram function with valid input", async function () {

        const result = await app.Program({ body: { my_id: "11", my_level: 2, program_id: "prog_8" }, query: { action: 4 } }, res);

        assert.deepEqual(result, { msg: "Deleted successfully " });

    });










});

// describe('Login', function () {

//   it('verify ', function (done) {
//     app.verifyUser({ username: "asas ", password: "iib2019050", admin_level: 2 }
//       , function (isValid) {
//         assert.equal(isValid, "hello");
//         isValid.should.equal(true);
//         done();
//       });
//   });

// });
// it('should do something with promises', function(done) {
//   //define some data to compare against
//   var blah = 'foo';

//   //call the function we're testing
//   var result = app.verifyUser('{ username: "asas ", password: "iib2019050", admin_level: 2 }');

//   //assertions
//   result.then(function(data) {
//     expect(data).to.equal(blah);
//     done();
//   }).catch(done);
// });