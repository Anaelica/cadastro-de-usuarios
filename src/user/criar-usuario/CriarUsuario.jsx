import { CirclePlus } from "lucide-react"
import { useState } from "react"
import Modal from "../modal/Modal";

export default function CriarUsuario({ onCreate }){
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className=" bg-neutral-800 rounded-3xl px-4 p-2 w-fit">
        <button
        onClick={() => setOpenModal(true)}
        className="flex items-center justify-center gap-2 w-full text-gray-300 font-medium text-sm">
            Novo usuario
            <CirclePlus className="h-4 w-4"/>
        </button>
         {openModal && (
        <Modal 
          onClose={() => setOpenModal(false)} 
          onCreate={onCreate}
        />
        )}
      </div>  
  )
}