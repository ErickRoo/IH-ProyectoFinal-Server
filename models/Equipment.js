// 1 -- Importaciones

const mongoose = require("mongoose");

// 2 --  SCHEMA

const equipmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Equipment name is required."]
  },
  model: {
    type: String,
    required: [true, "Equipment model is required."]
  },
  serialNum: {
    type: String,
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
    required: [true, "Equipment category is required."]
  },
  price: {
    type: Number,
    required: [true, "Equipment price is required."]
  },
  imageUrl: {
    type: String,
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