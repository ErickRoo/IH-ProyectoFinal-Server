// 1 -- Importaciones

const mongoose = require("mongoose");

// 2 --  SCHEMA

const equipmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name equipment is required."]
  },
  model: {
    type: String,
    required: [true, "Model equipment is required."]
  },
  serialNum: {
    type: Number,
  },
  calibrated: {
    type: Boolean,
  },
  lastCalibrated: {
    type: Date,
  },
  description: {
    type: String
  },
  category: {
    type: String,
    enum: ["sale", "rent"],
    required: [true, "Category equipment is required."]
  },
  rentBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rent"
  },
  purchaseBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sale"
  }
},
  {
    timestamps: true
  }
);

// 3 -- Modelo
const Equipment = mongoose.model("Equipment", equipmentSchema);

// 4 -- Exportación
module.exports = Equipment;