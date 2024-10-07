import { createContext, useContext, useState, ReactNode } from 'react';
import { Campaign, CampaignContextType } from '../types/campaign-types';
import { campaignRepository } from '../repositories/campaign-repository';

const CampaignContext = createContext<CampaignContextType | undefined>(
  undefined
);

export const CampaignProvider = ({ children }: { children: ReactNode }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(
    campaignRepository.getCampaigns()
  );

  const addCampaign = (campaign: Campaign) => {
    const updatedCampaigns = campaignRepository.addCampaign(campaign);
    setCampaigns(updatedCampaigns);
  };

  return (
    <CampaignContext.Provider value={{ campaigns, addCampaign }}>
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaigns = (): CampaignContextType => {
  const context = useContext(CampaignContext);
  if (!context) {
    throw new Error('useCampaigns must be used within a CampaignProvider');
  }
  return context;
};
