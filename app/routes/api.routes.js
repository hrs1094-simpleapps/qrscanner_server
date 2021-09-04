module.exports = app => {
    const qrscanner = require("../controllers/api.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/addDevice/", qrscanner.create);

    // Retrieve all qrscanner
    router.get("/", qrscanner.findAll);

    // Retrieve all published qrscanner
    router.get("/published", qrscanner.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", qrscanner.findOne);

    // Update a Tutorial with id
    router.put("/:id", qrscanner.update);

    // Delete a Tutorial with id
    router.delete("/:id", qrscanner.delete);

    // Create a new Tutorial
    router.delete("/", qrscanner.deleteAll);

    app.use('/api/qrscan', router);
};