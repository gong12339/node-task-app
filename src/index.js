const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch(error => {
        res.status(400).send(error);
    })
});

app.get('/users/:id', (req, res) => {
    const _id = req.params.id;
    User.findById(_id).then(users => {
        if (!users) {
            res.status(404).send('User not found')
        }
        res.send(users);
    }).catch(error => {
        res.status(500).send();
    })
});

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    task.save().then(() => {
        res.status(201).send(task);
    }).catch(error => {
        res.status(400).send(error);
    })
});

app.get('/tasks', (req, res) => {
    Task.find({}).then(tasks => {
        res.send(tasks);
    }).catch(error => {
        res.status(500).send();
    })
});

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;
    Task.findById(_id).then(tasks => {
        if (!tasks) {
            res.status(404).send('Task not found')
        }
        res.send(tasks);
    }).catch(error => {
        res.status(500).send();
    })
});

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});