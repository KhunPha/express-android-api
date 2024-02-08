const mongoose = require("mongoose")

const PurchaseSchema = new mongoose.Schema({
    supplier_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Suppliers"
    },
    priority: {
        type: Number
    },
    p_date: {
        type: Date,
        default: Date.now
    },
    remark: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("Purchase", PurchaseSchema)