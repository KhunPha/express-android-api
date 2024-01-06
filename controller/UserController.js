const User = require("../model/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const UserController = {
    register: async (req, res) => {
        try {
            const {
                first_name,
                last_name,
                username,
                password,
                img_path,
                role_id
            } = req.body
    
            const salt = await bcrypt.genSalt()
            const hashPassword = await bcrypt.hash(password, salt)
    
            const newUser = new User({
                first_name,
                last_name,
                username,
                password: hashPassword,
                img_path,
                role_id
            })

            await newUser.save()

            res.status(201).json(newUser)
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
            })
        }
    },
    getUser: async (req, res) => {
        try {
            const getUsers = await User.find()

            res.status(201).json(getUsers)
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
            })
        }
    },
    login: async (req, res) => {
        try {
            const {
                username,
                password
            } = req.body
            const user = await User.findOne({username})
            if(!user){
                return res.status(401).json({
                    error: true,
                    message: "Username not found!"
                })
            }
            const pass = await bcrypt.compare(password, user.password)
            if(!pass){
                return res.status(401).json({
                    error: true,
                    message: "Incorrect password!"
                })
            }

            const token = getToken(user)

            res.status(201).json({
                data: user,
                token: token
            })
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
            })
        }
    },
    removeUser: async (req, res) => {
        try {
            const {
                id
            } = req.params

            const deleteUser = await User.findOneAndDelete(id)

            res.status(201).json(deleteUser)
        } catch (error) {
            res.status(402).json({
                error: true,
                message: error
            })
        }
    },
    updateUser: async (req, res) => {
        try {
            const {
                id
            } = req.params

            const {
                first_name,
                last_name,
                username,
                img_path,
                role_id
            } = req.body

            const docUpdate = {$set: {first_name: first_name, last_name: last_name, username: username, img_path: img_path, role_id: role_id}}

            const updateUser = await User.findOneAndUpdate({_id: id}, docUpdate, {upsert: true})

            res.status(201).json(updateUser.id)
        } catch (error) {
            res.status(401).json({
                error: true,
                message: error
            })
        }
    }
}

module.exports = UserController

function getToken(user){
    return jwt.sign({data: user}, process.env.JWT_KEY, {expiresIn: "5h"})
}