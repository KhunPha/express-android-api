const Purchase = require("../model/PurchaseModel")

const PurchaseController = {
    addPurchase: async (req, res) => {
        try {
            const {
                supplier_id,
                priority,
                p_date,
                remark
            } = req.body

            const newPurchase = new Purchase({
                supplier_id,
                priority,
                p_date,
                remark
            })

            await newPurchase.save()
            res.status(201).json({
                data: newPurchase,
                message: "Create Successfully"
            })
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
            })
        }
    },
    getPurchase: async (req, res) => {
        try {
            const getPurchases = await Purchase.find()

            res.status(201).json(getPurchases)
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
            })
        }
    },
    removePurchase: async (req, res) => {
        try {
            const {id} = req.params

            await Purchase.findOneAndDelete(id)
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
    updatePurchase: async (req, res) => {
        try {
            const {id} = req.params
            const {
                supplier_id,
                priority,
                remark
            } = req.body
            const $updateDoc = {$set: {supplier_id: supplier_id, priority: priority, remark: remark}}

            await Purchase.findOneAndUpdate({_id: id}, $updateDoc)
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

module.exports = PurchaseController