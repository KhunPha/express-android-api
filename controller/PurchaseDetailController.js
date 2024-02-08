const PurchaseDetail = require("../model/PurchaseDetailModel")

const PurchaseDetailController = {
    addPurchaseDetail: async (req, res) => {
        try {
            const {
                pur_id,
                pro_id,
                qty,
                price,
                amount
            } = req.body

            const newPurchaseDetail = new PurchaseDetail({
                pur_id,
                pro_id,
                qty,
                price,
                amount
            })

            await newPurchaseDetail.save()
            res.status(201).json({
                data: newPurchaseDetail,
                message: "Create Successfully"
            })
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error.message
            })
        }
    },
    getPurchaseDetail: async (req, res) => {
        try {
            const getPurchaseDetails = await PurchaseDetail.find()

            res.status(201).json(getPurchaseDetails)
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error.message
            })
        }
    },
    removePurchaseDetail: async (req, res) => {
        try {
            const {id} = req.params

            await PurchaseDetail.findByIdAndDelete(id)
            res.status(201).json({
                message: "Delete Successfully"
            })
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error.message
            })
        }
    },
    updatePurchaseDetail: async (req, res) => {
        try {
            const {id} = req.params
            const {
                pro_id,
                qty,
                price,
                amount
            } = req.body
            const $updateDoc = {$set: {pro_id: pro_id, qty: qty, price: price, amount: amount}}

            await PurchaseDetail.findByIdAndUpdate(id, $updateDoc)
            res.status(201).json({
                message: "Update Successfully"
            })
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error.message
            })
        }
    }
}

module.exports = PurchaseDetailController