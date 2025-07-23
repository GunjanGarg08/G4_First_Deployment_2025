// http://localhost:8060/searchingphone

const express = require("express");
const app = express();
const port = 8060

app.use(express.json());

let phone = [
    {
        company : "apple",
        model : "iPhone 13",
        variant : "256GB"
    },
    {
        company : "samsung",
        model : "Galaxy S21",
        variant : "128GB"
    },
    {
        company : "google",
        model : "Pixel 6",
        variant : "128GB"
    },
    {
        company : "oneplus",
        model : "OnePlus 9",
        variant : "256GB"
    }
]



app.listen(port, () => {
    console.log(`Server running on ${port}`);
})

app.get("/searchingphone",(req, res) => {
    console.log("Welcome to phone search");
    console.log(req.query);
    res.json({
        message: " your query recieved",
        // query: "not received"
        query: req.query
    })
})