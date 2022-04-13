const express = require('express');

// App
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("../mainRoutes"));


module.exports = app;
