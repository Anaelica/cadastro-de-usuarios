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
})
    //Criação da rota post pra criar um novo usuario 
app.post("/usuarios", async (request, response) => {
  //tratamento de excessão caso a requisição dê erro
  try {
    const { name, email, avatar } =  request.body

      //o Prisma executa e salva no postgres
    const usuario = await prisma.usuario.create({
      //Depois devolve um usuario criado
      data: {
        name,
        email,
        avatar
      },
    })

    response.status(200).json(usuario)
  } catch (error) {
    console.error(error)

    response.status(500).json({
      mensage: "Erro ao criar um novo usuario."
    })
  }
})

app.listen(3001, () => {
  console.log("O Servidor está na porta 3001")
})