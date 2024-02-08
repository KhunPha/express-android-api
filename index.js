const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const User = require("./routes/UserRoute");
const Role = require("./routes/RoleRoute");
const Unit = require("./routes/UnitRoute");
const Supplier = require("./routes/SupplierRoute");
const Purchase = require("./routes/PurchaseRoute");
const PurchaseDetail = require("./routes/PurchaseDetailRoute");
const Product = require("./routes/ProductRoute");
const Category = require("./routes/CategoryRoute");

const User = require("../model/UserModel");

dotenv.config();
require("./connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", (req, res) => {
  res.json({
    message: "Welcome to my API",
  });
});

app.use("/user/getusers", async (req, res) => {
  try {
    const { id } = req.params;
    const getUsers = await User.aggregate([
      {
        $lookup:
        {
          from: "roles",
          localField: "role_id",
          foreignField: "_id",
          as: "user_role"
        }
      }
    ]);

    res.status(201).json({
      id: id,
      data: getUsers,
      status: true,
    });
  } catch (error) {
    res.status(402).json({
      error: true,
      message: error.message,
    });
  }
})

app.use("/user", User);
app.use("/role", Role);
app.use("/unit", Unit);
app.use("/supplier", Supplier);
app.use("/purchase", Purchase);
app.use("/purchasedetail", PurchaseDetail);
app.use("/product", Product);
app.use("/category", Category);

app.listen(process.env.PORT, () => {
  console.log("http://localhost:" + process.env.PORT);
});
