const fs = require('fs');
var asyncforloop = require('@arteysoft/asyncforloop');

function start(){
    var numbers= "";
    asyncforloop(100, (nroIteracion, next, abort) => {
        try {
            numbers+= `Estoy en la interacion ${nroIteracion + 1}\n`;
            next()            
        } catch (error) {
            abort(new Error('Se ha proiducido un error!!!'))
        }

    }, err => {
        if (err)
            console.log(err)
        else{
            numbers+= `Terminaron los números.`;
            writeAFile(numbers);
        }


        console.log('finalizo el asyncforloop')
    })
};

function writeAFile (numbers){
    fs.writeFile('./cosignaLuis.txt', `${numbers}`, error => {
        if (error)
          console.log(error);
        else
          console.log('El archivo fue creado');
      });
};

start();
  