const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Separate models use case
const TaskSchema = new Schema({
    name: String,
    type: Number
});

const Tasks = mongoose.model('tasks', TaskSchema);

module.exports = Tasks;