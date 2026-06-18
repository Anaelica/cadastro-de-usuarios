import { useState } from "react";

export default function Modal({ onClose, onCreate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setAvatar(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("avatar", avatar);

   const response = await fetch("http://localhost:3001/usuarios", {
  method: "POST",
  body: formData,
});

const data = await response.json();

if (!response.ok) {
  alert(data.message);
  return;
}

onCreate();
onClose();

setName("");
setEmail("");
setAvatar(null);
setPreview(null);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="flex flex-col gap-6 bg-zinc-900 rounded-2xl p-6 w-96">

        <h2 className="text-white text-xl font-semibold">
          Registre um novo usuario
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">

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

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            className="w-full h-12 border-2 p-2 text-gray-200 rounded-md"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full h-12 border-2 p-2 text-gray-200 rounded-md"
          />

          <div className="flex gap-8">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-700 px-4 py-2 rounded-lg text-white"
            >
              Fechar
            </button>

            <button
              type="submit"
              className="bg-neutral-800 px-8 py-2 rounded-lg text-white"
            >
              Criar
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}