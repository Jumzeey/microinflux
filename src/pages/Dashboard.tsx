import React, { useState } from 'react';
import { NavBar } from '@/components';
import { categories } from '@/data/categories-data';
import Icongrid from '@/assets/icons/GridView.svg';
import Iconlist from '@/assets/icons/ListView.svg';
import ProfileOverview from '@/components/dashboard/ProfileOverview';
import ProfileInfo from '@/components/dashboard/ProfileInfo';
import SearchBar from '@/components/shared/SearchBar';
import DropdownSelect from '@/components/shared/SelectDropdown';
import CampaignCard from '@/components/campaign/card';
import { useCampaigns } from '@/context/campaign-context';
import { CampaignProvider } from '@/context/campaign-context';
import EmptyState from '@/components/shared/EmptyState';
import MobileNavbar from '@/components/shared/MobileNavBar';
import MobileSearchBar from '@/components/shared/MobileSearchBar';
import { Plus } from 'lucide-react';
import AddCampaignModal from '@/components/campaign/addCampaignModal';

const Dashboard: React.FC = () => {
  const { campaigns, searchCampaigns } = useCampaigns();
  const [open, setOpen] = useState(false);

  const handleSearch = (query: string) => {
    searchCampaigns(query);
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <>
      <div className="md:p-6 h-screen bg-primary-gray  overflow-x-hidden">
        <div className="mb-6 fixed w-[75%] bg-primary-gray z-20 top-0 py-6 hidden lg:block md:block">
          <NavBar />
        </div>
        <div className="mb-6 fixed w-full bg-primary-gray z-20 top-0 py-6 px-3 lg:hidden block md:hidden">
          <MobileNavbar />
        </div>
        <div className="mt-20 mb-6 gap-4 hidden md:flex lg:flex">
          <ProfileOverview />
          <ProfileInfo />
        </div>
        {/* search and filter */}
        <div className="flex flex-col gap-4 md:mb-6 mb-0">
          <div className="flex justify-between items-center">
            <p className="font-sfpro text-primary-blue">Explore Campaigns</p>
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="lg:hidden block mt-8 p-4">
            <div className="flex gap-2">
              <MobileSearchBar onSearch={handleSearch} />
              <span
                className="p-2 border border-black bg-primary-blue w-[50px] h-[50px]"
                onClick={() => setOpen(true)}
              >
                <Plus className="h-8 w-8 text-white" />
              </span>
            </div>
          </div>
          <div className="hidden lg:block md:block">
            <div className="flex justify-between">
              <div>
                <p>
                  Search results:{' '}
                  <span className="font-bold text-primary-blue">
                    {campaigns.length} Blog post
                  </span>{' '}
                  campaigns
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span>Sort by: </span>
                <DropdownSelect
                  categories={categories}
                  placeholder="Category"
                />
                <div className="flex">
                  <img
                    src={Icongrid}
                    alt="Grid View"
                    className="cursor-pointer"
                  />
                  <img
                    src={Iconlist}
                    alt="List View"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campaigns */}
        <div className="p-4 md:p-0">
          {campaigns.length === 0 ? (
            <EmptyState text="No campaigns found" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign, index) => (
                <CampaignCard
                  key={index}
                  title={campaign.title}
                  company={campaign.brand}
                  category={campaign.category}
                  description={campaign.description}
                  channels={campaign.channels}
                  budget={campaign.budget}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <AddCampaignModal open={open} onOpenChange={handleOpenChange} />
    </>
  );
};

const DashboardWithProvider: React.FC = () => {
  return (
    <CampaignProvider>
      <Dashboard />
    </CampaignProvider>
  );
};

export default DashboardWithProvider;
