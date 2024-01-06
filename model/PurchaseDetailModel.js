const mongoose = require("mongoose")

const PurchaseDetailSchema = new mongoose.Schema({
    pur_id: {
        type: String
    },
    pro_id: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("Purchase_Details", PurchaseDetailSchema)