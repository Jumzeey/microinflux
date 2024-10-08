export interface Campaign {
  channels: string[];
  budget: string;
  id: string;
  brand: string;
  title: string;
  category: string;
  description: string;
}

export interface CampaignContextType {
  campaigns: Campaign[];
  addCampaign: (campaign: Campaign) => void;
  searchCampaigns: (title: string) => void;
}
