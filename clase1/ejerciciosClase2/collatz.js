var asyncforloop = require('@arteysoft/asyncforloop');
/*
Conjetura de collatz

Conjetura de collatz en youtube paenza

3n + 1

Algoritmo

3n + 1 ---- si es par se divide por 2 hasta que sea impar

3.7 + 1 ----- 22 / 2 - 11 si es impar se aplica 3n+1

34 es par ? si se divide por 2 - 17 es impar por ende se aplica 3n + 1


Conjetura es que cualquier numero termina en 1


Como podria ser el ejercicio. A una funcion le paso un número y 
me devuelve un array con todos los puntos que toco.

let arr = collatz(37)

IMPORTANTE: la conjetura dice que cualquier numero entra en un loop
infinito de 4,2,1  4,2,1  4,2,1  4,2,1  4,2,1  4,2,1  4,2,1  4,2,1
*/

const NUMBER = 7;

var collatzChains = [];

function isOdd(num) { 
    return num % 2;
}

const getCollatz = (number) => {
    
    collatzChains.push(number);

    if (number <= 4){
        collatzChains = [...collatzChains,2,1];
        return;  
    }
      
    if (isOdd(number)) 
        number = (number*3)+1;
    else
        number = number / 2;
        
    getCollatz(number);
}

const start = () => {
    try {
        console.log(`Getting collatz chains of ${NUMBER}`);
        getCollatz(NUMBER);
        console.log(`Collatz chains ${collatzChains.toString()}`);        
    } catch (error) {
        console.log("An error has ocurred"); 
        console.log(`error`); 
    }

};
start();


