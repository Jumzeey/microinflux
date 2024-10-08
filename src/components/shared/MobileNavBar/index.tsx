import { Menu } from 'lucide-react';
import { sidebarData } from '@/data/sidebar-data';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import MobileSideBar from '../MobileSideBar';

const MobileNavbar = () => {
  const { profile } = sidebarData;

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <img
            src={profile.avatar}
            alt={profile.name}
            width={48}
            height={48}
            className="rounded-lg"
          />
        </div>
        <div>
          <p className="font-bold text-primary-blue text-2xl">Micro-Influx</p>
        </div>
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="text-primary-blue cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[320px]">
              <MobileSideBar />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
