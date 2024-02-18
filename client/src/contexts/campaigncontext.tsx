import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Campaign {
  name: string;
  description: string;
  image: string;
  id: number;
  Date:string;
}

// Define the context's data type
interface CampaignContextType {
  campaigns: Campaign[];
  addCampaign: (campaign: Campaign) => void;
  removeCampaign: (id: number) => void;
}

// Initialize the context
const CampaignContext = createContext<CampaignContextType | undefined>(undefined);
interface CampaignProviderProps {
  children: ReactNode;
}
// Provider component
const CampaignProvider: React.FC<CampaignProviderProps> = ({ children} ) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    // Initial campaign data
    { name: 'campaign1', description: 'this is the description of the campaign ', image: '', id: 1 },
    { name: 'campaign2', description: 'this is the description of the campaign ', image: '', id: 2 },
    { name: 'campaign3', description: 'this is the description of the campaign ', image: '', id: 3 },
  ]);

  const addCampaign = (campaign: Campaign) => {
    setCampaigns((prevCampaigns) => [...prevCampaigns, campaign]);
  };

  const removeCampaign = (id: number) => {
    setCampaigns((prevCampaigns) => prevCampaigns.filter(campaign => campaign.id !== id));
  };

  return (
    <CampaignContext.Provider value={{ campaigns, addCampaign, removeCampaign }}>
      {children}
    </CampaignContext.Provider>
  );
};

export { CampaignContext, CampaignProvider };
