const express = require("express")
const app = express()

const Role = require("../controller/RoleController")
const authHeader = require("../middleware/UserMiddleWare")

app.post("/addrole", Role.addRole)
app.get("/getroles", Role.getRole)
app.put("/update/:id", Role.updateRole)
app.delete("/delete/:id", Role.removeRole)

module.exports = app