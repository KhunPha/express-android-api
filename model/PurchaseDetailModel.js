const mongoose = require("mongoose")

const PurchaseDetailSchema = new mongoose.Schema({
    pur_id: {
        type: String,
        required: true
    },
    pro_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Products"
    },
    qty: {
        type: Number
    },
    price: {
        type: Number
    },
    amound: {
        type: Number
    }
}, {timestamps: true})

module.exports = mongoose.model("Purchase_Details", PurchaseDetailSchema)