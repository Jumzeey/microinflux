import { SideBar } from '@/components';
import { Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {
  return (
    <div className="h-full flex ">
      <div className="hidden md:block lg:block">
        <SideBar />
      </div>
      <div className="flex-1 w-full lg:ml-[320px] md:ml-[320px]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
