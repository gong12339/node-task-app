const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

taskSchema.pre('save', async function(next) {
    const task = this;
    console.log('task save');
    console.log(task);
    next();
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
