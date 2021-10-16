let _ = require('underscore')

// Concepto de partial application
function suma(x) {
    return function(y) {
        return x + y
    }
}

console.log(suma(10)(7))

let suma10 = suma(10)
let suma11 = suma(11)
let suma12 = suma(12)

console.log(suma11(1000))

