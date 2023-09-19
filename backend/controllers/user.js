
const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET; // Get the JWT secret from the environment variables

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    token: { type: String }
})

const User = mongoose.model("User", userSchema)

//routes routes
exports.loginFunc = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
        user.token = token;
        await user.save();
        res.json({
          status: 'ok',
          username: user.name, email: user.email, token, user:true
        });
      } else {
        res.json({ status: 'unauthorized', user: false, message: 'Incorrect password' });
      }
    } else {
      res.json({ status: 'error', user: false });
    }
  };

  exports.registerFunc = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword });
      res.json({
        status: 'ok',
        user: { username: user.name, email: user.email},
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  