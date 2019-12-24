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

    db.collection('users').findOne({name: 'fish'}, (error, user) => {
        if (error) {
            console.log(error);
        }

        console.log(user);
    })

    db.collection('users').find({name: 'fish'}).toArray((error, users) => {
        console.log(users);
    })

    db.collection('users').updateOne({
        _id: new ObjectID('5df4e85be645e91d6b088595')
    }, {
        $set: {
            name: 'Mike2'
        }
    }).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })
})