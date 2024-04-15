const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes will go here

app.post("/api/v1/data", (req, res) => {
  const data = req.body;
  console.log("Received data from front end:", data);
  // Here you can process the received data
  res.json({ message: "Data received successfully!" });
});

app.post("/api/v1/data", (req, res) => {
  const data = req.body;
  console.log("Received data from front end:", data);
  // Here you can process the received data
  res.json({ message: "Data received successfully!" });
});

app.get("/api/v1/data", (req, res) => {
  // Here you can retrieve data from your database or any source
  const jokes = [
    {
      id: 1,
      joke: "Main aik gadha hon hahahah",
    },
    {
      id: 2,
      joke: "Main aik gadha hon hahahah",
    },
    {
      id: 3,
      joke: "Main aik gadha hon hahahah",
    },
  ]; // Example data
  res.json(jokes);
});

app.delete("/api/v1/data/:id", (req, res) => {
  const id = req.params.id;
  // Here you can delete data with the given ID
  console.log(`Deleted data with ID: ${id}`);
  res.json({ message: "Data deleted successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
