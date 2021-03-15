# SWE-backend

## How To run
* Download pgadmin version 13.2 from `https://www.enterprisedb.com/downloads/postgres-postgresql-downloads`<br>
* Run It
* Make a new server<br>
### server config
`Name : localhost`<br> 
`Host name/addr : 127.0.0.1`<br> 
`Port : 5433`<br> 
`Password : password`<br> 
HIT SAVE

### make database

* make a new database named 'amsaaa'<br>
HIT SAVE

### Setup node

* open terminal
* `git clone https://github.com/Cybertron-Avneesh/SWE-backend.git`
* `cd SWE-backend`
* `npm init -y`
* `npm i pg`
* `npm i nodemon`
* `npm i cors`
* `nodemon index.js`
* for installing mocha & chai (unit testing)
* `npm install mocha chai --save-dev`
## Routs

1. `/createdb`

IT will create all tables

2. `/filldummydata`

To fill some dummy data

3. `/login`

Enter user_id and password for authentication
<br><br>
**USE POSTMAN**<br>
```
{
    "user_id":"iib2019050",
    "password":"iib2019050",
    "admin_level":"2"
}
```
3. `/user/create`

Enter user_id,name,photo,admin_level for adding user<br>
(For now treat photo as varchar)
<br><br>
>Admin Level<br>
>0 : Operating User<br>
>1 : Priviledged User<br>
>2 : System Admin<br>

**USE POSTMAN**<br>
```
{
    "my_id":"iib2019050",
    "my_level":2,
    "user_id":"iib2019052",
    "name":"OP1",
    "photo":"",
    "admin_level":"0"
}
```

4. `/user/list?admin_level='admin_level'`

Enter 'admin_level' for viewing Filtered Users List<br>
<br><br>
>Admin Level<br>
>0 : View Operating User<br>
>1 : View Priviledged User<br>
>2 : View System Admin<br>
>3 : View All Users<br>

**USE POSTMAN**<br>
```
Expected json
{
    "my_id":"iib2019050",
    "my_level":1
}
```
5. `/user/permission`

**ONLY FOR PREVILEDGED USERS**<br><br>

Enter user_id of operating user and value of 'has_access'<br>
<br><br>

**USE POSTMAN**<br>
```
Expected json
{
    "my_id":"iib2019051",
    "has_access":"0/1",
    "my_level":1,
    "user_id":"iib2019052"
}
```

6. `/masters/program?action='action num'`

Route is self explanatory<br>

>Action Value Defination for all crud APIs<br>
>1 : Create<br>
>2 : List<br>
>3 : Update<br>
>4 : Delete
<br>
<br>
**USE POSTMAN**<br>

```
Expected json for Create
{
    "my_id":"iib2019051",
    "my_level":1,
    "program_id":"B.Tech",
    "program_name":"Bachelor of Technology"
}
```

7. `/masters/branch?action='action num'`
8. `/masters/semester?action='action num'`
9. `/masters/course?action='action num'`
