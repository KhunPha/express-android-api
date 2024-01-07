const express = require("express")
const app = express()
const PurchaseDetail = require("../controller/PurchaseDetailController")

app.post("/addpurchasedetail", PurchaseDetail.addPurchaseDetail)
app.get("/getpurchaseDetails", PurchaseDetail.getPurchaseDetail)
app.delete("/delete/:id", PurchaseDetail.removePurchaseDetail)
app.put("/update/:id", PurchaseDetail.updatePurchaseDetail)

module.exports = app