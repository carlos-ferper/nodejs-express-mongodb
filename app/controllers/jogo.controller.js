const db = require("../models");
const Jogo = db.jogo;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const jogo = new Jogo({
    title: req.body.title,
    console: req.body.console.toLowerCase(),
    img: req.body.img,
    desc: req.body.desc,
    genre: req.body.genre,
    developer: req.body.developer,
    grade: 0,
    reviews: []
  });

  jogo
    .save(jogo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.findAll = (req, res) => {

  Jogo.find().sort({grade: -1})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Jogo.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Jogo with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Jogo with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Jogo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Jogo with id=${id}. Maybe Jogo was not found!`
        });
      } else res.send({ message: "Jogo was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Jogo with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Jogo.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Jogo with id=${id}. Maybe Jogo was not found!`
        });
      } else {
        res.send({
          message: "Jogo was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Jogo with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Jogo.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Jogos were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Jogos."
      });
    });
};

exports.findAllPlaystation = (req, res) => {
  Jogo.find({ console: 'playstation' }).select("title console img desc genre developer grade").sort({grade: -1})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findAllXbox = (req, res) => {
  Jogo.find({ console: 'xbox' }).select("title console img desc genre developer grade").sort({grade: -1})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findAllSwitch = (req, res) => {
  Jogo.find({ console: 'switch' }).select("title console img desc genre developer grade").sort({grade: -1})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findAllPC = (req, res) => {
  Jogo.find({ console: 'pc' }).select("title console img desc genre developer grade").sort({grade: -1})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.makeReview = (req, res) => {
  const id = req.params.id;

  Jogo.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Jogo with id " + id });
      else {
        var nota = Number(req.body.grade);
        data.grade = ((data.grade*data.__v)+nota)/(data.__v+1);
        var review = {
          "grade": req.body.grade,
          "review": req.body.review

        }
        data.reviews.push(review);
        data.save(data)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while saving review."
            });
          });
      };
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .send({ message: "Error retrieving Jogo with id=" + id });
    });
};