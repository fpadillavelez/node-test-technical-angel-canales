const express = require('express');

// App
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', [router]);

module.exports = app;
