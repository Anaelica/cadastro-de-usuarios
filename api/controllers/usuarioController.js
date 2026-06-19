import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function listarUsuarios(request, response) {
  try {
    const usuarios = await prisma.usuario.findMany();

    const usuariosFormatados = usuarios.map((usuario) => ({
      ...usuario,
      avatar: usuario.avatar
        ? `${process.env.API_URL}/uploads/${usuario.avatar}`
        : null,
    }));

    return response.status(200).json(usuariosFormatados);

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
      ? request.file.filename
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

export async function atualizarUsuario(request, response) {
  try {
    const { id } = request.params
    const { name, email } = request.body
    
    //Montando os dados que serão atualizados
    const data = {
      name, 
      email,
    }

    //Caso mandem uma nova foto ela substitui a antiga
    if(request.file) {
      data.avatar = request.file.filename;
    }

      const usuarioAtualizado = await prisma.usuario.update({
        where: {
          id: Number(id),
        },
        data,
      });

return response.status(200).json(usuarioAtualizado);
      
      return response.status(200).json(usuarioAtualizado)
  } catch (error) {
    console.error(error)
    console.log(Prisma);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025"
    ) {
      return response.status(404).json({
        message: "Usuario não encontrado.",
      })
    }

    if(
      error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002"
    ){
      return response.status(409).json({
        message: "Já existe um usuario com esse e-mail."
      })
    }

    return response.status(500).json({
      message: "Erro ao atualizar usuario."
    })
  }
}

export async function deletarUsuario(request, response) {
   try {
    const { id } = request.params
    
    await prisma.usuario.delete({
      where: {
        id: Number(id),
      },
    }) 

    return response.status(200).json({
      message: "Usuario deletado com sucesso."
    })
    } catch (error) {
    console.error(error);

    return response.status(500).json({
      error: error.message,
    });
  }
}