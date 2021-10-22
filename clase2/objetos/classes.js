class Contador {
    #cuenta = 0

    constructor() {
        this.#cuenta = 0
    }

    incrementar() {
        this.#cuenta++
        return this.#cuenta
    }
}

let contador = new Contador()
contador.incrementar()
contador.incrementar()
contador.incrementar()
let ultimaVez = contador.incrementar()
console.log(ultimaVez)