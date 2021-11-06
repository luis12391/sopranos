let sha256 = require('sha256')

function encriptar(passwordClear, salt) {
    let textoEncriptar = [passwordClear, salt].join('__')
    return sha256(textoEncriptar)
}

function comparar(passwordClear, salt, passwordGuardada) {
    var encryptedPassword =  encriptar(passwordClear, salt);
    if (encryptedPassword == passwordGuardada)
        return true;
    return false;
}

module.exports = {
    encriptar,
    comparar
}