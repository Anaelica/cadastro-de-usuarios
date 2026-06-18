export default function DeletarUsuario({ usuario, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="flex flex-col gap-3 bg-zinc-900 rounded-2xl p-6 w-96">
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-xl font-semibold">
            Quer mesmo deletar {usuario?.nome}?
          </h2>

          <p className="text-sm text-gray-500">
            Esta ação é permanente e não poderá ser desfeita.
          </p>
        </div>

        <div className="flex gap-8">
          <button
            onClick={() => {
              console.log(usuario.id); 
              onClose();
            }}
            className="mt-4 bg-red-700 px-4 py-2 rounded-lg text-white"
          >
            Deletar
          </button>

          <button
            onClick={onClose}
            className="mt-4 bg-neutral-800 px-8 py-2 rounded-lg text-white"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}