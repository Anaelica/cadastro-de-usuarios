import { useState } from "react";

export default function Modal({ onClose }) {
  // Estados do formulário (controlam inputs)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(null);

  // Função para tratar upload da imagem
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    // evita erro se não selecionar arquivo
    if (!file) return; 

    setAvatar(file);
    setPreview(URL.createObjectURL(file)); 
  };

  // Função de envio do formulário (mock por enquanto)
  const handleSubmit = (e) => {
    e.preventDefault(); // evita reload da página

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("avatar", avatar);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      {/* container principal do modal */}
      <div className="flex flex-col gap-6 bg-zinc-900 rounded-2xl p-6 w-96">
        <h2 className="text-white text-xl font-semibold">
          Registre um novo usuario
        </h2>

        {/* FORMULÁRIO */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Upload de imagem + preview */}
          <div className="flex items-center gap-3 justify-center">
            <input type="file" accept="image/*" onChange={handleAvatarChange} />

            {preview && (
              <img
                src={preview}
                alt="preview"
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
          </div>

          {/* Input nome */}
          <div className="relative">
            <label className="text-white absolute bg-zinc-900 left-3 px-2 -top-3">
              Nome
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Maria dos Santos"
              className="
                w-full 
                h-12 
                border-2 
                p-2 
                border-gray-400/40 
                text-gray-200 
                rounded-md 
                focus:outline-none 
                focus:border-gray-300 
                focus:ring-1 
                focus:ring-gray-400/20
              "/>
          </div>

          {/* Input email */}
          <div className="relative">
            <label className="text-white absolute bg-zinc-900 left-3 px-2 -top-3">
              Email
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="mariaexample@gmail.com"
              className="
                w-full 
                h-12 
                border-2 
                p-2 
                border-gray-400/40 
                text-gray-200 
                rounded-md 
                focus:outline-none 
                focus:border-gray-300 
                focus:ring-1 
                focus:ring-gray-400/20
              "/>
          </div>
        </form>

        {/* BOTÕES DO MODAL */}
        <div className="flex gap-8">
          <button
            onClick={onClose}
            className="mt-4 bg-red-700 px-4 py-2 rounded-lg text-white w-fit"
          >
            Fechar
          </button>

          {/* submit do formulário */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-4 bg-neutral-800 px-8 py-2 rounded-lg text-white w-fit"
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
}
