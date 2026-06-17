import { useState } from "react";
import CardUsuarios from "./cards/Users-Cards.jsx";
import Search from "./search/search.jsx"; 
import CriarUsuario from "./criar-usuario/CriarUsuario.jsx";

export default function UserPage() {
  const [search, setSearch] = useState("");
  
  const usuarios = [
      { 
        avatar: "https://i.pinimg.com/1200x/c3/b6/27/c3b62766f107dd52da4de3ed53976cbe.jpg",
        name: "anaelica barbosa", 
        email: "anaanaelica@gmail"
      },
      { 
        avatar: "https://i.pinimg.com/736x/66/86/ae/6686ae04340f0125502a1fc08bf482da.jpg",
        name: "Eduardo", 
        email: "eduaaaaaaa@gmail"
      }
    ]
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center mt-4">
        <Search search={search} setSearch={setSearch}/>
        <CriarUsuario />
      </div>
      <CardUsuarios usuarios={usuarios} search={search}/>
    </div>
  );
}