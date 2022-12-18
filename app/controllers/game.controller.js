const { Game } = require('../models/game.model')
const { GameMapper } = require('../mappers/game.mapper')

class GameController {
  async create(req, res) {
    try {
      if (!req.body.title) {
        res.status(400).send({ message: 'Content can not be empty!' })
        return
      }
      const { title, console, img, desc, genre, developer } = req.body

      const game = await Game.create({
        title,
        console: console.toLowerCase(),
        img,
        desc,
        genre,
        developer,
        grade: 0,
        reviews: [],
      })
      return res.status(201).json(GameMapper.toJson(game))
    } catch (e) {
      return res.status(400).json({ error: e.message })
    }
  }

  async findAll(req, res) {
    try {
      const games = await Game.find().sort({ grade: -1 })
      return res.status(200).json(games.map(GameMapper.toJson))
    } catch (err) {
      return res.status(500).json({
        message: err.message || 'Some error occurred while retrieving games',
      })
    }
  }

  async findOne(req, res) {
    try {
      const { id } = req.params
      if (!id) return res.status(400).json({ error: 'Id is required' })
      const game = await Game.findById(id)
      if (!game) return res.status(404).json({ error: 'Game not found' })
      return res.status(200).json(GameMapper.toJson(game))
    } catch (e) {
      return res.status(500).json({
        message: err.message || 'Some error occurred while retrieving games',
      })
    }
  }

  async makeReview(req, res) {
    try {
    } catch (e) {
      return res.status(500).json({
        message: err.message || 'Some error occurred while retrieving games',
      })
    }
  }
}

// exports.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!"
//     });
//   }

//   const id = req.params.id;

//   Jogo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update Jogo with id=${id}. Maybe Jogo was not found!`
//         });
//       } else res.send({ message: "Jogo was updated successfully." });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Jogo with id=" + id
//       });
//     });
// };

// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Jogo.findByIdAndRemove(id)
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Jogo with id=${id}. Maybe Jogo was not found!`
//         });
//       } else {
//         res.send({
//           message: "Jogo was deleted successfully!"
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Jogo with id=" + id
//       });
//     });
// };

// exports.deleteAll = (req, res) => {
//   Jogo.deleteMany({})
//     .then(data => {
//       res.send({
//         message: `${data.deletedCount} Jogos were deleted successfully!`
//       });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all Jogos."
//       });
//     });
// };

// exports.findAllPlaystation = (req, res) => {
//   Jogo.find({ console: 'playstation' }).select("title console img desc genre developer grade").sort({grade: -1})
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };

// exports.findAllXbox = (req, res) => {
//   Jogo.find({ console: 'xbox' }).select("title console img desc genre developer grade").sort({grade: -1})
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };

// exports.findAllSwitch = (req, res) => {
//   Jogo.find({ console: 'switch' }).select("title console img desc genre developer grade").sort({grade: -1})
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };

// exports.findAllPC = (req, res) => {
//   Jogo.find({ console: 'pc' }).select("title console img desc genre developer grade").sort({grade: -1})
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };

// exports.makeReview = (req, res) => {
//   const id = req.params.id;

//   Jogo.findById(id)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Jogo with id " + id });
//       else {
//         var nota = Number(req.body.grade);
//         data.grade = ((data.grade*data.__v)+nota)/(data.__v+1);
//         var review = {
//           "grade": req.body.grade,
//           "review": req.body.review

//         }
//         data.reviews.push(review);
//         data.save(data)
//           .then(data => {
//             res.send(data);
//           })
//           .catch(err => {
//             res.status(500).send({
//               message:
//                 err.message || "Some error occurred while saving review."
//             });
//           });
//       };
//     })
//     .catch(err => {
//       console.log(err);
//       res
//         .status(500)
//         .send({ message: "Error retrieving Jogo with id=" + id });
//     });
// };

module.exports = { GameController }
