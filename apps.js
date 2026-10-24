// require("./src/app");

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3004;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
