function unaClase() {
    let scopeDeLaClase = 1
    return function() {
        console.log(scopeDeLaClase)
        scopeDeLaClase++
    }
}

let obj = unaClase()
obj()
obj()
obj()
obj()
obj()

