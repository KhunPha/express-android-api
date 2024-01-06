const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express()

const User = require("./routes/UserRoute")
const Role = require("./routes/RoleRoute")
dotenv.config()
require("./connection")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use("/user", User)
app.use("/role", Role)

app.listen(process.env.PORT, () => {
    console.log("http://localhost:" + process.env.PORT)
})