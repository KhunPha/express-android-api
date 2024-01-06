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
    }
}

module.exports = RoleController