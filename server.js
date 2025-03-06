require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock data simulating database
const mockData = [
  { id: 1, date_recorded: "2023-03-06T10:00:00", active_customers: 5000, countries_served: 30, nodes_online: 1200, transactions: 15000, blocks_added: 350 },
  { id: 2, date_recorded: "2023-03-06T11:00:00", active_customers: 5100, countries_served: 31, nodes_online: 1220, transactions: 15200, blocks_added: 355 },
  { id: 3, date_recorded: "2023-03-06T12:00:00", active_customers: 5200, countries_served: 32, nodes_online: 1240, transactions: 15400, blocks_added: 360 },
  { id: 4, date_recorded: "2023-03-06T13:00:00", active_customers: 5300, countries_served: 33, nodes_online: 1260, transactions: 15600, blocks_added: 365 },
  { id: 5, date_recorded: "2023-03-06T14:00:00", active_customers: 5400, countries_served: 34, nodes_online: 1280, transactions: 15800, blocks_added: 370 },
  { id: 6, date_recorded: "2023-03-06T15:00:00", active_customers: 5500, countries_served: 35, nodes_online: 1300, transactions: 16000, blocks_added: 375 },
  { id: 7, date_recorded: "2023-03-06T16:00:00", active_customers: 5600, countries_served: 36, nodes_online: 1320, transactions: 16200, blocks_added: 380 },
  { id: 8, date_recorded: "2023-03-06T17:00:00", active_customers: 5700, countries_served: 37, nodes_online: 1340, transactions: 16400, blocks_added: 385 },
  { id: 9, date_recorded: "2023-03-06T18:00:00", active_customers: 5800, countries_served: 38, nodes_online: 1360, transactions: 16600, blocks_added: 390 },
];

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Routes
app.use("/api/auth", require("./routes/auth"));
// API endpoint to fetch mock data
app.get("/api/data", (req, res) => {
  res.json(mockData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
