import express from "express";
import cors from "cors";

import usuarioRoutes from "./api/routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/usuarios", usuarioRoutes);

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});