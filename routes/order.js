const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

// CRUD

//GET
router.get("/get-all", orderController.getAllOrders);

//POST
<<<<<<< HEAD
router.post("/create-rent", orderController.createOrderEquipment);

//PUT
router.put("/edit-rent", orderController.editOrder);

//DELETE
router.delete("/delete-rent", orderController.deleteOrder);
=======
router.post("/create-order", orderController.createOrderEquipment);

//PUT
router.put("/edit-order", orderController.editOrder);

//DELETE
router.delete("/delete-order", orderController.deleteOrder);
>>>>>>> 5e165f7 (add model for rents and sales (together), change the name of the routes)

module.exports = router;