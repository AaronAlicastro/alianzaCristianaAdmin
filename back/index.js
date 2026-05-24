const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send({ saludo: "hola mundo" })
})

app.listen(2003);