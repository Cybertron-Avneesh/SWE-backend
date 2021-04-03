#!/bin/sh

echo "\n ------------------ AMSAAA UNIT TESTING ----------------------- "



mocha ./test/branch.test.js
echo "__________________________________________________________"
mocha ./test/course.test.js
echo "__________________________________________________________"
mocha ./test/permission.test.js
echo "__________________________________________________________"
mocha ./test/listUser.test.js
echo "__________________________________________________________"
mocha ./test/login.test.js
echo "__________________________________________________________"
mocha ./test/program.test.js
echo "__________________________________________________________"
mocha ./test/semester.test.js
echo "__________________________________________________________"
mocha ./test/createUser.test.js
echo "__________________________________________________________"
mocha ./test/removeUser.test.js
echo "__________________________________________________________"

mocha ./test/logs.test.js

echo "__________________________________________________________"

mocha ./test/student.test.js

echo "__________________________________________________________"

mocha ./test/disciplinary.test.js

echo "__________________________________________________________"

mocha ./test/notification.test.js