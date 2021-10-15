const express = require("express");
const router = express.Router();

const rentController = require("../controllers/rentController");

router.get("/get-all", rentController.getAllEquipment);

module.exports = router;