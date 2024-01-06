const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    img_path: {
        type: String
    },
    role_id: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Users", UserSchema)