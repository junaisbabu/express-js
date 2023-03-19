const {MongoClient} = require('mongodb');

const PORT = 27017;
const uri = `mongodb://localhost:${PORT}`;

const client = new MongoClient(uri);

const db = client.db('sept_batch');
const users = db.collection('users');

users.find({}).toArray().then((data) => {
    console.log(data);
    client.close();
});
 