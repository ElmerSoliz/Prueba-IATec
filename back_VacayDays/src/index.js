// Inportaciones
import express from "express";

import RouteAdmin from "./routes/admin.routes";
import RouteAuth from "./routes/auth.routes";

require('dotenv').config();

// Inicializando
const app = express();
const http = require("http").Server(app);

// Para habilitar la captura de datos
app.use(express.json());

// VVariables
const PORT = process.env.PORT || 4000;

// Rutas
app.use("/api/v1/admin", RouteAdmin);
app.use("/api/v1/auth", RouteAuth)

// Levantar Servidor
http.listen(PORT, () => {
    console.log(`Servidor iniciado en http://127.0.0.1:${PORT}`);
});
