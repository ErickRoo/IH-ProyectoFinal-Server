// ./index.js

// 1 -- IMPORTACIONES

const express = require("express");
const app = express();

const cors = require("cors");

// 2 -- MIDDLEWARES

require("dotenv").config(); //Activando las variables de entorno

app.use(cors()); // Relación de multiples servidores y REACT

app.use(express.json({ extended: true })); //Peticiones y retornos de información en formato JSON

// 3 -- RUTAS

// app.use("/api", require("EL HOME"));
app.use("/api/equip-sale", require("./routes/equip-sale"));
app.use("/api/equip-rent", require("./routes/equip-rent"));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"))

// 4 -- SERVIDOR

app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT: ${PORT} ⚙⚙✅`)
})