//  R'N'R   December 16, 2023

//Dependencies/variables
const express = require("express");
const port = 3000;


//main functionalty
const app = express();

//default route setup
app.get("/", (req, res) => {
    //main message and counter link setup
    res.send(`<h1>99 bottles of beer on the wall</h1><a href="/98">Take one down, pass it around</a>`)
});

//route for decreasing the number of bottles
app.get("/:number_of_bottles", (req, res) => {
    const bottles = parseInt(req.params.number_of_bottles);
    //when done
    if(bottles === 0) {
        //the final message and start over logic appear
        res.send(`<h1>N more bottles of beer left on the wall</h1><a href="/"Start Over</a>`);

    }   else {
        //counting down message and logic
        res.send(`<h1>${bottles} Bottles of beer on the wall</h1><a href="/${bottles - 1}">Take one down, pass it around</a>`);
    }
});



app.listen(port, () => {
    console.log(`Im alive on port ${port}`);
});