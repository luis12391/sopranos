let fs = require('fs')
let asyncforloop = require('@arteysoft/asyncforloop')

function crearPromise() {
    return new Promise((resolve, reject)=>{
        fs.readFile('/var/logging.log', 'utf8', (err, datos) => {
            if (err) {
                reject(err)
                return
            }
            resolve(datos)
        })
    })
}

function crearPromise2() {
    return new Promise((resolve, reject) => {
        fs.readFile('/var/sarasa.txt', 'utf8', (err, datos) => {
            if (err) {
                reject(err)
                return
            }
            resolve(datos)
        })
    })
}


asyncforloop(10, (nroIteracion, next, abort) => {
    crearPromise()
    .then(d => {
        console.log(d)
        return crearPromise2()
    })
    .then(z => console.log(z))
    .then(() => next())
    .catch(err => {
        console.log('hubo un error')
        console.log(err)
        console.log('continua la ejecucion')
        abort(err)
    })
}, err => {
    if (!err) {
       return
    }
    console.log(err)
})



