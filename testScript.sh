#!/bin/sh


mocha ./test/branch.test.js
mocha ./test/course.test.js
mocha ./test/permission.test.js
mocha ./test/listUser.test.js
mocha ./test/login.test.js
mocha ./test/program.test.js
mocha ./test/semester.test.js
mocha ./test/createUser.test.js
mocha ./test/removeUser.test.js

mocha ./test/logs.test.js