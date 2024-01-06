const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    pro_name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
    },
    price: {
        type: Number
    },
    cate_id: {
        type: String
    },
    unit_id: {
        type: String
    },
    remark: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("Products", ProductSchema)