import { Campaign } from '../types/campaign-types';

class CampaignRepository {
  private campaigns: Campaign[];

  constructor() {
    this.campaigns = [];
  }

  getCampaigns(): Campaign[] {
    return this.campaigns;
  }

  addCampaign(campaign: Campaign): Campaign[] {
    this.campaigns.push(campaign);
    return this.campaigns;
  }
}

export const campaignRepository = new CampaignRepository();
