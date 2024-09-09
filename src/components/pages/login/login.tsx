import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";



export function LogIn() {
    return (

        <div className="h-dvh bg-[#605770]">
            <div className="flex h-full w-full p-20 ">
                <div className="  w-1/2 flex item-center justify-center">
                    <div className="w-[650px] h-[550px]  max-w-[750px]  max-h-[550px] bg-[#C0E3E6] rounded-[50px]">

                    </div>
                </div>

                <div className="w-1/2">
                    <div className="flex flex-col items-center">
                        <div className="pt-12 capitalaize text-4xl mb-6">Log In</div>
                        <Input className="w-2/3 max-w-[750px] h-14 mb-12" placeholder="Email" />
                        <div className="w-2/3 max-w-[750px]">
                            <Input className=" h-14 mb-3" placeholder="Password" />
                            <div className="cursor-pointer underline underline-offset-8 mb-20 pl-3">Forgot Password?</div>
                        </div>
                        <Button className="w-56 h-12 bg-[#9E7682] font-normal  text-lg">Log In</Button>
                    </div>
                </div>
            </div>
        </div>
    )

}