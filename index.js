const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId;
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the city electric server");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cbpdo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port);