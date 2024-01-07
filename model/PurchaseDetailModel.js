const mongoose = require("mongoose")

const PurchaseDetailSchema = new mongoose.Schema({
    pur_id: {
        type: String,
        required: true
    },
    pro_id: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Purchase_Details", PurchaseDetailSchema)