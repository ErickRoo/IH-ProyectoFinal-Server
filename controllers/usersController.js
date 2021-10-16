
// Importaciones
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const User = require("../models/User");

// Función para OBTENER todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({})
    return res.status(200).json({
      data: allUsers
    })

  } catch (error) {
    console.log(`Hubo un error al traer todos los usuarios:
    ${error}
    `);
    console.log(error);
    return res.status(500).json({
      data: null,
      errMsg: "Error interno. Estamos arreglándolo lo más pronto posible."
    })
  }
}

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
            errMsg: "Hubo un problema en la creación del token"
          })
        }
        return res.status(201).json({
          data: {
            token,
          }
        })
      }
    );

    // return res.status(201).json({
    //   data: newUser,
    //   verifyMsg: "Usuario creado correctamente."
    // })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      errMsg: "Hubo un problema creando al usuario. Verificar SERVER."
    })
  }
}

// Función EDITAR usuario
exports.updateUser = async (req, res) => {

  const {
    id,
    username,
    email,
    password
  } = req.body;

  try {
    // Encriptación
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        username,
        email,
        hashedPassword
      },
      {
        new: true
      }
    );

    return res.json({
      data: updateUser,
      verifyMsg: "Se ha ACTUALIZADO correctamente."
    })

  } catch (error) {
    console.log(`Hubo un error al actualizar usuario: ${error}`);
    console.log(error);
    return res.status(500).json({
      data: null,
      errMsg: "Error al actualizar usuario. Verificar SERVER."
    })
  }
}

// Función DELETE usuario
exports.deleteUser = async (req, res) => {
  const { id } = req.body;

  try {
    const deleteUser = await User.findByIdAndRemove(id);

    return res.status(200).json({
      data: deleteUser,
      verifyMsg: "Se ha ELIMINADO usuario correctamente."
    })
  } catch (error) {
    console.log(`Hubo un error al ELIMINAR usuario: ${error}`);
    console.log(error);
    return res.status(500).json({
      data: null,
      errMsg: "Error al eliminar usuario. Verificar SERVER."
    })
  }
}