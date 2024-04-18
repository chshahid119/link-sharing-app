import { MongoClient } from "mongodb";

export async function connectToCluseter(uri) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    console.log("Connection to MongoDB Atlas cluster...");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");

    return mongoClient;
  } catch (err) {
    console.log("Connection to MongoDB Atlas failed", error);
    process.exit();
  }
}

export async function executeCrudOperations() {
  const uri = process.env.DB_URL;
  let mongoClient;

  try {
    mongoClient = await connectToCluseter(uri);
  } finally {
    await mongoClient.close();
  }
}
