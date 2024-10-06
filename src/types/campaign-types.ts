export interface Campaign {
  id: number;
  name: string;
}

export interface CampaignContextType {
  campaigns: Campaign[];
  addCampaign: (campaign: Campaign) => void;
}
