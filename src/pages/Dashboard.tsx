import React from 'react';
import { NavBar } from "@/components";
import { categories } from '@/data/categories-data';
import Icongrid from "@/assets/icons/GridView.svg";
import Iconlist from "@/assets/icons/ListView.svg";
import ProfileOverview from "@/components/dashboard/ProfileOverview";
import ProfileInfo from "@/components/dashboard/ProfileInfo";
import SearchBar from "@/components/shared/SearchBar";
import DropdownSelect from "@/components/shared/SelectDropdown";
import CampaignCard from '@/components/campaign/card';
import { useCampaigns } from '@/context/campaign-context';
import { CampaignProvider } from '@/context/campaign-context'; 


const Dashboard: React.FC = () => {
  const { campaigns } = useCampaigns();


  return (
    <>
      <div className="p-6 h-screen bg-primary-gray">
        <div className="mb-6 fixed w-[75%] bg-primary-gray z-20 top-0 py-6">
          <NavBar />
        </div>
        <div className="mt-20 mb-6 flex gap-4">
          <ProfileOverview />
          <ProfileInfo />
        </div>
        {/* search and filter */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex justify-between items-center">
            <p className="font-sfpro text-primary-blue">Explore Campaigns</p>
            <SearchBar />
          </div>
          <div className="flex justify-between">
            <div>
              <p>Search results: <span className="font-bold text-primary-blue">432 Blog post</span> campaigns</p>
            </div>
            <div className="flex gap-2 items-center">
              <span>Sort by: </span>
              <DropdownSelect categories={categories} placeholder="Category" />
              <div className="flex">
                <img src={Icongrid} alt="Grid View" className="cursor-pointer" />
                <img src={Iconlist} alt="List View" className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Campaigns */}
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
      </div>
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
