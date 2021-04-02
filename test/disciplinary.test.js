const assert = require('chai').assert;
const app = require('../functionalities/student/disciplinary.js');
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

describe('Disciplinary  ', function () {
    it("verifies  add Disciplinary", async function () {

        const result = await app.Disciplinary({ body: {my_id:"1",my_level:2,enrollment_id:"IIB2019000",action:"Test action",reason:"Test reason"}, query:{action:1}}, res);
     //   console.log(result);
        assert.deepEqual(result, { msg: "error " }
        );

    });


    it("verifies notifications listing ", async function () {

        const result = await app.Disciplinary({ body: {my_id:"1",my_level:2,enrollment_id:"IIB2019000"}, query:{action:2}}, res);
        //console.log(result);
        assert.deepEqual(result, { msg: "Listing succesfull" });

    });


   

});

