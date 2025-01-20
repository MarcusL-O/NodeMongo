require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const Product = require("./models/productModel");
app.use(express.json());



app.get("/", (req, res) =>{
    res.send("Welcome to my api");
});

app.post("/blogpost", (req, res) => {
    res.send("This is a postrequest");
});

//läser in en product REad
app.get("/api/product/:id", async(req, res) => {
    try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);

    } catch (error) {
        res.status(500);
    }
});

//update by id

app.put("/api/product/:id", async (req, res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if(!product) {
        return res.status(400).json ({message: "produkten finns inte"});
    }

    res.status(200).json(product);
});

// läsa ALLA producter, R Read
app.get("/api/products", async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json.apply(products)
    } catch (error) {
        res.status(500).json({messsage: error.message});
    }
});



// create
app.post("/api/product", async (req, res) => {
   
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch(error) {
        console.log(error.message)
        res.status(404);
    }
});

mongoose.
connect(process.env.MONGO_URI)
.then(() =>{
    console.log("Connected to mongo");
    
    app.listen(PORT, () => {
        console.log("Listend to port 3000");
    });
});