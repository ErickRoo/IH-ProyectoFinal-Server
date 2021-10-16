
// Importaciones
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const User = require("../models/User");

// Función para OBTENER todos los usuarios

// Función para CREAR un usuario
exports.createUser = async (req, res) => {

  //Validaciones en routes
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errMsg: errors.array()
    })
  }

  const { username, email, password } = req.body;

  try {
    // Encriptación
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      hashedPassword
    });

    // 1/2 JWT - Credencial
    const payload = {
      user: {
        id: newUser._id,
      }
    }
    // 2/2 Firma por el servidor
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 360000,
      },
      (error, token) => {
        if (error) {
          return res.status(401).json({
            errMsg: "Hubo un problema en la creación del tokel"
          })
        }
        return res.json({
          data: {
            token,
          }
        })
      }
    );

  } catch (error) {
    console.log(error);
    res.status(500).json({
      errMsg: "Hubo un problema creando al usuario. Verificar SERVER."
    })
  }
}