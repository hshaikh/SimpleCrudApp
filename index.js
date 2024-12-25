const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log("Web Server is running on port 3000");
});

mongoose
  .connect(
    "mongodb+srv://hunainshaikh:ehc1Txw9Pc@nodebackenddb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeBackendDB"
  )
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch(() => {
    console.log("Not connected to MongoDB");
  });

/*
app.get("/", (req, res) => {
  res.send("Hello from Node API Web Server on port 3000");
});

app.post("/api/products", async (req, res) => {
  try {
    console.log(req.body);
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch(error) {
    res.status(500).json({message: error.message});
  }  
});


app.get("/api/allproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch(error) {
    res.status(500).json({message: error.message});
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch(error) {
    res.status(500).json({message: error.message});
  }
});

// Update Product
app.put("/api/products/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product)
      return res.status(404).json({message: "Product not found"});

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch(error) {
    res.status(500).json({message: error.message});
  }
});

// Delete Product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product)
      return res.status(404).json({message: "Product not found"});

    res.status(200).json("Product with id: " + id + " deleted successfully");
  } catch(error) {
    res.status(500).json({message: error.message});
  }
});

app.post("/api/products", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
*/
