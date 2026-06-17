import express from "express"

const app = express();

app.get("/usuarios", (request, response) => {
  return response.json({
    mensagem: "Lista de usuarios"
  })
})

app.listen(3000, () => {
  console.log("O Servidor está na porta 3000")
})