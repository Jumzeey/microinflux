import expandIcon from '@/assets/icons/expand.svg';
import { shortenText } from '@/utils/shorten-text';
import { sidebarData } from '@/data/sidebar-data';
import { ChevronRight } from 'lucide-react';

const SideBar = () => {
  const { profile, navigation, shortcuts } = sidebarData;
  return (
    <>
      <div className="h-screen font-sfpro fixed w-[320px] bg-white shadow-custom p-6">
        <div className="flex flex-col justify-between h-full">
          {/* top sidebar nav */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-bold text-primary-blue">Micro-Influx</p>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div className="flex w-full items-start justify-between hover:shadow-lg cursor-pointer">
                {/* profile */}
                <div className="flex">
                  <div>
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4">
                    <p className="font-bold text-primary-blue">
                      {profile.name}
                    </p>
                    <p className="font-light text-gray-500">{profile.role}</p>
                  </div>
                </div>
                <div>
                  <img src={expandIcon} alt="Expand" />
                </div>
              </div>

              {/* navitems */}
              <nav className="flex flex-col gap-1 w-full">
                {navigation.map((item, index) => (
                  <a
                    key={index}
                    href={item.route}
                    className={`flex items-center w-full p-3 rounded-lg text-gray-700 transition-colors duration-200 cursor-pointer ${
                      item.active
                        ? 'bg-primary-blue text-white font-semibold hover:bg-primary/90'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="mr-4 w-6 h-6"
                    />
                    <span>{item.name}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* bottom sidebar nav */}
          <div className="flex flex-col gap-2 mt-4">
            <p className="font-bold text-gray-600">Campaign Shortcuts</p>
            <nav className="flex flex-col gap-1 w-full">
              {shortcuts.map((item, index) => (
                <a
                  key={index}
                  href={item.route}
                  className="flex items-center w-full p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="mr-3 w-5 h-5"
                  />
                  <span>{shortenText(item.name, 20)}</span>
                  <ChevronRight className="ml-auto w-4 h-4 text-gray-500" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
