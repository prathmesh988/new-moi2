import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
export default function Dashboard() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Creator</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle><Avatar> <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> </Avatar> </CardTitle>
                    <CardDescription className="flex flex-col gap-2"> 
                    <h1 className="text-2xl font-bold">Support Your creator</h1>
                    <Input type="number" placeholder="Amount *number" />
                    <Input type="text" placeholder="message" />
                    <Button className="bg-orange-500">Buy Coffee</Button>
                    </CardDescription>
                </CardHeader>
            </Card>
        </>
    )
}
