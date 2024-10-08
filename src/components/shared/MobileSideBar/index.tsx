import expandIcon from '@/assets/icons/expand.svg';
import statsIcon from '@/assets/images/stats.svg';
import { shortenText } from '@/utils/shorten-text';
import { sidebarData } from '@/data/sidebar-data';
import { ChevronRight } from 'lucide-react';

const MobileSideBar = () => {
  const { profile, navigation, shortcuts } = sidebarData;
  return (
    <div className="h-screen fixed w-[280px] bg-white shadow-custom p-4 font-sfpro">
      <div className="flex flex-col justify-between h-full">
        {/* Top Section */}
        <div className="flex flex-col gap-4">
          {/* Logo */}
          <p className="text-primary-blue text-xl font-bold">Micro-Influx</p>

          {/* Profile Section */}
          <div className="flex items-center justify-between hover:shadow-lg p-2 rounded-md cursor-pointer">
            <div className="flex items-center">
              <img
                src={profile.avatar}
                alt={profile.name}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="ml-3">
                <p className="text-primary-blue font-semibold">
                  {profile.name}
                </p>
                <p className="text-gray-500 text-sm">{profile.role}</p>
              </div>
            </div>
            <img src={expandIcon} alt="Expand" className="w-4 h-4" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-1">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.route}
                className={`flex items-center p-2 rounded-lg text-gray-700 transition-colors duration-200 cursor-pointer ${
                  item.active
                    ? 'bg-primary-blue text-white font-semibold'
                    : 'hover:bg-gray-100'
                }`}
              >
                <img src={item.icon} alt={item.name} className="mr-3 w-4 h-4" />
                <span className="text-sm">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Profile Progress Section */}
        <div className="bg-linear-blue p-2 rounded-md">
          <div className="flex flex-col items-center">
            <img src={statsIcon} alt="Stats" className="w-10 h-10" />
            <h2 className="text-primary-blue font-semibold text-sm mt-2">
              Profile Information
            </h2>
            <p className="text-gray-500 text-[10px] text-center px-2">
              Enhance your chances of selection by completing your profile – a
              fully detailed profile attracts more opportunities!
            </p>
            <button className="bg-primary-blue hover:bg-[#162e6e] text-white text-sm py-1 px-4 rounded mt-2">
              Complete my Profile
            </button>
          </div>
        </div>

        {/* Shortcuts */}
        <div className="">
          <p className="text-gray-600 font-semibold text-sm">
            Campaign Shortcuts
          </p>
          <nav className="flex flex-col gap-1">
            {shortcuts.slice(0, 3).map((item, index) => (
              <a
                key={index}
                href={item.route}
                className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              >
                <img src={item.icon} alt={item.name} className="w-4 h-4 mr-3" />
                <span className="text-sm">{shortenText(item.name, 20)}</span>
                <ChevronRight className="ml-auto w-4 h-4 text-gray-500" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
