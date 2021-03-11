const assert = require('chai').assert;
const app = require('../auth/index.js');
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

    const data = await app.verifyUser({ body: { username: "iib2019050", password: "iib2019050", admin_level: 2 } }, res);
    // res =app.verifyUser('{username:" ",password:"iib2019050",admin_level:2}');
    console.log(data);

    //expect(res).to.have.property("msg");
    expect(data).to.be.an('Object');
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

