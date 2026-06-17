export default function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="flex flex-col gap-6 bg-zinc-900 rounded-2xl p-6 w-96">
        <h2 className="text-white text-xl font-semibold">
          Registre um novo usuario
        </h2>

       <form className="flex flex-col gap-8">
        <div className="relative">
          <label className="text-white absolute bg-zinc-900 left-3 px-2 -top-3" 
          >Nome</label>
          <input 
          type="text"
          placeholder="Maria dos Santos"
          className={`
            peer
            w-full 
            h-12 border-2 p-2 
            border-gray-400/40
            text-gray-200
            rounded-b-md 
            rounded-t-md 
            focus:outline-none 
            focus:border-gray-300 
            transition-all
            ${
            search
              ? "ring-1 ring-gray-300"
              : "focus:ring-1 focus:ring-gray-400/20"
          }`}
          />
        </div>

        <div className="relative">
          <label className="text-white absolute bg-zinc-900 left-3 px-2 -top-3" 
          >Email</label>
          <input 
          type="text"
          placeholder="mariaexample@gmail.com"
          className={`
            peer
            w-full 
            h-12 border-2 p-2 
            border-gray-400/40
            text-gray-200
            rounded-b-md 
            rounded-t-md 
            focus:outline-none 
            focus:border-gray-300 
            transition-all
            ${
            search
              ? "ring-1 ring-gray-300"
              : "focus:ring-1 focus:ring-gray-400/20"
          }`}
          />
        </div>
       </form>

        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 px-4 py-2 rounded-lg text-white w-fit"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}