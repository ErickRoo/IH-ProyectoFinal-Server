const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

// CRUD

//GET
router.get("/get-all", orderController.getAllOrders);

//POST
router.post("/create-rent", orderController.createOrderEquipment);

//PUT
router.put("/edit-rent", orderController.editOrder);

//DELETE
router.delete("/delete-rent", orderController.deleteOrder);

module.exports = router;