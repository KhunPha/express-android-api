const express = require("express")
const app = express()
const Purchase = require("../controller/PurchaseController")

app.post("/addpurchase", Purchase.addPurchase)
app.get("/getpurchases", Purchase.getPurchase)
app.delete("/remove/:id", Purchase.removePurchase)
app.put("/update/:id", Purchase.updatePurchase)

module.exports = app