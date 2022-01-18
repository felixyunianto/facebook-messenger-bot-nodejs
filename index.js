require("dotenv").config({});
const express = require("express");
const app = express();
const _PORT = process.env.PORT || 3000;

const rootRoute = require('./src/routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', rootRoute);

app.listen(_PORT, () => {
    console.log(`Server is running on port ${_PORT}`);
});
