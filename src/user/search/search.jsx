import { SearchIcon } from "lucide-react";
import { useState } from "react";

export default function Search(){
  const [search, setSearch] = useState("")

  return (
    <div className="mt-4 relative">
      <form>
      <input
      value={search}
      onChange={(e) => setSearch(e.target.value)} 
      type="text" 
      name="search" 
      id="search" 
      placeholder="Procure um usuario..."
      className={`
        peer
        text-gray-200
        border-2
      border-gray-500 
        p-1 
        px-4 
        w-3xs
        rounded-lg 
        focus:outline-none 
        focus:border-gray-400 
        transition-all
        ${
          search
            ? "ring-1 ring-gray-300/80"
            : "focus:ring-1 focus:ring-gray-300/20"
        }
        `}/>
      
      <SearchIcon 
      className={`
      h-5
      w-5
      text-gray-400
      absolute 
      top-1/2
      right-3
      -translate-y-1/2
      transition-colors
      peer-focus:text-white/80
      ${search ? "text-white" : "text-gray-400"}
      `}/>
    </form>
    </div>
  )
}