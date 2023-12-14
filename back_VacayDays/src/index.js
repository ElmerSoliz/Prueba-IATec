import express from "express";
import cors from "cors";
import RouteAdmin from "./routes/admin.routes";
import RouteAuth from "./routes/auth.routes";

require('dotenv').config();

const app = express();
const http = require("http").Server(app);

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200'
  }));

const PORT = process.env.PORT || 4000;

app.use("/api/v1/admin", RouteAdmin);
app.use("/api/v1/auth", RouteAuth)

http.listen(PORT, () => {
    console.log(`Servidor iniciado en http://127.0.0.1:${PORT}`);
});
