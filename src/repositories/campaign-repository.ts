import { Campaign } from '../types/campaign-types';

class CampaignRepository {
  private campaigns: Campaign[];

  constructor() {
    this.campaigns = [];
  }

  // Get all campaigns
  getCampaigns(): Campaign[] {
    return [...this.campaigns];
  }

  // Add a new campaign
  addCampaign(campaign: Campaign): Campaign[] {
    const exists = this.campaigns.some(
      existingCampaign => existingCampaign.id === campaign.id
    );
    if (exists) {
      throw new Error(`Campaign with ID ${campaign.id} already exists.`);
    }
    this.campaigns = [...this.campaigns, campaign];
    return this.getCampaigns();
  }
}

export const campaignRepository = new CampaignRepository();
