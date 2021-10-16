
// Importaciones
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const User = require("../models/User");

// Función para inicio de sesión
exports.loginUser = async (req, res) => {

  //Validaciones en routes
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errMsg: errors.array()
    })
  }

  const { email, password } = req.body;

  try {

    // Vetificar usuario en DB.
    let foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({
        errMsg: "Usuario no registrado."
      })
    }

    // Verificar password.
    const verifiedPassword = await bcryptjs.compare(password, foundUser.hashedPassword);
    if (!verifiedPassword) {
      return res.status(400).json({
        errMsg: "Contraseña incorrecta."
      })
    }

    // Si TRUE las dos anteriores. Entregar ID con TOKEN.
    // 1/2 JWT - Credencial
    const payload = {
      user: {
        id: foundUser._id,
      }
    }

    // 2/2 Firmar por el servidor.
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 360000,
      },
      (error, token) => {
        if (error) {
          return res.status(401).json({
            errMsg: "Inicio de sesión: hubo un problema en la creación del token."
          })
        }

        return res.status(200).json({
          data: {
            token
          }
        })
      }
    )

  } catch (error) {
    console.log(`Hubo un error al iniciar sesión: ${error}`);
    console.log(error);

    return res.status(500).json({
      data: null,
      errMsg: "Error al iniciar sesión. Verificar SERVER."
    })
  }
}

// Verificación del TOKEN
exports.verifyingToken = async (req, res) => {

  try {
    const userData = await User.findById(req.user.id).select("-hashedPassword"); //Se excluye la contraseña

    return res.status(200).json({
      data: {
        user: userData
      }
    })

  } catch (error) {
    console.log(`Hubo un error en la verificación del TOKEN: ${error}`);
    console.log(error);

    return res.status(500).json({
      errMsg: "Error en la busqueda del usuario. Verificar SERVER.",
    })
  }
}