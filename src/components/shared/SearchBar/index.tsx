import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2 relative">
      <Input
        type="text"
        placeholder="Search Campaign by title..."
        className="border-none rounded-lg bg-linear-blue p-2 w-[450px] h-[50px]"
        onChange={handleChange}
      />
      <Search className="absolute right-0 p-4 text-white bg-primary-blue rounded-xl h-full w-[50px]" />
    </div>
  );
}

export default SearchBar;
