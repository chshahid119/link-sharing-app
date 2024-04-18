import { config } from "dotenv";
import { executeCrudOperations } from "./crudOperations.js";

config();
// console.log(process.env.DB_URL);

await executeCrudOperations();
