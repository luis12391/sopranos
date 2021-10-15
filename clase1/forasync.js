var asyncforloop = require('@arteysoft/asyncforloop')

/*
for (let x = 1; x <= 100; x++) {

}
*/

asyncforloop(100, (nroIteracion, next, abort) => {
    console.log(nroIteracion)
    //if (nroIteracion === 55) {
    //    abort(new Error('guarda que el 55 es mufa!!!'))
    //    return
    //}
    next()
}, err => {
    console.log(err)
    console.log('finalizo el asyncforloop')
})
