import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { SearchBar } from "./search/search-bar";
import { BurgerMenu } from "./burger-menu/burger-menu";
import logo from "../../../assets/logo.png";






export function Header() {
    const navigate = useNavigate();
    return (
        <header className="bg-[#605770] h-20">
            <div className="ml-16 mr-32 flex items-center justify-between h-full">
                <Link className="max-w-[150px] w-1/5 h-auto" to="/">
                <img src={logo} alt="logo"  />
                </Link>
                <BurgerMenu />
                <SearchBar />
                <div>
                    <Button onClick={() => navigate("/signup")} className="rounded-full w-24 h-10 ml-6">Sign in</Button>
                    <Button onClick={() => navigate("/login")} className="rounded-full w-24 h-10 ml-6">Log in</Button>
                </div>
            </div>
        </header>
    )

}