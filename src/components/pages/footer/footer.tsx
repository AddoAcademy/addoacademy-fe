import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import logo from "../../../assets/logo.png";

export function Footer() {
    return (
        <footer className="bg-[#605770] h-20 flex">
                <img src={logo} alt="logo" className="max-w-[150px] w-1/5 h-auto ml-16" />
            <div className="flex justify-end w-full gap-4 items-center mr-16">
                    <Facebook size={24} className="cursor-pointer" />
                    <Linkedin size={26} className="cursor-pointer"/>
                    <Instagram size={24} className="cursor-pointer"/>
                    <Mail size={26} className="cursor-pointer"/>
            </div>
        </footer>
    )
}