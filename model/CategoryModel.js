const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    cate_name: {
        type: String,
        required: true
    },
    remark: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("Categories", CategorySchema)