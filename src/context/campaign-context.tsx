import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Campaign, CampaignContextType } from '../types/campaign-types';
import { campaignRepository } from '../repositories/campaign-repository';

// Create context with type or undefined initially
const CampaignContext = createContext<CampaignContextType | undefined>(undefined);

// Provider component
export const CampaignProvider = ({ children }: { children: ReactNode }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    const initialCampaigns = campaignRepository.getCampaigns();
    setCampaigns(initialCampaigns);
  }, []);

  const addCampaign = (campaign: Campaign) => {
    try {
      const updatedCampaigns = campaignRepository.addCampaign(campaign);
      setCampaigns(updatedCampaigns);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <CampaignContext.Provider value={{ campaigns, addCampaign }}>
      {children}
    </CampaignContext.Provider>
  );
};

// Hook to access campaigns context
export const useCampaigns = (): CampaignContextType => {
  const context = useContext(CampaignContext);
  if (!context) {
    throw new Error('useCampaigns must be used within a CampaignProvider');
  }
  return context;
};
