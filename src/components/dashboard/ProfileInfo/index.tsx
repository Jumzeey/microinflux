import { Progress } from '@/components/ui/progress';
import IconOpen from '@/assets/icons/openOutline.svg';
import { sidebarData } from '@/data/sidebar-data';

const ProfileInfo = () => {
  const { profile } = sidebarData;
  return (
    <>
      <div className="relative font-sfpro h-56 rounded-2xl w-1/3 border border-primary-blue">
        <div className="py-4 px-6 flex flex-col gap-4">
          <div className="flex items-center justify-between w-full border-b border-primary-blue pb-2">
            <div>
              <p className=" text-xl font-medium">Profile Information</p>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <img src={IconOpen} alt="" width={16} height={16} />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <img src={profile.avatar} alt="" width={56} height={56} />
            <div className="w-full">
              <p className="font-bold">{profile.name}</p>
              <div className="flex items-center">
                <Progress value={15} className="h-1 m-2" />
                <span className="text-sm">15%</span>
              </div>
            </div>
          </div>
          <div className=" leading-6">{profile.about}</div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
