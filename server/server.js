const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log(`server connected on PORT: ${process.env.PORT}`);
});

mongoose.connect(process.env.dbURI);
