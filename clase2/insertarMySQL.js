let mysql = require('mysql2')

function insertarMySQL(metrica) {
    let objConnection = {
        host     : 'localhost',
        user     : 'root',
        password : 'Gonni2021*',
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

//insertarMySQL(100)

module.exports = insertarMySQL;