import { useState, useEffect } from "react";
import CardUsuarios from "./cards/Users-Cards.jsx";
import Search from "./search/search.jsx"; 
import CriarUsuario from "./criar-usuario/CriarUsuario.jsx";

export default function UserPage() {
  const [search, setSearch] = useState("");
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    buscarUsuarios();
  }, [])

  async function buscarUsuarios(){
    try {
      const response = await fetch("http://localhost:3001/usuarios")

      const data = await response.json()
      setUsuarios(data)
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <Search search={search} setSearch={setSearch}/>
        <CriarUsuario onCreate={buscarUsuarios} />
      </div>
      <CardUsuarios 
      usuarios={usuarios} 
      search={search}/>
    </div>
  );
}