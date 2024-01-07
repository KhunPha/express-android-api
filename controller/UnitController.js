const Unit = require("../model/UnitModel")

const UnitController = {
    addUnit: async (req, res) => {
        try {
            const {
                unit_name,
                remark
            } = req.body

            const newUnit = new Unit({
                unit_name,
                remark
            })

            await newUnit.save()

            res.status(201).json({
                data: newUnit,
                message: "Create Successfully"
            })
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
            })
        }
    },
    getUnit: async (req, res) => {
        try {
            const getUnits = await Unit.find()

            res.status(201).json({
                data: getUnits
            })
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
            })
        }
    },
    removeUnit: async (req, res) => {
        try {
            const {id} = req.params

            await Unit.findByIdAndDelete(id)

            res.status(201).json({
                message: "Delete Successfully"
            })
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
            })
        }
    },
    updateUnit: async (req, res) => {
        try {
            const {id} = req.params
            const {
                unit_name,
                remark
            } = req.body

            const $updateDoc = {$set: {unit_name: unit_name, remark: remark}}

            await Unit.findOneAndUpdate({_id: id}, $updateDoc)

            res.status(201).json({
                message: "Update Successfully"
            })
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
            })
        }
    }
}

module.exports = UnitController