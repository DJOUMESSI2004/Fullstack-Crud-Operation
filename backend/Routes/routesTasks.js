const { Router } = require('express');
const { getTasks, saveTasks, updateTask, deleteTask } = require('../controllers/TaskController');

const routes = Router();

routes.get("/get", getTasks);
routes.post("/save", saveTasks);
routes.put("/update/:id", updateTask);
routes.delete("/delete/:id", deleteTask);

module.exports = routes;
