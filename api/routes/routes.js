import { Router } from "express";

import upload from "../middleware/upload.js";

import {
  listarUsuarios,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
} from "../controllers/usuarioController.js";

const router = Router();

router.get(
  "/", 
  listarUsuarios
);

router.put(
  "/:id",
  upload.single("avatar"),
  atualizarUsuario
);

router.delete(
  "/:id",
  deletarUsuario
);

router.post(
  "/",
  upload.single("avatar"),
  criarUsuario
);

export default router;