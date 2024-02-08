const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema(
  {
    role_name: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Roles", RoleSchema);
