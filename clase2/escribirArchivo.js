let asyncforloop = require('@arteysoft/asyncforloop')
let fs = require('fs')
const {EOL} = require('os');

asyncforloop(10, (nroIteracion, next, abort) => {
    let path = '/var/sopranos/log.txt'
    let data = [nroIteracion, EOL].join('')
    fs.appendFile(path, data, 'utf8', err => {
        if (err) {
            abort(err)
            return
        }
        next()
    })
},
err => {
    if (err) {
        console.log(err)
        return
    }
    console.log('termino de ejecutar')
})