interface Campaign{
  name: string;
  description: string; // Corrected typo from 'discription' to 'description'
  targetAmount: string;
  id:number;
  CompletionDate:string;
};

//  simulation of getting campaign data from the network 
const tempCampaigns : Campaign[]= [
    { name: 'campaign1', description: 'this is the description of the campaign' , targetAmount: ''  ,  id:1 , CompletionDate:'2-4-2024'},
    { name: 'campaign2', description: 'this is the description of the campaign ' , targetAmount: ''  , id:2 , CompletionDate:'3-4-2024'},
    { name: 'campaign3', description: 'this is the description of the campaign ' , targetAmount: ''  , id:3 , CompletionDate:'4-4-2024'},
    { name: 'campaign3', description: 'this is the description of the campaign ' , targetAmount: ''  , id:4 , CompletionDate:'4-4-2024'},
    // Corrected duplicate names and fixed spelling
  ];

export default tempCampaigns;