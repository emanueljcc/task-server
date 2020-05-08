const express = require("express");
const TaskController = require("../controllers/TaskController");
const cors = require("cors");

function taskApi(app) {
    const router = express.Router();

    // enable cors
    app.use("/api/tasks", cors(), router);

    router.get("/", cors(), TaskController.getAll);

    router.get("/:id", cors(), TaskController.getId);

    router.post("/", cors(), TaskController.create);

    router.put("/:id", cors(), TaskController.update);

    router.delete("/:id", cors(), TaskController.deleted);

}

module.exports = taskApi;