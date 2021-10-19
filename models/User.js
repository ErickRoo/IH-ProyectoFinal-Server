
// 1 -- Importaciones
const mongoose = require("mongoose");

// 2 -- Schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "The USERNAME is required to signup."]
  },
  email: {
    type: String,
    required: [true, "The EMAIL is required to signup."],
    unique: true,
    lowercase: true,
    trim: true,
  },
  hashedPassword: {
    type: String,
    required: [true, "The PASSWORD is required to signup."]
  },
  rol: {
    type: Number,
    enum: [0, 1],
    default: 1,
  },
  listOrders: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order"
  }
},
  {
    timestamps: true
  }
);

// 3 -- Model
const User = mongoose.model("User", userSchema);

// 4 -- Exportación
module.exports = User;