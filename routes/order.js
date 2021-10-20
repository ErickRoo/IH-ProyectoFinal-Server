const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const orderController = require("../controllers/orderController");

// CRUD

//GET
router.get("/get-all", orderController.getAllOrders);

//POST
router.post("/create-purchase", [
  check("name", "El nombre es obligatorio.").not().isEmpty(),
  check("surname", "Los apellidos son obligatorios.").not().isEmpty(),
  check("email", "El email es obligatorio.").isEmail(),
  check("phone", "El número telefónico es obligatorio.").not().isEmpty(),
  check("state", "El estado es obligatorio.").not().isEmpty(),
  check("city", "La ciudad es obligatorio.").not().isEmpty(),
  check("zip", "El código postal es obligatorio.").not().isEmpty(),

]
  , orderController.createPurchaseEquipment);

// router.post("/create-rent", [
//   check("name", "El nombre es obligatorio.").not().isEmpty(),
//   check("surname", "Los apellidos son obligatorios.").not().isEmpty(),
//   check("email", "El email es obligatorio.").isEmail(),
//   check("phone", "El número telefónico es obligatorio.").not().isEmpty(),
//   check("state", "El estado es obligatorio.").not().isEmpty(),
//   check("city", "La ciudad es obligatorio.").not().isEmpty(),
//   check("zip", "El código postal es obligatorio.").not().isEmpty(),

// ]
//   , orderController.createRentEquipment);

//PUT
router.put("/edit-order", orderController.editOrder);

//DELETE
router.delete("/delete-order", orderController.deleteOrder);

module.exports = router;