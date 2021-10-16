// MIDDLEWARE para desencriptar el TOKEN y hacer match con la palabra SECRET

// 1 -- Importaciones
const jwt = require("jsonwebtoken");
const { verifyingToken } = require("../controllers/authController");

// 2 -- Función
const unlockingToken = (req, res, next) => {

  const token = req.header("x-auth-token");//TEST: PONER EN POSTMAN "x-auth-token -> 'stringDelToken' "
  if (!token) {
    return res.status(401).json({
      errMsg: "No hay token o es erróneo. Permiso no válido."
    })
  }

  try {
    const openToken = jwt.verify(token, process.env.SECRET);

    // Creando una propiedad en el req y se le asigna un valor. Este valor permanecerá en todas las rutas.
    req.user = openToken.user;

    next();
  } catch (error) {
    console.log(`Hubo un error en el proceso de desencriptación: ${error}`);
    console.log(error);

    return res.status(500).json({
      errMsg: "TOKEN: Error en el proceso. Verificar SERVER."
    })
  }
}

// 3-- Exportación
module.exports = unlockingToken;