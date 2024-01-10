const Product = require("../model/ProductModel")

const ProductController = {
    addProduct: async (req, res) => {
        try {
            const {
                pro_name,
                qty,
                price,
                cate_id,
                unit_id,
                remark
            } = req.body

            const newProduct = new Product({
                pro_name,
                qty,
                price,
                cate_id,
                unit_id,
                remark
            })

            await newProduct.save()
            res.status(201).json({
                data: newProduct,
                message: "Create Successfully"
            })
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error.message
            })
        }
    },
    getProduct: async (req, res) => {
        try {
            const getProducts = await Product.find()

            res.status(201).json(getProducts)
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error.message
            })
        }
    },
    removeProduct: async (req, res) => {
        try {
            const {id} = req.params

            await Product.findByIdAndDelete(id)
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
    updateProduct: async (req, res) => {
        try {
            const {id} = req.params
            const {
                pro_name,
                qty,
                price,
                cate_id,
                unit_id,
                remark
            } = req.body
            const $updateDoc = {$set: {pro_name: pro_name, qty: qty, price: price, cate_id: cate_id, unit_id: unit_id, remark: remark}}

            await Product.findByIdAndUpdate(id, $updateDoc)
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

module.exports = ProductController