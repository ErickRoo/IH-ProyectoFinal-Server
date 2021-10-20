//Equipos en renta
const Order = require("../models/Order");
const { validationResult } = require("express-validator");

//Función para OBTENER los equipos en renta
exports.getAllOrders = async (req, res) => {
  try {

    const equipOrder = await Order.find({});

    return res.status(200).json({
      data: equipOrder,
    })

  } catch (error) {
    console.log(`Hubo un error al traer las ordenes de COMPRA/RENTA:
    ${error}
    `);
    return res.status(500).json({
      data: null,
      erroMsg: "Error interno. Estamos arreglándolo lo más pronto posible."
    })

  }
}

//Función para CREAR renta de equipos disponibles
exports.createPurchaseEquipment = async (req, res) => {

  //Validaciones en routes
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errMsg: errors.array()
    })
  }

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

    const newOrder = await Order.create({
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
      data: newOrder,
      verifyMsg: "Orden creada correctamente."
    })
  } catch (error) {
    console.log(`Hubo un error al crear la orden de COMPRA/RENTA: 
    ${error}`);

    return res.status(500).json({
      data: null,
      errMsg: "Error al crear orden de COMPRA/RENTA. Verificar SERVER."
    })

  }
}

//Función para EDITAR renta
exports.editOrder = async (req, res) => {

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

    const updatedOrder = await Order.findByIdAndUpdate(id, {
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
      data: updatedOrder,
      verifyMsg: "Se ha EDITADO correctamente."
    })

  } catch (error) {
    console.log(`Hubo un error al EDITAR la orden de COMPRA/RENTA: ${error}`);
    res.status(500).json({
      data: null,
      errMsg: "Error al la orden de COMPRA/RENTA. Verificar SERVER."
    })
  }
}

//Función DELETE para eliminar renta
exports.deleteOrder = async (req, res) => {
  const { id } = req.body;

  try {
    const deleteOrder = await Order.findByIdAndRemove(id);

    return res.status(200).json({
      data: deleteOrder,
      verifyMsg: "Se ha ELIMINADO la orden de COMPRA/RENTA correctamente."
    })

  } catch (error) {
    console.log(`Hubo un error al ELIMINAR la orden de COMPRA/RENTA: ${error}`);
    res.status(500).json({
      data: null,
      errMsg: "Error al eliminar la orden de COMPRA/RENTA. Verificar SERVER."
    })
  }
}