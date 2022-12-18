module.exports = app => {
    const jogo = require("../controllers/jogo.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", jogo.create);

    // Retrieve all Tutorials
    router.get("/", jogo.findAll);

    // Retrieve all Tutorials
    router.get("/playstation", jogo.findAllPlaystation);

    // Retrieve all Tutorials
    router.get("/xbox", jogo.findAllXbox);

    // Retrieve all Tutorials
    router.get("/switch", jogo.findAllSwitch);

    // Retrieve all Tutorials
    router.get("/pc", jogo.findAllPC);

    // Retrieve a single Tutorial with id
    router.get("/:id", jogo.findOne);

    // Retrieve a single Tutorial with id
    router.post("/review/:id", jogo.makeReview);

    // Update a Tutorial with id
    router.put("/:id", jogo.update);

    // Delete a Tutorial with id
    router.delete("/:id", jogo.delete);

    // Delete all Tutorials
    router.delete("/", jogo.deleteAll);

    app.use('/api/jogos', router);
};