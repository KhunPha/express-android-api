const mongoose = require("mongoose")

const SupplierSchema = new mongoose.Schema({
    supplier_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        require: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Suppliers", SupplierSchema)