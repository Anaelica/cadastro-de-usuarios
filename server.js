import express from "express"
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json())

app.get("/usuarios", (request, response) => {
  return response.json({
    mensagem: "Lista de usuarios"
  })
})

app.listen(3001, () => {
  console.log("O Servidor está na porta 3001")
})