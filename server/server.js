require('dotenv').config();
const express = require("express");
const dbConfig = require('./config/db');
const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

dbConfig();
// app.use(express.urlencoded({ extended: true }))
app.use(express.json()); 
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
