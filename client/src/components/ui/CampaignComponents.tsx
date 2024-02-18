import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
// Define a type for the component's props
type CampaignComponentProps = {
  name: string;
  id:number;
  description: string; // Note: fixed typo from 'discription' to 'description'
  targetAmount: string; // Assuming 'image' is a string URL. Adjust the type if needed (e.g., if it's a file object or another type)
};

const CampaignComponent: React.FC<CampaignComponentProps> = ({ name, description, targetAmount ,id }) => {
    const navigate = useNavigate();
  
    return (
    // Removed <link> as it's not correctly used here. Assuming you wanted a wrapper like <div> or <a>.
    <Card  className='h-[30vh] w-[15vw]'>
    <div className="flex flex-col gap-4 p-5 ">
    
      <h1>{name}</h1>
      <p className='w-[50%]'>{description}</p>
      {/* If you need to display the image, you can do so like this: */}
      {/* <img src={image} alt={name} /> */} 
      <Button onClick= {()=>{navigate(`/join/${id}`)}} className="bg-orange-500">Join Campaign</Button>
    </div>
    </Card>


  );
};

export default CampaignComponent;
