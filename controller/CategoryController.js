const Category = require("../model/CategoryModel")

const CategoryController = {
    addCategory: async (req, res) => {
        try {
            const {
                cate_name,
                remark
            } = req.body
    
            const newCategory = new Category({
                cate_name,
                remark
            })
    
            await newCategory.save()
            res.status(201).json({
                data: newCategory,
                messsage: "Create Successfully"
            })
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
            })
        }
    },
    getCategory: async (req, res) => {
        try {
            const getCategories = await Category.find()

            res.status(201).json(getCategories)
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
            })
        }
    },
    removeCategory: async (req, res) => {
        try {
            const {id} = req.params

            await Category.findOneAndDelete(id)
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
    updateCategory: async (req, res) => {
        try {
            const {id} = req.params
            const {
                cate_name,
                remark
            } = req.body
            const $updateDoc = {$set: {cate_name: cate_name, remark: remark}}

            await Category.findOneAndUpdate({_id: id}, $updateDoc)
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

module.exports = CategoryController