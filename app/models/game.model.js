const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  console: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true
  },
  genre: {
    type: String,
    require: true,
  },
  grade: {
    type: Number,
    require: true,
  },
  developer: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Game = mongoose.model('Game', GameSchema, 'games')

module.exports = { Game }