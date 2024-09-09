import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";





export function SearchBar() {
    return (
        <div className=" h-10 w-1/2 max-w-[700px] relative">
        <Input className="pl-10" />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>

    )

}