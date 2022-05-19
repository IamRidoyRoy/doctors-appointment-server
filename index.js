const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hey doctor Uncle!');
})

app.listen(port, () => {
    console.log('Listening to port', port)
})

// Connect to database:
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wrkx6.mongodb.net/?retryWrites=true&w=majority"`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log('DB connected')
    client.close();

});

