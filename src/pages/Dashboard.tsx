import { NavBar } from "@/components";
import ProfileOverview from "@/components/dashboard/ProfileOverview";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="p-6 h-screen bg-primary-gray">
        <div className="mb-6">
          <NavBar />
        </div>
        <div className="mb-6 flex">
          <ProfileOverview />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
