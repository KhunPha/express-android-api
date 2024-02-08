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
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Categories"
    },
    unit_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Units"
    },
    remark: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("Products", ProductSchema)