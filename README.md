# SWE-backend

## How To run
* Download pgadmin version 13.2 from `https://www.enterprisedb.com/downloads/postgres-postgresql-downloads`<br>
* Run It
* Make a new server<br>
### config
`Name : localhost`<br> 
`Host name/addr : 127.0.0.1`<br> 
`Port : 5433`<br> 
`Password : <your PG password>`<br> 
HIT SAVE

### make database

* make a new database named 'amsaaa'<br>
HIT SAVE

### Setup node

* open terminal
* `git clone https://github.com/Cybertron-Avneesh/SWE-backend.git`
* `cd SWE-backend`
* `npm init -y`
*  Open utils/db.js change password in 'pool' with "your PG password"
* `nodemon index.js`

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
    "username":"iib2019050",
    "password":"iib2019050",
    "access_level":"2"
}
```
3. `/createuser`

Enter user_id,name,photo,admin_level for adding user<br>
(For now treat photo as varchar)
<br><br>
>Admin Level
>0:Operating User
>1:Priviledged User
>2:System Admin

**USE POSTMAN**<br>
```
{
    "user_id":"iib2019052",
    "name":"OP1",
    "photo":"",
    "admin_level":"0"
}
```
