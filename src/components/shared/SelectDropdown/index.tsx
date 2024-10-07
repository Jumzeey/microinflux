import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface DropdownSelectProps {
    categories: { value: string; label: string }[];
    placeholder?: string;
    className?: string;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({ categories, placeholder = "Category", className }) => {
    return (
        <Select>
            <SelectTrigger className={`w-[120px] h-[35px] bg-linear-blue border-none ${className}`}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    {categories.map((category) => (
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
