let log = console.log

let fn6 = z => {
    log('LLegue a fn6: ' + z)
    setTimeout(()=>{
        log('dentro del setTimeout')
        throw new Error('Fallo')
    } , 3000)
    setTimeout(()=>{
        log('dentro del setTimeout 2')
    } , 5000)

    if (z === 1000) {
        throw new Error('En nuestra logica, z no pueded ser 15')
    }
}

let fn5 = z => {
    log('Antes de llamar a fn6')
    fn6(z + 1)
    log('Despues de llamar a fn6')
}

let fn4 = z => {
    log('Antes de llamar a fn5')
    fn5(z + 1)
    log('Despues de llamar a fn5')
}

let fn3 = z => {
    log('Antes de llamar a fn4')
    fn4(z + 1)
    log('Despues de llamar a fn4')
}

let fn2 = z => {
    log('Antes de llamar a fn3')
    fn3(z + 1)
    log('Despues de llamar a fn3')
}

let fn1 = z => {
    log('Antes de llamar a fn2')
    fn2(z + 1)
    log('Despues de llamar a fn2')
}

try {
    fn1(10)
}
catch (err) {
    log('salio x error procedo a mostrar el stack trace')
    log(err)
    log('SIGUE LA EJECUCION !!!!')
}
