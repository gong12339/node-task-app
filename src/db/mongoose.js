const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017';
const apiName = 'task-manager-api'

mongoose.connect(connectionURL + '/' + apiName, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});