const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");


app.get("/", (reg, res) =>{
    res.send("Welcome to my api");
});

app.post("/blogpost", (reg, res) => {
    res.send("This is a postrequest");
});



mongoose.
connect("mongodb+srv://Marcuslo00:admin123456@marcusapi.4eeoo.mongodb.net/Products-API?retryWrites=true&w=majority&appName=MarcusAPI")
.then(() =>{
    console.log("Connected to mongo");
    
    app.listen(PORT, () => {
        console.log("Listend to port 3000");
    });
});