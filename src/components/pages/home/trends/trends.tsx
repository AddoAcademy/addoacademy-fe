import { SecondarySlider } from "@/components/shared/secondary-slider";


export function Trends() {
    return (
        <div className="bg-[#605770]  w-full">
            <div className="py-16 flex justify-center items-center flex-col">
                <h2 className="text-center text-white font-bold text-4xl capitalize mb-12">new</h2>
                <div className=" flex flex-row gap-6 mb-10">
                    <div className="w-28 h-12 border border-black rounded-full bg-[#80798d]"></div>
                    <div className="w-28 h-12 border border-black rounded-full bg-[#80798d]"></div>
                    <div className="w-28 h-12 border border-black rounded-full bg-[#80798d]"></div>
                    <div className="w-28 h-12 border border-black rounded-full bg-[#80798d]"></div>
                    <div className="w-28 h-12 border border-black rounded-full bg-[#80798d]"></div>
                </div>
                <SecondarySlider />
            </div>
            <div className="py-16 flex justify-center items-center flex-col">
                <h2 className="text-center text-white font-bold text-4xl capitalize mb-12">trends</h2>
                <div className=" flex flex-row gap-6 mb-10">
                    <div className="w-28 h-12 border border-black rounded-full bg-[#80798d]"></div>
                    <div className="w-28 h-12 border border-black rounded-full bg-[#80798d]"></div>
                    <div className="w-28 h-12 border border-black rounded-full bg-[#80798d]"></div>
                    <div className="w-28 h-12 border border-black rounded-full bg-[#80798d]"></div>
                    <div className="w-28 h-12 border border-black rounded-full bg-[#80798d]"></div>
                </div>
                <SecondarySlider />
            </div>
        </div>
    )

}