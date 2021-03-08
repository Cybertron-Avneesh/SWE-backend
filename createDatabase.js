exports.createdb = async function (client) {

    await client
        .query('CREATE TABLE ldap(user_id VARCHAR(100),password VARCHAR(100),unique_id INT PRIMARY KEY);')
        .then(res => console.log("Table Created"))
        .catch(err => console.error(err));

    await client
        .query('CREATE TABLE user_table(name VARCHAR(100),photo VARCHAR(100),unique_id INT REFERENCES ldap(unique_id) ON DELETE CASCADE);')
        .then(res => console.log("Table Created"))
        .catch(err => console.error(err));
}