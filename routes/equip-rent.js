const express = require("express");
const router = express.Router();

const rentController = require("../controllers/rentController");

// CRUD

//GET
router.get("/get-all", rentController.getAllEquipment);

//POST
router.post("/create-rent", rentController.createRentEquipment);

//PUT
router.put("/edit-rent", rentController.editRent);

//DELETE
router.delete("/delete-rent", rentController.deleteRent);

module.exports = router;