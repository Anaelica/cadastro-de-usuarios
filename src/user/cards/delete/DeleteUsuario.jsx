import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function DeletarUsuario({ usuario, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    try {
      setLoading(true)

       const response = await fetch(
         `http://localhost:3001/usuarios/${usuario.id}`,
        {
          method: "DELETE",
        })

        if(!response.ok){
          throw new Error("Erro ao deletar usuario");
        }

        onSuccess()
        onClose()

    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="flex flex-col gap-3 bg-zinc-900 rounded-2xl p-6 m-6 md:p-6 w-96">
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-xl font-semibold">
            Quer mesmo deletar {usuario?.nome}?
          </h2>

          <p className="text-sm text-gray-500">
            Esta ação é permanente e não poderá ser desfeita.
          </p>
        </div>

        <div className="flex flex-row-reverse gap-9">
          <button
            onClick={handleDelete}
            disabled={loading}
            className="mt-4 w-32 bg-red-700 px-10 py-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            { loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin"/>
                Excluindo...
              </>
              ) : (
                "Excluir"
              )}
          </button>

          <button
            onClick={onClose}
            className="mt-4 bg-neutral-800 px-4 py-2 rounded-lg text-white"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}