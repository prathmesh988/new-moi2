import { createBrowserRouter } from "react-router-dom";
import CrowdfundingDashboard from "./pages/CrowdFundingDashbaord"
import { Applayout } from "./components/layouts/AppLayout";

import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Empty from "./pages/Empty";
import Sample from "./pages/Sample";
import Home from "./pages/Home";
import UserProfile from "./pages/JoinCampaign";

export const router = createBrowserRouter([
    {
        path: "/t",
        element: <Applayout />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            
            {
                path: "sample",
                element: <Sample />,
            },
            {
                path: "empty",
                element: <Empty />,
            },
        ],

    },
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: "/CreateCampaign",
                element: <CrowdfundingDashboard />,
            }
            ,{
                path:'/join/:joinId',
                element:<UserProfile/>
            }

        ],
    

    },
    
    {
        path: "*",
        element: <NoMatch />,
    },
], {
    basename: global.basename
})
