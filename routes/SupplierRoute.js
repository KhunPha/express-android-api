const express = require("express")
const app = express()
const Supplier = require("../controller/SuppierController")

app.post("/addsupplier", Supplier.addSupplier)
app.get("/getsuppliers", Supplier.getSupplier)
app.delete("/remove/:id", Supplier.removeSupplier)
app.put("/update/:id", Supplier.updateSuppiler)

module.exports = app