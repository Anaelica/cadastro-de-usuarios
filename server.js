import { PrismaClient } from "@prisma/client";
import express from "express"
import cors from "cors"


const app = express();

//Conectando o Prisma ao Express
const prisma = new PrismaClient() 

app.use(cors())
app.use(express.json())

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

  return response.json({
    mensage: "Listagem de usuarios"
  })
})

app.listen(3001, () => {
  console.log("O Servidor está na porta 3001")
})