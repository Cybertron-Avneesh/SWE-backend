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
    it("verifies  valid log in details", async function () {

        const result = await app.Branch({ body: {my_id :"1",my_level:2,branch_id:"12",program_id:"1212" ,branch_name :"It-BI",}, query:{action:1}}, res);
        console.log(result);
        assert.deepEqual(result, { msg: "error"});

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