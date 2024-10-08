import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DropdownSelectProps {
  categories: { value: string; label: string }[];
  value?: string; // Selected category value
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  categories,
  value,
  onChange,
  placeholder = 'Category',
  className,
}) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={`w-[120px] h-[35px] bg-linear-blue border-none ${className}`}
      >
        <SelectValue
          placeholder={placeholder}
          className="text-muted-foreground"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {categories.map(category => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default DropdownSelect;
