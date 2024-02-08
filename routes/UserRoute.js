const express = require("express");
const app = express();
const User = require("../controller/UserController");
const UserAuth = require("../middleware/UserMiddleWare");

app.post("/register", User.register);
app.get("/getusers", User.getUser);
app.post("/login", User.login);
app.delete("/remove/:id", User.removeUser);
app.put("/update/:id", User.updateUser);

module.exports = app;
