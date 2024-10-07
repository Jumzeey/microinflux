import { NavBar } from "@/components";
import ProfileOverview from "@/components/dashboard/ProfileOverview";
import ProfileInfo from "@/components/dashboard/ProfileInfo";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="p-6 h-screen bg-primary-gray">
        <div className="mb-6">
          <NavBar />
        </div>
        <div className="mb-6 flex gap-4">
          <ProfileOverview />
          <ProfileInfo />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
