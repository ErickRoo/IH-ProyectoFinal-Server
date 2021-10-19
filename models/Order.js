// 1 -- Importaciones
const mongoose = require("mongoose");

// 2 -- SCHEMA
const rentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "User NAME for the rent is required."]
    },
    surname: {
      type: String,
      require: [true, "User SURNAME for the rent is required."]
    },
    email: {
      type: String,
      require: [true, "User EMAIL for the rent is required."],
      trim: true,
      lowercase: true,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    // quantity: {
    //   type: Number,
    //   require: [true, "User items QUANTITY for the rent is required."],
    //   default: 1
    // },
    phone: {
      type: Number,
      require: [true, "User PHONE for the rent is required."]
    },
    company: {
      type: String
    },
    state: {
      type: String,
      require: [true, "STATE of the user for the rent is required."]
    },
    city: {
      type: String,
      require: [true, "CITY of the user for the rent is required."]
    },
    zip: {
      type: Number,
      require: [true, "ZIP CODE of the user for the rent is required."]
    },
    message: {
      type: String
    },
  },
  {
    timestamps: true
  }
);

// 3 -- Modelo
const Order = mongoose.model("Order", rentSchema);

// 4 -- Exportación
module.exports = Order;