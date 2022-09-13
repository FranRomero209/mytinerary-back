const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
  email: { type: String, required: true },
  password: [{ type: String, required: true }],
  code: { type: String, required: true },
  country: { type: String, required: true },
  from: [{ type: String, required: true }],
  verification: { type: Boolean, required: true },
  logged: { type: Boolean, required: true },
  role: { type: String, required: true },
});

const Users = mongoose.model("users", usersSchema);
module.exports = Users;
