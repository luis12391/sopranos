let express = require('express')
let loginRouter = express.Router()
let logger = require('../lib/logger')('login')
let crypto = require('../lib/crypto')
let userService = require('../services/userService')

loginRouter.post('/login', async (req, resp, next) => {
    logger.info(req.body.usuario)
    logger.info(req.body.password)

    let user = await userService.getUserByUserName(req.body.usuario);
    if (!user){
        next(new Error('Contraseña o Usuario incorrectos. 1 '));
        return;
    }

    var isSamePassword = crypto.comparar(req.body.password, user.id, user.password);

    if (!isSamePassword){
        next(new Error('Contraseña o Usuario incorrectos.'));
        return;
    }
            
    resp
        .status(200)
        .send(JSON.stringify({status: 'ok'}))
})

module.exports = loginRouter