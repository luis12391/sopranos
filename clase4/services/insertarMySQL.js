let mysql = require('mysql2/promise')

function insertarMySQL(metrica) {
    let objConnection = {
        host     : 'localhost',
        user     : 'root',
        password : 'Rally2021*',
        database : 'lossopranos'
    }

    let connection = null;
    connection = mysql.createConnection(objConnection);
    connection.connect(err => {
        if (err) {
            console.log(err)
            return;
        }

        let strSQL = 'INSERT INTO eventos values (now(), "httpRequests", ?)'
        connection.query(strSQL, [metrica], (err, results)=>{
            if (err) {
                console.log(err)
                return
            }
            connection.end()
        })
    })
}

async function selectMySQLUserByUserName(userName) {
    let objConnection = {
        host     : 'localhost',
        user     : 'root',
        password : 'Gonni2021*',
        database : 'lossopranos'
    }

    const connection = await mysql.createConnection(objConnection);
    // query database
    const [rows, fields] = await connection.execute('SELECT id,usuario,password,salt FROM lossopranos.usuarios where usuario = ?', [userName]);
    if (rows.length <= 0) {
        return null;
    }
    return rows[0];
}
module.exports = selectMySQLUserByUserName
