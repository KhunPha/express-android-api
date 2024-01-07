const Role = require("../model/RoleModel")

const RoleController = {
    addRole: async (req, res) => {
        try {
            const {
                role_name
            } = req.body
    
            const newRole = new Role({
                role_name
            })
    
            await newRole.save()
            res.status(201).json(newRole)
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
            })
        }
    },
    getRole: async (req, res) => {
        try {
            const getRoles = await Role.find() 

            res.status(201).json({
                data: getRoles
            })
        } catch (error) {
            res.status(201).json({
                error: true,
                message: error
            })
        } 
    },
    updateRole: async (req, res) => {
        try {
            const {id} = req.params
            const{
                role_name
            } = req.body

            const $updateDoc = {$set: {role_name: role_name}}

            await Role.findOneAndUpdate({_id: id}, $updateDoc)

            res.status(201).json({
                message: "Update Successfully"
            })
        } catch (error) {
           res.status(402).json({
            error: true,
            message: error
           }) 
        }
    },
    removeRole: async (req, res) => {
        try {
            const {id} = req.params

            await Role.findOneAndDelete(id)

            res.status(201).json({
                message: "Delete Successfully"
            })
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
            })
        }
    }
}

module.exports = RoleController