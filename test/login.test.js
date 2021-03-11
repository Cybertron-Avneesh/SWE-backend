const assert = require('chai').assert;
const app = require('../functionalities/auth/index.js');
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

describe('Login ', function () {
    it("verifies  valid log in details", async function () {

        const result = await app.verifyUser({ body: { user_id: "iib2019050", password: "iib2019050", admin_level: 2 } }, res);
   //     console.log(result);
        assert.equal(result.data, "Mr.X");

    });

    it("verifies  invalid log in details", async function () {

        const result = await app.verifyUser({ body: { user_id: "invalid kumar", password: "iib2019050", admin_level: 2 } }, res);
    //   console.log(result.msg);
        assert.deepEqual(result, { msg: 'Authentication Failed' });

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