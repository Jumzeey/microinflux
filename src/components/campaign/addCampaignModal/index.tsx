import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import DropdownSelect from "@/components/shared/SelectDropdown";
import { categories } from '@/data/categories-data';

interface AddCampaignModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const AddCampaignModal: React.FC<AddCampaignModalProps> = ({ open, onOpenChange }) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-lg w-full p-10">
                <DialogHeader>
                    <DialogTitle className="text-primary-blue text-2xl font-light font-sfpro">
                        Create Campaign
                    </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                    <div className="flex flex-col items-start gap-1">
                        <Label htmlFor="campaignTitle" className="text-right font-normal text-base text-primary-blue">
                            Campaign Title
                        </Label>
                        <Input
                            id="campaignTitle"
                            placeholder="Enter your campaign title here"
                            className="w-full"
                        />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <Label htmlFor="brandName" className="text-right font-normal text-base text-primary-blue">
                            Brand Name
                        </Label>
                        <Input
                            id="brandName"
                            placeholder="Enter your brand name here"
                            className="w-full" 
                        />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <Label htmlFor="category" className="text-right font-normal text-base text-primary-blue">
                            Campaign Category
                        </Label>
                        <DropdownSelect categories={categories} placeholder="Select your campaign category" className="w-full bg-white border border-black" />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <Label htmlFor="description" className="text-right font-normal text-base text-primary-blue">
                            Campaign Description
                        </Label>
                        <Input
                            id="description"
                            placeholder="Enter your campaign description here"
                            className="w-full"
                            type="textarea" 
                        />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <Label className="text-right text-primary-blue font-normal text-base">Select Preferred Channels</Label>
                        <div className="flex gap-2">
                            <Checkbox id="instagram" />
                            <Label htmlFor="instagram">Instagram</Label>
                            <Checkbox id="tiktok" />
                            <Label htmlFor="tiktok">TikTok</Label>
                            <Checkbox id="youtube" />
                            <Label htmlFor="youtube">YouTube</Label>
                            <Checkbox id="twitter" />
                            <Label htmlFor="twitter">Twitter</Label>
                            <Checkbox id="facebook" />
                            <Label htmlFor="facebook">Facebook</Label>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <Label htmlFor="budget" className="text-right text-primary-blue font-normal text-base">
                            Campaign Budget
                        </Label>
                        <Input
                            id="budget"
                            placeholder="Enter your campaign budget"
                            className="w-full"
                        />
                    </div>
                </div>
                <DialogFooter className="flex items-center">
                    <Button type="submit">Create New Campaign</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddCampaignModal;
