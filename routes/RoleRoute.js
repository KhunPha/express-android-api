const express = require("express")
const app = express()

const Role = require("../controller/RoleController")
const authHeader = require("../middleware/UserMiddleWare")

app.post("/addrole", authHeader, Role.addRole)

module.exports = app