//  R'N'R   December 16, 2023

//Dependencies/variables
const express = require("express");
const port = 3000;


//main functionalty
const app = express();

app.get("/", (req, res) => {
    res.send(`Hello there`)
});

app.listen(port, () => {
    console.log(`Im alive on port ${port}`);
});