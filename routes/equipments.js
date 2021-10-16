const express = require("express");
const router = express.Router();

const equipmentController = require("../controllers/equipmentController");

//CRUD
//GET
router.get("/get-all", equipmentController.getAllEquipment);

//POST
router.post("/create-equipment", equipmentController.createEquipment);

//PUT
router.put("/edit-equipment", equipmentController.editEquipment);

//DELETE
router.delete("/delete-equipment", equipmentController.deleteEquipment);

module.exports = router;