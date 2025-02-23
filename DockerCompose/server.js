//create a nodejs programme to listen on port 3000 and return a response by fetching records from the database for db running on port 8081
const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

const dbName = 'cruDB';
const collection = 'users';
//establish connection to Mongod DB with url
const url = 'mongodb://admin:admin@localhost:27017/';
// MongoDB URI
const dbURI = 'mongodb://localhost/'+dbName;
const mongoose = require('mongoose');
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true,user: "admin",
              pass: "admin",authSource: "admin" })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//fetch data from the users collection in the testdb database
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// create a model from the schema
const User = mongoose.model('User', userSchema);
//fetch data from the users collection in the testdb database
app.get('/mongoose/users', async (req, res) => {
    const users = await User.find();
    console.log(`fetching data using mongoose ${users}`);
    console.log(users);
    res.send(users);
});




const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/users',async (req, res) => {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const data = await db.collection(collection).find({}).toArray();
    console.log(data);
    res.send(data);
    client.close();
});