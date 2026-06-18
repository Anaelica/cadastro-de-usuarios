import { PrismaClient, Prisma } from "@prisma/client";
import express from "express"
import cors from "cors"
import multer from "multer"


const app = express();

//Conectando o Prisma ao Express
const prisma = new PrismaClient() 
const upload = multer({ dest: "uploads/" })



app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"));

    //Criação da rota get e tratamento de excessões
app.get("/usuarios", async (request, response) => {
  try {
    const usuarios = await prisma.usuario.findMany();

    response.status(200).json(usuarios)
  } catch (error) {
    console.error(error)


    response.status(500).json({
      erro: "Erro ao buscar usuario"
    })
  } 
})
    //Criação da rota post pra criar um novo usuario 
app.post("/usuarios", upload.single("avatar"), async (request, response) => {
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

    return response.status(200).json(usuario);
  } catch (error) {
    console.error(error);

    if(
      error instanceof Prisma.PrismaClientKnownRequestError && 
      error.code === "P2002"
    ){
      return response.status(409).json({
        message: "Já existe um usuario com esse e-mail"
      })
    }
    

    return response.status(500).json({
      message: "Erro ao criar um novo usuario.",
    });
  }
});

app.listen(3001, () => {
  console.log("O Servidor está na porta 3001")
})