const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Doc House Is On The Way");
});

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

// Connect to MongoDB and keep the connection alive
async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log("Successfully connected to MongoDB!");

        // Collections
        const userCollection = client.db("docHouseDb").collection("users");

        // Users collection - Add a new user
        app.post('/users', async (req, res) => {
            try {
                const user = req.body;
                console.log("Received user data:", user); // Log the user data to see what is being sent
                const result = await userCollection.insertOne(user);
                console.log("Insertion result:", result); // Log the result of the insertion
                res.status(201).send(result);
            } catch (error) {
                console.error("Error inserting user:", error); // Log the error
                res.status(500).send({ message: "Error inserting user", error });
            }
        });
        

    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}

run().catch(console.dir);

// Start the server
app.listen(port, () => {
    console.log(`Doc House Is On The Way At Port ${port}`);
});
