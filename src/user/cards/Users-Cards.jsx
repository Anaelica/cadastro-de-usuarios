import { Pencil, Trash2, User } from "lucide-react";

export default function CardUsuarios({ usuarios, search }) {
  const usuariosFiltrados = usuarios.filter((usuarios) =>
    usuarios.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className=" 
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-4 w-full"
        >

      {usuariosFiltrados.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full col-span-full gap-4 mt-16 transition-all">
          <User className="h-20 w-20 text-gray-400"/>
          <p className="text-gray-400">Nenhum Usuario encontrado</p>
        </div>
      ) : (
        usuariosFiltrados.map((usuario, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 bg-black/80 h-48 w-full max-w-80 rounded-3xl"
          >
            <div className="h-1/2">
              <div className="flex justify-center mb-2">
                <img
                  src={usuario.avatar}
                  alt={usuario.name}
                  className="h-10 w-10 rounded-full"
                />
              </div>

              <div className="flex flex-col items-center w-full px-4">
                <h2 className="text-white font-semibold text-sm truncate w-full text-center">
                  {usuario.name}
                </h2>

                <p className="text-gray-400 text-xs break-all text-center w-full">
                  {usuario.email}
                </p>
              </div>
            </div>

            <div className="flex gap-5 w-full px-5">
              <div className="w-1/2 bg-neutral-800 rounded-lg h-8">
                <button className="flex items-center justify-center gap-2 w-full h-full text-gray-300 font-medium text-sm">
                  <Pencil className="h-4 w-4" />
                  Editar
                </button>
              </div>

              <div className="w-1/2 bg-neutral-800 rounded-lg h-8">
                <button className="flex items-center justify-center gap-2 w-full h-full text-gray-300 font-medium text-sm">
                  <Trash2 className="h-4 w-4" />
                  Excluir
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
