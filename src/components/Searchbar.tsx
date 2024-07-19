
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"

export default function Searchbar() {

  return (
    <div className="flex items-center justify-between w-full bg-white rounded-full px-2 py-1 border-primary border-2">
      <Input
        type="search"
        placeholder="Search..."
        className="w-[80%] md:w-[90%] border-0 h-9 pr-2 focus:ring-0 bg-transparent ring-0 outline-none"
      />
      <Button size="icon" className="ml-1 hover:bg-primary hover:scale-105 transition active:scale-100 rounded-full size-[34px] aspect-square">
        <SearchIcon className="h-5 w-5 flex-shrink-0 text-background" />
      </Button>
    </div>
  )
}
