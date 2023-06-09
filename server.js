require('dotenv').config();

// express for backend
const express = require('express');
// mongodb to store data
const mongodb = require('mongodb').MongoClient;

// express() is a global function
const app = express();

const PORT = process.env.PORT || 3001;

// connection string to local instance of monggodb, including database name
const connectionStringURI = `mongodb+srv://mongo:${process.env.MONGO_PASSWORD}@azimebirthday.xkfugto.mongodb.net/birthdayDB?retryWrites=true&w=majority`;

// declare a variable to hold the connection
let db;

// connects to mongodb and returns the reference to the database
mongodb.connect(
    connectionStringURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        db = client.db();
        app.listen(PORT, () => {
            console.log(`Example app listening at http:://localhost:${PORT}`)
        })
    }
)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app = express
// letting express know that the 'public' folder has static content
// static means that it is served in the browser. such as images, css, js. it is not processed by the server.
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.post('/formSubmit', (req, res) => {
    // 'formResponses' is the name of the collection
    db.collection('formResponses').insertOne(
        req.body,
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error while saving to database");
            } else {
                console.log(`Saved document with _id: ${results.insertedId} to the database.`);
                res.status(200).send("Data saved successfully");
            }
        });
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });