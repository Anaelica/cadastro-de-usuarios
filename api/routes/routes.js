import { Router } from "express";

import upload from "../middleware/upload.js";

import {
  listarUsuarios,
  criarUsuario,
} from "../controllers/usuarioController.js";

const router = Router();

router.get("/", listarUsuarios);

router.post(
  "/",
  upload.single("avatar"),
  criarUsuario
);

export default router;