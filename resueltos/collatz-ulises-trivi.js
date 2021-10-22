//Conjetrua de Collatz

/*
ALGORITMO

3n + 1 ---> Sí es par se divido por 2 hasta que sea impar.

3.7 + 1 = 22 / 2 = 11 ---> Cuando es impar se aplica 3n + 1.

Posible resolucion, una funcion le paso un numero y me devuleve un array con todos los puntos que toco.
*/

var estaEnElLoop = z => z === 4 || z === 2 || z === 1
var esPar = z => z % 2 === 0
var esImpar = z => esPar(z) === false
var dividirx2 = z => z / 2
var aplicarFormula = z => (z * 3) + 1
var mayorAuno = z => z > 1

var collatz = function(n){
    let arr = []
    let c = 0;

    while (mayorAuno(n)) {
        console.log("N cuando entra a la funcion: ", n)
        if(esImpar(z)) {
            n = aplicarFormula(n)
        } else {
            n = dividirx2(n)
        }
        arr.push(n)
        c++;
    }

    return `Se recorrio un total de ${c} puntos: ${arr}`;
}

// console.log(collatz(7))

console.log(aplicarFormula(2))