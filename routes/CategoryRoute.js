const express = require("express")
const app = express()
const Category = require("../controller/CategoryController")

app.post("/addcategory", Category.addCategory)
app.get("/getcategory", Category.getCategory)
app.delete("/remove/:id", Category.removeCategory)
app.put("/update/:id", Category.updateCategory)

module.exports = app