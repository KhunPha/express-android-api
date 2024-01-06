const mongoose = require("mongoose")

const UnitSchema = new mongoose.Schema({
    unit_name: {
        type: String,
        required: true
    },
    remark: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("Units", UnitSchema)