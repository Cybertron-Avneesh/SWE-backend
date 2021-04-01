const assert = require('chai').assert;
const app = require('../functionalities/user/permission.js');
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

describe('Grant/Revoke Permission  ', function () {
    it("Revoke Permisson", async function () {

        const result = await app.grantRevoke({ body: { my_id: "11", user_id: "iib2019052" ,admin_level:1,has_access:0} }, res);
       // console.log(result);
       // assert.deepEqual(result, { msg: 'Users Listed'});
        expect(result).to.eql(  { msg :"Access Revoked"}); 
    });

    it("Grant Permisson", async function () {

        const result = await app.grantRevoke({ body: { my_id: "11", user_id: "iib2019052" ,admin_level:1,has_access:1} }, res);
       // console.log(result);
       // assert.deepEqual(result, { msg: 'Users Listed'});
        expect(result).to.eql(  { msg :"Access Granted"}); 
    });




});

