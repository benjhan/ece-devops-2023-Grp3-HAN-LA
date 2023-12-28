const express = require('express')
const userController = require('../controllers/user')

const userRouter = express.Router()

userRouter
  .post('/', (req, resp) => {
    userController.create(req.body, (err, res) => {
      let respObj
      if(err) {
        respObj = {
          status: "error",
          msg: err.message
        }
        return resp.status(400).json(respObj)
      }
      respObj = {
        status: "success",
        msg: res
      }
      resp.status(201).json(respObj)
    })
  })
  .get('/:username', (req, resp, next) => {
    const username = req.params.username
    resp.send(`Informations pour l'utilisateur ${username}`)
  })

  .get('/marco', (req, resp, next) => {
    // Traitez la requête pour /user/marco ici
    resp.send('Traitementdf')
  })
  
module.exports = userRouter
