import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"

export default function CrowdfundingDashboard() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Start Campaign</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    
                    <CardDescription className="flex flex-col gap-2"> 
                    <h1 className="text-2xl font-bold">Support the Campaign</h1>
                    <Input type="text" placeholder="Title for campaign" />
                    <Input type="number" placeholder="Amount *number" />
                    <Textarea placeholder="Enter  story for campaign" />
                    <Button className="bg-orange-500">Start Campaign</Button>
                    </CardDescription>
                </CardHeader>
            </Card>
        </>
    )
}
