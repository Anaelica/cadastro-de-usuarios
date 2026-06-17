import CardUsuarios from "./cards/Users-Cards.jsx";
import Search from "./search/search.jsx";

export default function UserPage() {
  return (
    <div className="flex flex-col gap-16 items-center justify-center">
      <Search />
      <CardUsuarios />
    </div>
  );
}