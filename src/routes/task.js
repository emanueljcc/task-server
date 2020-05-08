const express = require("express");
const TaskController = require("../controllers/TaskController");

function taskApi(app) {
    const router = express.Router();

    app.use("/api/tasks", router);

    router.get("/", TaskController.getAll);

    router.get("/:id", TaskController.getId);

    router.post("/", TaskController.create);

    router.put("/:id", TaskController.update);

    router.delete("/:id", TaskController.deleted);

}

module.exports = taskApi;