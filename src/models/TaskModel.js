const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Separate models use case
const TaskSchema = new Schema({
    active: Boolean,
    name: String,
    comment: String,
});

const Tasks = mongoose.model('tasks', TaskSchema);

module.exports = Tasks;