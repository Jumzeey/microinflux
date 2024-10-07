
import { SideBar } from '@/components';
import { Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {
  return (
    <div className="h-full flex">
      <SideBar />
      <div className="flex-1 ml-[320px]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
