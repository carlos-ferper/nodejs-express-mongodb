const { Router } = require('express')
const { GameController } = require('../controllers/game.controller')

const gameController = new GameController()
const routes = Router()
routes.post('/game', gameController.create)
routes.get('/games', gameController.findAll)
routes.get('/game/:id', gameController.findOne)

module.exports = { routes }