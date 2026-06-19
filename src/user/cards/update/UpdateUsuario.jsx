import { useState } from "react";

export default function AtualizarUsuario({ usuario, onClose }) {
  const [nome, setNome] = useState(usuario.name);
  const [email, setEmail] = useState(usuario.email);
  const [avatar, setAvatar] = useState(null)
  const [preview, setPreview] = useState(usuario.avatar)

  //o processo de atualização ficará aqui
  async function handleUpdate(){
    const formData = new FormData()

    formData.append("name", nome)
    formData.append("email", email)

    //a foto é opcional 
    if(avatar){
      formData.append("avatar", avatar)
    }

    const response = await fetch(
       `http://localhost:3001/usuarios/${usuario.id}`,
      {
        method: "PUT",
        body: formData,
      })

      if(response.ok){
        console.log("Usuario atualizado")
      }
  }

  function handleAvatarChange(e) {
    const file = e.target.files[0]

    if(!file) return

    setAvatar(file)

    const imagePreviewUrl = URL.createObjectURL(file)
    setPreview(imagePreviewUrl)
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="flex flex-col gap-3 bg-zinc-900 rounded-2xl p-4 max-w-96">
        <div className="flex items-center justify-center">
          <label htmlFor="avatar" className="cursor-pointer">
            <img
            src={preview}
            alt={usuario.name}
            className="w-13 h-13 rounded-full object-cover"
          />
          </label>

        <input 
        id="avatar"
        type="file" 
        accept="image/*"
        className="hidden"
        onChange={handleAvatarChange}
        />

        </div>

        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="bg-zinc-800 text-white rounded-lg p-2 outline-none border-2 border-transparent focus:border-gray-500"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-zinc-800 text-white rounded-lg p-2 outline-none border-2 border-transparent focus:border-gray-500"
        />
        <div className="flex gap-8">
          <button
            onClick={() => {
              console.log(usuario.id); 
              onClose();
            }}
            className="mt-4 bg-red-700 px-6 py-2 rounded-lg text-white"
          >
            Descartar
          </button>

          <button
            onClick={handleUpdate}
            className="mt-4 bg-neutral-800 px-10 py-2 rounded-lg text-white"
          >
            Salvar 
          </button>
        </div>
      </div>
    </div>
  );
} 