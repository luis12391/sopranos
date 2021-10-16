let _ = require('underscore')
let fs = require('fs')
let asyncforloop = require('@arteysoft/asyncforloop')

// Concepto de partial application
function suma(x, y) {
    return x + y
}


let suma10 = _.partial(suma, 10)
let suma11 = _.partial(suma, 11)
let suma12 = _.partial(suma, 12)

console.log(suma12(1000))

/*** PARA QUE SIRVE ESTO ?????????????????? */

// Las funciones async por convencion el ultimo parametro
// es una funcion que tiene primero err, obj

let leerArch = _.partial(fs.readFile, '/var/logging.log', 'utf8')

asyncforloop(10, (nro, next) => {
    leerArch((err, datos) => {
        console.log(err)
        console.log(datos)
        next()
    })
})


