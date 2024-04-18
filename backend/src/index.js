import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error("Failed to connect to MongoDB:", err);
    return;
  }
  const db = client.db();
  console.log("Database created!");
  client.close();
});
