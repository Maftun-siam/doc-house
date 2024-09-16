const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = "mongodb+srv://doc-house:Siam339880@cluster0.swrxkqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let userCollection;
let servicesCollection;

// Connect to MongoDB and initialize collections
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db('docHouseDb'); // Replace with your actual database name
        userCollection = db.collection('users');
        servicesCollection = db.collection('services');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
}

// Call the function to connect to MongoDB
connectToMongoDB();

// Ensure `servicesCollection` is available before handling routes
app.get('/services', async (req, res) => {
    try {
        if (!servicesCollection) {
            return res.status(500).send({ message: 'Database not initialized' });
        }
        const services = await servicesCollection.find().toArray();
        res.status(200).send(services);
    } catch (error) {
        console.error('Error retrieving services:', error);
        res.status(500).send({ message: 'Failed to retrieve services' });
    }
});

// Users collection - Add a new user
app.post('/users', async (req, res) => {
    try {
        if (!userCollection) {
            return res.status(500).send({ message: 'Database not initialized' });
        }
        const user = req.body;
        console.log("Received user data:", user);
        const result = await userCollection.insertOne(user);
        console.log("Insertion result:", result);
        res.status(201).send(result);
    } catch (error) {
        console.error("Error inserting user:", error);
        res.status(500).send({ message: "Error inserting user", error });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Doc House Is On The Way At Port ${port}`);
});
