const mongoose = require('mongoose');

const tasksSchema = mongoose.Schema({
    task: {
        type: String,
        require
    }
});

module.exports = mongoose.model('tasks', tasksSchema)