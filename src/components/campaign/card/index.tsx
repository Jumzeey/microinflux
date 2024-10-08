import React from 'react';
import Iconsave from '@/assets/icons/Save.svg';
import { getInitials, getBackgroundColor } from '@/utils/gravatar-generator';

import InstagramIcon from '@/assets/icons/instagram-fill.svg';
import TikTokIcon from '@/assets/icons/tiktok-fill.svg';
import YouTubeIcon from '@/assets/icons/youtube-fill.svg';
import TwitterIcon from '@/assets/icons/twitter-fill.svg';
import FacebookIcon from '@/assets/icons/facebook-fill.svg';

interface CampaignCardProps {
  title: string;
  company: string;
  category: string;
  description: string;
  channels: string[];
  budget: string;
}

const channelIcons: { [key: string]: string } = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
};

const CampaignCard: React.FC<CampaignCardProps> = ({
  title,
  company,
  category,
  description,
  channels,
  budget,
}) => {
  const initials = getInitials(title);
  const bgColor = getBackgroundColor(title);

  return (
    <div className="p-4 rounded-xl shadow-lg border border-gray-200 flex flex-col md:gap-6 gap-2 justify-between md:min-h-[400px] min-h-[220px]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-3">
          <div
            className={`${bgColor} text-white rounded-lg p-2 w-[40px] h-[40px] text-lg font-bold flex items-center justify-center`}
          >
            {initials}
          </div>
          <div className="text-sm">
            <h2 className="text-sm font-bold text-gray-800">{title}</h2>
            <p className="text-[10px] text-gray-500">
              {company} &bull; {category}
            </p>
          </div>
        </div>
        <div className="text-[10px] text-semi-black flex items-center">
          <p>Posted 2 days ago</p>
          <img src={Iconsave} alt="Save icon" />
        </div>
      </div>

      <p className="mt-3 text-gray-600 flex-grow">{description}</p>

      <div>
        <p className="text-gray-700 font-semibold">Channels</p>
        <div className="flex items-center space-x-3 mt-2">
          {channels.slice(0, 5).map((channel, index) => {
            const IconComponent = channelIcons[channel.toLowerCase()];
            return (
              IconComponent && (
                <img
                  key={index}
                  src={IconComponent}
                  alt={channel}
                  className="h-6 w-6"
                />
              )
            );
          })}
          {channels.length > 5 && (
            <span className="text-gray-500">+ {channels.length - 5} more</span>
          )}
        </div>
      </div>

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
};

export default CampaignCard;
