const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img_path: {
      type: String,
      default: "",
    },
    role_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roles",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);
