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
import DropdownSelect from "@/components/shared/SelectDropdown";
import { categories } from '@/data/categories-data';
import { useState } from "react";
import { useCampaigns } from "@/context/campaign-context";

import InstagramIcon from "@/assets/icons/instagram.svg";
import TikTokIcon from "@/assets/icons/tiktok.svg";
import YouTubeIcon from "@/assets/icons/youtube.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";

interface AddCampaignModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const channelIcons = [
    { id: "instagram", icon: InstagramIcon },
    { id: "tiktok", icon: TikTokIcon },
    { id: "youtube", icon: YouTubeIcon },
    { id: "twitter", icon: TwitterIcon },
    { id: "facebook", icon: FacebookIcon },
];

const AddCampaignModal: React.FC<AddCampaignModalProps> = ({ open, onOpenChange }) => {
    const { addCampaign } = useCampaigns();

    const [campaignTitle, setCampaignTitle] = useState('');
    const [brandName, setBrandName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [budget, setBudget] = useState('');
    const [selectedChannels, setSelectedChannels] = useState<string[]>([]);

    const toggleChannel = (channelId: string) => {
        setSelectedChannels((prev) =>
            prev.includes(channelId) ? prev.filter((id) => id !== channelId) : [...prev, channelId]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newCampaign = {
            id: String(Date.now()), 
            title: campaignTitle,
            brand: brandName,
            category,
            description,
            budget,
            channels: selectedChannels,
        };

        // Add campaign using the context
        addCampaign(newCampaign);

        setCampaignTitle('');
        setBrandName('');
        setCategory('');
        setDescription('');
        setBudget('');
        setSelectedChannels([]);

        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-lg w-full p-10">
                <DialogHeader>
                    <DialogTitle className="text-primary-blue text-2xl font-light font-sfpro">
                        Create Campaign
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4 py-4">
                        <div className="flex flex-col items-start gap-1">
                            <Label htmlFor="campaignTitle" className="text-right font-normal text-base text-primary-blue">
                                Campaign Title
                            </Label>
                            <Input
                                id="campaignTitle"
                                value={campaignTitle}
                                onChange={(e) => setCampaignTitle(e.target.value)}
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
                                value={brandName}
                                onChange={(e) => setBrandName(e.target.value)}
                                placeholder="Enter your brand name here"
                                className="w-full"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <Label htmlFor="category" className="text-right font-normal text-base text-primary-blue">
                                Campaign Category
                            </Label>
                            <DropdownSelect
                                categories={categories}
                                value={category}
                                onChange={setCategory}
                                placeholder="Select your campaign category"
                                className="w-full bg-white border border-black"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <Label htmlFor="description" className="text-right font-normal text-base text-primary-blue">
                                Campaign Description
                            </Label>
                            <Input
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter your campaign description here"
                                className="w-full"
                                type="textarea"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <Label className="text-right text-primary-blue font-normal text-base">Select Preferred Channels</Label>
                            <div className="flex gap-4">
                                {channelIcons.map(({ id, icon }) => (
                                    <div key={id} onClick={() => toggleChannel(id)} className="cursor-pointer">
                                        <img
                                            src={icon}
                                            alt={id}
                                            className={`w-8 h-8 transition-colors p-1 rounded-sm border border-[#BFBFBF] duration-300 ${selectedChannels.includes(id) ? 'fill-current bg-black' : 'text-gray-500'}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <Label htmlFor="budget" className="text-right text-primary-blue font-normal text-base">
                                Campaign Budget
                            </Label>
                            <Input
                                id="budget"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                placeholder="Enter your campaign budget"
                                className="w-full"
                            />
                        </div>
                    </div>
                    <DialogFooter className="flex items-center">
                        <Button type="submit">Create New Campaign</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddCampaignModal;
