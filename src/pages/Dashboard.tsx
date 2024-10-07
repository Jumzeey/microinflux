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


const Dashboard: React.FC = () => {
  // Example campaign data
  const campaigns = [
    {
      title: "Epic Social Buzz",
      company: "Samsung",
      category: "Product Review",
      postedDaysAgo: 2,
      description: "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et su...",
      channels: ["instagram", "tiktok", "youtube", "twitter", "facebook"],
      budget: "$1000 - $2,000"
    },
    {
      title: "Tech Review Challenge",
      company: "Apple",
      category: "Gadget Review",
      postedDaysAgo: 1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      channels: ["youtube", "twitter"],
      budget: "$500 - $1,500"
    },
    {
      title: "Fitness Frenzy",
      company: "Nike",
      category: "Health & Fitness",
      postedDaysAgo: 5,
      description: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam.",
      channels: ["instagram", "tiktok"],
      budget: "$2,000 - $5,000"
    },
    {
      title: "Food Review Fiesta",
      company: "McDonald's",
      category: "Food Review",
      postedDaysAgo: 3,
      description: "Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus.",
      channels: ["instagram", "facebook"],
      budget: "$700 - $1,200"
    },
    {
      title: "Gamer's Paradise",
      company: "Sony",
      category: "Game Review",
      postedDaysAgo: 4,
      description: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
      channels: ["youtube", "twitch"],
      budget: "$1,500 - $3,000"
    },
    {
      title: "Fashion Forward",
      company: "Gucci",
      category: "Fashion Review",
      postedDaysAgo: 7,
      description: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
      channels: ["instagram", "tiktok", "pinterest"],
      budget: "$2,500 - $4,000"
    }
  ];

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
              company={campaign.company}
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

export default Dashboard;
