import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {useState, useContext } from "react";

import UserContext from "@/contexts/UserContext";

export function Applayout() {
    // const [user, setUser] = useState<{ name: string; age: number } | null>(null);
    return (
        <>
            <Header />
            <div className="flex-grow flex flex-col">
                <div className="container px-4 md:px-8 flex-grow flex flex-col">
                    <Outlet />
                </div>
            </div>
            <div className="container px-4 md:px-8">
                <Footer />
            </div>
        </>
    )
}
