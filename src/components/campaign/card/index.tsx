import React from 'react';
import Iconsave from "@/assets/icons/Save.svg";

interface CampaignCardProps {
    title: string;
    company: string;
    category: string;
    description: string;
    channels: string[];
    budget: string;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
    title,
    company,
    category,
    description,
    channels,
    budget
}) => {
    return (
        <div className="p-4 rounded-xl shadow-lg border border-gray-200 flex flex-col gap-6 justify-between min-h-[420px]">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                    {/* Initials Box */}
                    <div className="bg-purple-600 text-white rounded-lg p-2 w-[40px] h-[40px] text-lg font-bold">
                        ES
                    </div>
                    {/* Title and Company */}
                    <div className='text-sm'>
                        <h2 className="text-sm font-bold text-gray-800">{title || 'Epic Social Buzz'}</h2>
                        <p className="text-[10px] text-gray-500">{company || 'Samsung'} &bull; {category || 'Product Review'}</p>
                    </div>
                </div>
                {/* Posted Info */}
                <div className="text-[10px] text-semi-black flex items-center">
                    <p>Posted 2 days ago</p>
                    <img src={Iconsave} alt="Save icon" />
                </div>
            </div>

            {/* Description */}
            <p className="mt-3 text-gray-600 flex-grow">{description}</p>

            {/* Channels */}
            <div className="mt-4">
                <p className="text-gray-700 font-semibold">Channels</p>
                <div className="flex items-center space-x-3 mt-2">
                    {channels.slice(0, 5).map((channel, index) => (
                        <>
                        <p>{channel}</p>
                        <img
                            key={index}
                            src={`@/assets/icons/${channel}.svg`}
                            alt={channel}
                            className="h-6 w-6"
                        />
                        </>
                    ))}
                    {channels.length > 5 && (
                        <span className="text-gray-500">+ {channels.length - 5} more</span>
                    )}
                </div>
            </div>

            {/* Budget and Button */}
            <div className="flex justify-between items-center">
                <div className="mt-4">
                    <p className="text-primary-blue text-sm font-semibold">Budget</p>
                    <p className="text-xl font-bold text-primary-blue">{budget}</p>
                </div>

                <div className="mt-auto pt-4">
                    <button className="w-full bg-primary-blue text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CampaignCard;
