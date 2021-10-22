let cuenta = 0;
const TIEMPO_ENTRE_REPETICIONES = 10000;
let insertarMySQL = require('./insertarMySQL');


function incrementar(){
    cuenta++;
}

function iniciarCiclo(){
    console.log(`La cantidad de httprequest para el ciclo es de ${cuenta}`);
    insertarMySQL(cuenta);
    cuenta = 0;
    setTimeout(iniciarCiclo,TIEMPO_ENTRE_REPETICIONES);
}

iniciarCiclo();

module.exports = incrementar;

