import { useState } from "react";

export default function AtualizarUsuario({ usuario, onClose }) {
  const [nome, setNome] = useState(usuario.name);
  const [email, setEmail] = useState(usuario.email);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="flex flex-col gap-3 bg-zinc-900 rounded-2xl p-6 w-96">
        <div className="flex items-center justify-center">
          <img
          src={usuario.avatar}
          alt={usuario.name}
          className="w-16 h-16 rounded-full"
        />

        </div>

        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="bg-zinc-800 text-white rounded-lg p-2"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-zinc-800 text-white rounded-lg p-2"
        />
        <div className="flex gap-8">
          <button
            onClick={() => {
              console.log(usuario.id); 
              onClose();
            }}
            className="mt-4 bg-red-700 px-4 py-2 rounded-lg text-white"
          >
            Descartar
          </button>

          <button
            onClick={onClose}
            className="mt-4 bg-neutral-800 px-8 py-2 rounded-lg text-white"
          >
            Salvar 
          </button>
        </div>
      </div>
    </div>
  );
} 