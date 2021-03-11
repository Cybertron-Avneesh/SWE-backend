const assert = require('chai').assert;
const app = require('../auth/index.js');
const { expect } = require('chai');
var should = require('chai').should();

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
describe('Login ', function () {
  it("verifies log in details", async function () {

    const res = await app.verifyUser({ body: { password: "iib2019050", admin_level: 2 } });
    // res =app.verifyUser('{username:" ",password:"iib2019050",admin_level:2}');

    //expect(res).to.have.property("msg");
    expect(res).to.be.an('Object');
  }
  );
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

