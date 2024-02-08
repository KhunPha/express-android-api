const User = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Role = require("../model/RoleModel")

const UserController = {
  register: async (req, res) => {
    try {
      const { first_name, last_name, username, password, role_id, img_path } =
        req.body;

      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        first_name,
        last_name,
        username,
        password: hashPassword,
        role_id,
        img_path,
      });

      await newUser.save();

      res.status(201).json({
        message: "Create Successfully",
        status: true,
      });
    } catch (error) {
      res.status(402).json({
        error: true,
        message: error.message,
      });
    }
  },
  getUser: async (req, res) => {
    try {
      const { id } = req.params;
      const getUsers = await User.aggregate([
        {
          $lookup:
          {
            from: "roles",
            localField: "role_id",
            foreignField: "_id",
            as: "user_role"
          }
        }
      ]);

      res.status(201).json({
        id: id,
        data: getUsers,
        status: true,
      });
    } catch (error) {
      res.status(402).json({
        error: true,
        message: error.message,
      });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({
          status: false,
          message: "Username not found!",
        });
      }
      const pass = await bcrypt.compare(password, user.password);
      if (!pass) {
        return res.status(401).json({
          status: false,
          message: "Incorrect password!",
        });
      }

      const token = getToken(user);

      res.status(201).json({
        id: user._id,
        firstname: user.first_name,
        lastname: user.last_name,
        username: user.username,
        password: user.password,
        role_id: user.role_id,
        token: token,
        status: true,
      });
    } catch (error) {
      res.status(402).json({
        error: true,
        message: error.message,
      });
    }
  },
  removeUser: async (req, res) => {
    try {
      const { id } = req.params;

      const deleteUser = await User.findByIdAndDelete(id);

      res.status(201).json({
        data: deleteUser,
      });
    } catch (error) {
      res.status(402).json({
        error: true,
        message: error.message,
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { first_name, last_name, username, password, role_id } = req.body;
      const user = await User.findById(id);

      var hashPassword = password;
      if (password != user.password) {
        const salt = await bcrypt.genSalt();
        hashPassword = await bcrypt.hash(password, salt);
      }

      const docUpdate = {
        $set: {
          first_name: first_name,
          last_name: last_name,
          username: username,
          password: hashPassword,
          role_id: role_id,
        },
      };

      await User.findByIdAndUpdate(id, docUpdate, {
        upsert: true,
      });

      res.status(201).json({
        message: "Update Successfully",
        status: true,
      });
    } catch (error) {
      res.status(401).json({
        error: true,
        message: error.message,
      });
    }
  },
};

module.exports = UserController;

function getToken(user) {
  return jwt.sign({ data: user }, process.env.JWT_KEY, { expiresIn: "5h" });
}
