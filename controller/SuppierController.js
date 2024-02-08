const Supplier = require("../model/SupplierModel")

const Suppliercontroller = {
    addSupplier: async (req, res) => {
        try {
            const {
                supplier_name,
                address,
                contact,
                remark
            } = req.body

            const newSupplier = new Supplier({
                supplier_name,
                address,
                contact,
                remark
            })

            await newSupplier.save()
            res.status(201).json({
                data: newSupplier,
                message: "Create Successfully"
            })
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error.message
            })
        }
    },
    getSupplier: async (req, res) => {
        try {
            const getSuppliers = await Supplier.find()

            res.status(201).json(getSuppliers)
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error.message
            })
        }
    },
    removeSupplier: async (req, res) => {
        try {
            const {id} = req.params

            await Supplier.findByIdAndDelete(id)
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
    updateSuppiler: async (req, res) => {
        try {
            const {id} = req.params
            const {
                supplier_name,
                address,
                contact,
                remark
            } = req.body
            const $updateDoc = {$set: {supplier_name: supplier_name, address: address, contact: contact, remark: remark}}

            await Supplier.findByIdAndUpdate(id, $updateDoc)
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

module.exports = Suppliercontroller