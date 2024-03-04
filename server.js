const { MongoClient, ObjectId } = require('mongodb');



// Creating Server
const http = require('http');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
    // Set the Content-Type header to indicate that the response is in plain text format
    res.setHeader('Content-Type', 'text/plain');
    
    // Send back a simple response with a "Hello, World!" message
    res.end('Hello, World!\n');
});

// Start the server and listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


const uri = 'mongodb://localhost:27017'
const dbName = 'link-sharing';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
}


connect();


// CRUD OPERATIONS 

async function createDocument(collectionName, document) {
    const db = client.db(link-sharing);
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(document);
    console.log('Document inserted:', result.insertedId);
    return result.insertedId;
}

async function findDocuments(collectionName, query = {}) {
    const db = client.db(link-sharing);
    const collection = db.collection(collectionName);
    const documents = await collection.find(query).toArray();
    return documents;
}

async function updateDocument(collectionName, query, update) {
    const db = client.db(link-sharing);
    const collection = db.collection(collectionName);
    const result = await collection.updateOne(query, { $set: update });
    console.log('Document updated:', result.modifiedCount);
    return result.modifiedCount;
}

async function deleteDocument(collectionName, query) {
    const db = client.db(link-sharing);
    const collection = db.collection(collectionName);
    const result = await collection.deleteOne(query);
    console.log('Document deleted:', result.deletedCount);
    return result.deletedCount;
}


// Usage example
async function main() {
    const collectionName = 'users';
    
    // Create a document
    const userId = await createDocument(collectionName, { name: 'John Doe', age: 30 });

    // Read documents
    const users = await findDocuments(collectionName);
    console.log('All users:', users);

    // Update a document
    await updateDocument(collectionName, { _id: ObjectId(userId) }, { age: 31 });

    // Read updated documents
    const updatedUser = await findDocuments(collectionName, { _id: ObjectId(userId) });
    console.log('Updated user:', updatedUser);

    // Delete a document
    await deleteDocument(collectionName, { _id: ObjectId(userId) });

    // Read remaining documents
    const remainingUsers = await findDocuments(collectionName);
    console.log('Remaining users:', remainingUsers);
}

// Call the main function
main().catch(console.error);

