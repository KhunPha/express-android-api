const Supplier = require("../model/SupplierModel")

const Suppliercontroller = {
    addSupplier: async (req, res) => {
        try {
            const {
                supplier_name,
                address
            } = req.body

            const newSupplier = new Supplier({
                supplier_name,
                address
            })

            await newSupplier.save()
            res.status(201).json({
                data: newSupplier,
                message: "Create Successfully"
            })
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
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
                message: error
            })
        }
    },
    removeSupplier: async (req, res) => {
        try {
            const {id} = req.params

            await Supplier.findOneAndDelete(id)
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
    updateSuppiler: async (req, res) => {
        try {
            const {id} = req.params
            const {
                supplier_name,
                address
            } = req.body
            const $updateDoc = {$set: {supplier_name: supplier_name, address: address}}

            await Supplier.findOneAndUpdate({_id: id}, $updateDoc)
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

module.exports = Suppliercontroller