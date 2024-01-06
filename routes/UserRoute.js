const express = require("express")
const app = express()
const User = require("../controller/UserController")

app.post("/register", User.register)
app.get("/getusers", User.getUser)
app.post("/login", User.login)
app.post("/remove/:id", User.removeUser)
app.post("/update/:id", User.updateUser)

module.exports = app