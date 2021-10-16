const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const authorization = require("../middlewares/authorization");
const authController = require("../controllers/authController");

// RUTAS DE AUTENTICACIÓN
// Verificar inicio de sesión
router.post("/login", [
  check("email", "Ingresa un email válido.").isEmail(),
  check("password", "Verificar password.").not().isEmpty()
],
  authController.loginUser
);

// Proceso de verificación del TOKEN generado en la ruta anterior
router.get("/verifying-token", authorization, authController.verifyingToken);

module.exports = router;