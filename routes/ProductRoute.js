const express = require("express")
const app = express()
const Product = require("../controller/ProductController")

app.post("/addproduct", Product.addProduct)
app.get("/getproducts", Product.getProduct)
app.delete("/remove/:id", Product.removeProduct)
app.put("/update", Product.updateProduct)

module.exports = app