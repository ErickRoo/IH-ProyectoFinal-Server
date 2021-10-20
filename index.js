// ./index.js

// 1 -- IMPORTACIONES

const express = require("express");
const app = express();
const cors = require("cors");

const connectDB = require("./config/db") //Llamando a la DB

// 2 -- MIDDLEWARES

require("dotenv").config(); //Activando las variables de entorno

connectDB(); //Iniciando la DB

app.use(cors()); // Relación de multiples servidores y REACT

app.use(express.json({ extended: true })); //Peticiones y retornos de información en formato JSON

// 3 -- RUTAS

app.use("/api/purchase-rent-order", require("./routes/order"));
app.use("/api/equipment", require("./routes/equipments"));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

// 4 -- SERVIDOR

app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT: ${process.env.PORT} 🦻⚙✅`)
})