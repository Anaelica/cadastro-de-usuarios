import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function listarUsuarios(request, response) {
  try {
    const usuarios = await prisma.usuario.findMany();

    return response.status(200).json(usuarios);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      erro: "Erro ao buscar usuário",
    });
  }
}

export async function criarUsuario(request, response) {
  try {
    const { name, email } = request.body;

    const avatar = request.file
      ? `http://localhost:3001/uploads/${request.file.filename}`
      : null;

    const usuario = await prisma.usuario.create({
      data: {
        name,
        email,
        avatar,
      },
    });

    return response.status(201).json(usuario);

  } catch (error) {
    console.error(error);

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return response.status(409).json({
        message: "Já existe um usuário com esse e-mail",
      });
    }

    return response.status(500).json({
      message: "Erro ao criar usuário.",
    });
  }
}