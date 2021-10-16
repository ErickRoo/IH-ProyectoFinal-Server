const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const usersController = require("../controllers/usersController");

//CRUD

//GET - solo los ADMINS pueden ver esto
router.get("/get-all", usersController.getAllUsers);

//POST - Crear usuario.
router.post("/create-user", [
  check("username", "EL nombre es obligatorio.").not().isEmpty(),
  check("email", "Agrega un email válido.").isEmail(),
  check("password", "El password debe ser mínimo de 7 caracteres.").isLength({ min: 7 })
],
  usersController.createUser
);

// PUT - Editar usuario.
router.put("/update-user", usersController.updateUser);

// DELETE - Borrar usuario.
router.delete("/delete-user", usersController.deleteUser);

module.exports = router;

