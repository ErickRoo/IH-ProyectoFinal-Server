
const Equipment = require("../models/Equipment");

// Función para OBTENER todos los equipos (VENTA/RENTA)
exports.getAllEquipment = async (req, res) => {
  try {

    const equipment = await Equipment.find({});

    return res.status(200).json({
      data: equipment,
    })

  } catch (error) {
    console.log(`Hubo un error al traer todos los equipos:
    ${error}
    `);
    console.log(error);

    return res.status(500).json({
      data: null,
      errMsg: "Error interno. Estamos arreglándolo lo más pronto posible."
    })

  }
}

//Función para CREAR equipos (VENTA/RENTA)
exports.createEquipment = async (req, res) => {

  const {
    name,
    model,
    serialNum,
    calibrated,
    lastCalibrated,
    description,
    category,
    price,
  } = req.body;

  try {

    const newEquipment = await Equipment.create({
      name,
      model,
      serialNum,
      calibrated,
      lastCalibrated,
      description,
      category,
      price,
    });

    res.status(201).json({
      data: newEquipment,
      verifyMsg: "Equipo creado correctamente."
    })
  } catch (error) {
    console.log(`Hubo un error al crear un equipo: 
    ${error}`);
    console.log(error);

    return res.status(500).json({
      data: null,
      errMsg: "Error al crear equipo. Verificar SERVER."
    })

  }
}

//Función para EDITAR Equipos
exports.editEquipment = async (req, res) => {

  const {
    id,
    name,
    model,
    serialNum,
    calibrated,
    lastCalibrated,
    description,
    category,
    price
  } = req.body;

  try {

    const updatedEquipment = await Equipment.findByIdAndUpdate(id, {
      name,
      model,
      serialNum,
      calibrated,
      lastCalibrated,
      description,
      category,
      price,
    },
      { new: true });

    return res.json({
      data: updatedEquipment,
      verifyMsg: "Se ha EDITADO correctamente."
    })

  } catch (error) {
    console.log(`Hubo un error al EDITAR Equipo: ${error}`);
    console.log(error);

    res.status(500).json({
      data: null,
      errMsg: "Error al editar equipo. Verificar SERVER."
    })
  }
}

//Función DELETE para eliminar renta
exports.deleteEquipment = async (req, res) => {
  const { id } = req.body;

  try {
    const deleteEquipment = await Equipment.findByIdAndRemove(id);

    return res.status(200).json({
      data: deleteEquipment,
      verifyMsg: "Se ha ELIMINADO correctamente."
    })

  } catch (error) {
    console.log(`Hubo un error al ELIMINAR Equipo: ${error}`);
    console.log(error);

    res.status(500).json({
      data: null,
      errMsg: "Error al eliminar equipo. Verificar SERVER."
    })
  }
}