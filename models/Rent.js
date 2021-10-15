// 1 -- Importaciones
const mongoose = require("mongoose");

// 2 -- SCHEMA
const rentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    surname: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: [true, "email is required"],
      trim: true,
      lowercase: true,
    },
    startDate: {
      type: Date,
      require: true
    },
    endDate: {
      type: Date,
      require: true
    },
    quantity: {
      type: Number,
      require: true,
      default: 1
    },
    phone: {
      type: Number,
      require: true
    },
    company: {
      type: String
    },
    state: {
      type: String,
      require: true
    },
    city: {
      type: String,
      require: true
    },
    zip: {
      type: Number,
      require: true
    },
    message: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

// 3 -- Modelo
const Rent = mongoose.model("Rent", rentSchema);

// 4 -- Exportación
module.exports = Rent;