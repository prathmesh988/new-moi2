import { useParams } from 'react-router-dom';
import React from 'react';
import { PageHeader } from "@/components/page-header"; // Corrected import
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CampaignComponent from "../components/ui/CampaignComponents"; // Fixed typo in import
import { Card } from '@/components/ui/card';
import { join } from 'path';
import tempCampaigns from './Data';
type Campaign = {
  name: string;
  description: string; // Corrected typo from 'discription' to 'description'
  targetAmount: string;
  id: number;
  CompletionDate: string;
};

// const tempCampaigns : Campaign[]= [
//   { name: 'campaign1', description: 'this is the description of the campaign ', targetAmount: ''  , id:1 , CompletionDate:'2-4-2024'},
//   { name: 'campaign2', description: 'this is the description of the campaign ', targetAmount: ''  , id:2 , CompletionDate:'3-4-2024'},
//   { name: 'campaign3', description: 'this is the description of the campaign ', targetAmount: ''  , id:3 , CompletionDate:'4-4-2024'},
//   // Corrected duplicate names and fixed spelling
// ];

// Assuming tempCampaigns is an array of Campaigns

let indexno :number;
const ValiDateCampaign = (arr: Campaign[], val: number): boolean => {
 let result:boolean = arr.some((element: Campaign) => {
  
  
  let res :boolean =element.id === val
  indexno = element.id - 1;
  return res;
  
} );
  return result;
}

const UserProfile = () => {
  let { joinId } = useParams<{ joinId: string }>(); // Corrected typing of useParams
  joinId= joinId!;
  // console.log(typeof User)
  console.log(joinId)
  
  return (
    <>
      {(ValiDateCampaign(tempCampaigns, parseInt(joinId))) ? (
        <PageHeader className=' flex justify-center'>
          <Card>
            <div className='p-5 h-[70vh] w-[90vw]'>
              <h1 className="font-bold text-lg pb-2"> Join our campaign</h1>
              <div className="flex gap-1 justify-between">
                <p className="w-[60%]">{tempCampaigns[indexno].description}</p>
            <Button className="bg-orange-500">Join Campaign</Button>
              </div>
              <h1>Amount:{tempCampaigns[indexno].targetAmount}</h1>
            </div>
          </Card> 
        </PageHeader>
      ) : (
        <h1>Campaign Not found</h1>
      )}
    </>
  );
}

export default UserProfile;
