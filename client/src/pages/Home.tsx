import React from 'react';
import { useNavigate } from 'react-router-dom';
import tempCampaigns from "./Data"
// Assuming these components are already typed in their definitions
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import CampaignComponent from "../components/ui/CampaignComponents"; // Fixed typo in import

// Define the type for the campaigns
type Campaign = {
  name: string;
  description: string; // Corrected typo from 'discription' to 'description'
  targetAmount: string;
  id:number;
  CompletionDate:string;
};

// Sample campaigns data
// const tempCampaigns : Campaign[]= [
//   { name: 'campaign1', description: 'this is the description of the campaign ', targetAmount: ''  , id:1 , CompletionDate:'2-4-2024'},
//   { name: 'campaign2', description: 'this is the description of the campaign ', targetAmount: ''  , id:2 , CompletionDate:'3-4-2024'},
//   { name: 'campaign3', description: 'this is the description of the campaign ', targetAmount: ''  , id:3 , CompletionDate:'4-4-2024'},
//   // Corrected duplicate names and fixed spelling
// ];



// Function to generate a list of CampaignComponent elements
const listOfCampaignComponent = (campaigns: Campaign[]): JSX.Element[] => 
  campaigns.map((campaign, index) => (
    <CampaignComponent key={index} name={campaign.name} description={campaign.description} targetAmount={campaign.targetAmount} id={campaign.id} />
  ));

  const AddIDtoArr = (arr: Campaign[]): void => {
    arr.forEach((item, index) => {
      item.id = index;
    });
  };
export default function Home() {
  
  const navigate = useNavigate();

  return (
    <>
      <PageHeader>
        <Card>
          <div className='p-5'>
            <h1 className="font-bold text-lg pb-2"> Create your own Campaign</h1>
            <div className="flex gap-1 justify-between">
              <p className="w-[60%]"> With just a few clicks, you can create your own campaign, sharing your passion, creativity, or cause with the world. Whether you're an aspiring entrepreneur, an artist seeking support for your next project, or a community champion rallying for change, our platform empowers you to inspire and engage supporters globally.</p>
              
              <Button onClick={() => navigate('/CreateCampaign')} className="bg-orange-500">Start Campaign</Button>
            </div>
          </div>
        </Card> 
      </PageHeader>
      
      <div className='w-[100%] h-[50vh] border-solid border-2 rounded-md'>
        <h1 className='font-bold pl-5 pt-3	'>Explore</h1>
        <div className=" flex gap-2  p-5">

                {      /* Here you might want to render something like listOfCampaignComponent(tempCampaigns) */}
            {listOfCampaignComponent(tempCampaigns)}
        </div>
      </div>
    </>
  );
}
