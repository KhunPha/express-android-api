const PurchaseDetail = require("../model/PurchaseDetailModel")

const PurchaseDetailController = {
    addPurchaseDetail: async (req, res) => {
        try {
            const {
                pur_id,
                pro_id
            } = req.body

            const newPurchaseDetail = new PurchaseDetail({
                pur_id,
                pro_id
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
                message: error
            })
        }
    },
    removePurchaseDetail: async (req, res) => {
        try {
            const {id} = req.params

            await PurchaseDetail.findOneAndDelete(id)
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
    updatePurchaseDetail: async (req, res) => {
        try {
            const {id} = req.params
            const {
                pro_id
            } = req.body
            const $updateDoc = {$set: {pro_id: pro_id}}

            await PurchaseDetail.findOneAndUpdate({_id: id}, $updateDoc)
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

module.exports = PurchaseDetailController