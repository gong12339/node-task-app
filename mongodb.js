// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    db.collection('users').insertMany([{
        name: 'Divine fish',
        age: 27
    }, {
        name: 'fish',
        age: 2
    }, {
        name: 'sekiro',
        age: 3
    }], (error, result) => {
        if (error) {
            return console.log('Unable to insert user');
        } else {
            console.log(result.ops);
        }
    });
})