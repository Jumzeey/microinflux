import IconOpen from '@/assets/icons/open.svg';
import { overviewSummaryData } from '@/data/profile-overview-data';

const ProfileOverview = () => {
  return (
    <>
      <div className="relative font-sfpro h-56 rounded-2xl w-2/3 bg-[url('https://ik.imagekit.io/jumzeey/microflux/image%20110_cVt-TnK4i.svg?updatedAt=1728295404655')] bg-cover bg-center">
        {/* Overlay background color */}
        <div className="absolute inset-0 bg-card-blue bg-opacity-80 rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10 text-white py-4 px-6 flex flex-col gap-10">
          <div className="flex items-center justify-between w-full border-b border-white pb-2">
            <div>
              <p className=" text-xl font-medium">Financial Overview</p>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <p className="font-thin">View all campaigns</p>
              <img src={IconOpen} alt="" width={16} height={16} />
            </div>
          </div>
          <div className="flex gap-14">
            <div className="flex flex-col">
              <p className="font-thin text-sm">Total Income</p>
              <p className="font-medium text-2xl">
                {overviewSummaryData.income}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-thin text-sm">Funds In Escrow</p>
              <p className="font-medium text-2xl">
                {overviewSummaryData.escrow}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-thin text-sm">Ave. Income Monthly</p>
              <p className="font-medium text-2xl">
                {overviewSummaryData.avgIncome}
              </p>
            </div>
          </div>
          <div className="text-white rounded-lg flex items-center gap-4">
            {/* January Summary Section */}
            <span className="font-semibold">January Summary:</span>

            {/* Escrow and Income Details */}
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                Total Fund in Escrow
                <span className="font-semibold text-white">
                  • {overviewSummaryData.escrowTotalFunds}
                </span>
              </span>

              <span className="flex items-center gap-2">
                Total Income
                <span className="font-semibold text-white">
                  • {overviewSummaryData.totalIncome}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileOverview;
