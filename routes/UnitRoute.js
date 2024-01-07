const Unit = require("../controller/UnitController")
const express = require("express")
const app = express()

app.post("/addunit", Unit.addUnit)
app.get("/getunit", Unit.getUnit)
app.delete("/remove/:id", Unit.removeUnit)
app.put("/update/:id", Unit.updateUnit)

module.exports = app