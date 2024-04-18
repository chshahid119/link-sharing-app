import { MongoClient } from "mongodb";

export async function connectToCluseter(uri) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    console.log("Connection to MongoDb Atlas cluster...");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");

    return mongoClient;
  } catch (error) {
    console.log("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
}
