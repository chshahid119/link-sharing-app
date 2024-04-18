import { connectToCluseter } from "./database";

export async function executeCrudOperations() {
  const uri = process.env.DB_URI;
  let mongoClient;

  try {
    mongoClient = await connectToCluseter(uri);
  } finally {
    await mongoClient.close();
  }
}
