const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

// CRUD

//GET
router.get("/get-all", orderController.getAllOrders);

//POST
router.post("/create-order", orderController.createOrderEquipment);

//PUT
router.put("/edit-order", orderController.editOrder);

//DELETE
router.delete("/delete-order", orderController.deleteOrder);

module.exports = router;