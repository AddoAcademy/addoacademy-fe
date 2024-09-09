import { Drawer, DrawerContent,DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";


export function BurgerMenu() {
    return (
        <Drawer direction="left">
            <DrawerTrigger>
                <MenuIcon size={36} />
            </DrawerTrigger>
            <DrawerContent >
                <div className="flex flex-col px-4">
                    <div className="flex items-center h-16 border-b border-black cursor-pointer">Facilitating learning</div>
                    <div className="flex items-center h-16 border-b border-black cursor-pointer">Designing programmes</div>
                    <div className="flex items-center h-16 border-b border-black cursor-pointer">Managing resources</div>
                    <div className="flex items-center h-16 border-b border-black cursor-pointer">Collaborating in teams</div>
                    <div className="flex items-center h-16 border-b border-black cursor-pointer">Communicating meaningfully</div>
                    <div className="flex items-center h-16 border-b border-black cursor-pointer">Displaying intercultural sensitivity</div>
                    <div className="flex items-center h-16 border-b border-black cursor-pointer">Networking and advocating</div>
                    <div className="flex items-center h-16 cursor-pointer">Assessing and evaluating</div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}