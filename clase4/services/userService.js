let selectMySQLUserByUserName = require('./insertarMySQL');

async function getUserByUserName(name) {
    //TO DO: Falta traer los datos al mongodbid
    return await selectMySQLUserByUserName(name);
}


module.exports = {
    getUserByUserName,
}