//Equipos en renta
const Rent = require("../models/Rent");

//Función para traer los equipos en renta
exports.getAllEquipment = async (req, res) => {
  try {

    const equipRent = await Rent.find({});

    console.log();

    return res.status(200).json({
      data: equipRent,
    })

  } catch (error) {
    console.log(`Hubo un error al traer los equipos en renta:
    ${error}
    `);
    return res.status(500).json({
      data: null,
      erroMsg: "Error interno. Estamos arreglándolo lo más pronto posible."
    })

  }
}

//Función para rentar equipos disponibles
exports.createRentEquipment = async (req, res) => {
  try {

  } catch (error) {
    console.log(`Hubo un error al crear un equipo para renta: 
    ${error}`);

    return res.status(500).json({
      data: null,
      errMsg: "Error al crear equipo para renta. Verificar SERVER."
    })

  }
}