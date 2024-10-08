import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function MobileSearchBar({ onSearch }: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2 relative">
      <Input
        type="text"
        placeholder="Search Campaign by title..."
        className="border-none rounded-lg bg-linear-blue p-2 w-[300px] pl-12 h-[50px] placeholder:text-primary-blue"
        onChange={handleChange}
      />
      <Search className="absolute left-0 p-4  text-primary-blue  h-full w-[50px]" />
    </div>
  );
}

export default MobileSearchBar;
