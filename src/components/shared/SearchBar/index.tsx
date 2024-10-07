import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

function SearchBar() {
    return (
        <div className="flex items-center space-x-2 relative">
            <Input
                type="text"
                placeholder="Search Campaign  by title..."
                className="border-none rounded-lg bg-linear-blue p-2 w-[450px] h-[50px] "
            />
            <Search className="absolute right-0 p-4 text-white bg-primary-blue rounded-xl h-full w-[50px]"/>
        </div>
    );
}

export default SearchBar;