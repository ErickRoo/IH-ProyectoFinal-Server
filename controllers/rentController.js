//Equipos en renta
const Rent = require("../models/Rent");

//Función para OBTENER los equipos en renta
exports.getAllEquipment = async (req, res) => {
  try {

    const equipRent = await Rent.find({});

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

//Función para CREAR renta de equipos disponibles
exports.createRentEquipment = async (req, res) => {

  const {
    name,
    surname,
    email,
    startDate,
    endDate,
    quantity,
    phone,
    company,
    state,
    city,
    zip,
    message
  } = req.body;

  try {

    const newRent = await Rent.create({
      name,
      surname,
      email,
      startDate,
      endDate,
      quantity,
      phone,
      company,
      state,
      city,
      zip,
      message
    });

    res.status(201).json({
      data: newRent,
      verifyMsg: "Renta creada correctamente."
    })
  } catch (error) {
    console.log(`Hubo un error al crear un equipo para renta: 
    ${error}`);

    return res.status(500).json({
      data: null,
      errMsg: "Error al crear equipo para renta. Verificar SERVER."
    })

  }
}

//Función para EDITAR renta
exports.editRent = async (req, res) => {

  const {
    id,
    name,
    surname,
    email,
    startDate,
    endDate,
    quantity,
    phone,
    company,
    state,
    city,
    zip,
    message
  } = req.body;

  try {

    const updatedRent = await Rent.findByIdAndUpdate(id, {
      name,
      surname,
      email,
      startDate,
      endDate,
      quantity,
      phone,
      company,
      state,
      city,
      zip,
      message
    },
      { new: true });

    return res.json({
      data: updatedRent,
      verifyMsg: "Se ha EDITADO correctamente."
    })

  } catch (error) {
    console.log(`Hubo un error al EDITAR renta: ${error}`);
    res.status(500).json({
      data: null,
      errMsg: "Error al editar renta. Verificar SERVER."
    })
  }
}

//Función DELETE para eliminar renta
exports.deleteRent = async (req, res) => {
  const { id } = req.body;

  try {
    const deleteRent = await Rent.findByIdAndRemove(id);

    return res.status(200).json({
      data: deleteRent,
      verifyMsg: "Se ha ELIMINADO correctamente."
    })

  } catch (error) {
    console.log(`Hubo un error al ELIMINAR renta: ${error}`);
    res.status(500).json({
      data: null,
      errMsg: "Error al eliminar renta. Verificar SERVER."
    })
  }
}