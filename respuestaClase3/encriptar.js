var sha256 = require('sha256');
const SALT = "nhfelalada";

function encriptar(pass){
    return sha256(`${pass}${SALT}`);
}

const readPasswrd = (cb) => {
    var stdin = process.openStdin();
    stdin.addListener("data", function(text) {
        try {
            var pass = text.toString().trim();
            cb(undefined,pass);
        } catch (error) {
            cb(new Error("An error has occurred"));
        }
    });
} 

const start = () => {
    console.log("Starting app...");
    console.log("Ingresa una contraseña...");
    readPasswrd((err, firstPass) => {
        if (err) {
            console.log(err);
        }
        console.log(`Las contraseña ingresada fue: ${firstPass}`);

        console.log("Ingresa nuevamente la contraseña");
        readPasswrd((err, secondPass) => {

            if (err) {
                console.log(err);
            }

            console.log(`Las contraseña ingresada fue: ${secondPass}`);

            let firstEncryptedPass =  encriptar(firstPass);
            let secondEncryptedPass =  encriptar(secondPass);

            if (firstEncryptedPass == secondEncryptedPass) {
                console.log(`Las contraseña son iguales`);
            }else{
                console.log(`Las contraseña son distintas`);
            }
            console.log(firstEncryptedPass);
            console.log(secondEncryptedPass);
            process.exit();
        });
    });
} 

start();