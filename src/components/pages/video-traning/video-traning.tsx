import ReactPlayer from "react-player";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { useState } from "react";

export function VideoTraning() {
    const [playUrl, setPlayUrl] = useState("https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&ab_channel=Codevolution");  

    return (
        <div>
            <Header />
            <div className="p-32">
                <div className="flex mb-20">
                    <ReactPlayer  width={700} height={500} controls url={playUrl} />
                    <div className="pl-9 w-[500px]">
                        <div  onClick={() => setPlayUrl('https://www.youtube.com/watch?v=9hb_0TZ_MVI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2&ab_channel=Codevolution')} className="border-b border-color-[#5c5c5c] pb-2 cursor-pointer" >Lesson 1</div>
                        <div onClick={() => setPlayUrl('https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3&ab_channel=Codevolution')} className="border-b border-color-[#5c5c5c] pb-2 cursor-pointer">Lesson 2</div>
                        <div onClick={() => setPlayUrl('https://www.youtube.com/watch?v=Y2hgEGPzTZY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=4&ab_channel=Codevolution')} className="border-b border-color-[#5c5c5c] pb-2 cursor-pointer">Lesson 3</div>
                        <div onClick={() => setPlayUrl('https://www.youtube.com/watch?v=Cla1WwguArA&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=5&ab_channel=Codevolution')} className="border-b border-color-[#5c5c5c] pb-2 cursor-pointer">Lesson 4</div>
                        <div onClick={() => setPlayUrl('https://www.youtube.com/watch?v=lnV34uLEzis&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=6&ab_channel=Codevolution')} className="border-b border-color-[#5c5c5c] pb-2 cursor-pointer">Lesson 5</div>
                        <div onClick={() => setPlayUrl('https://www.youtube.com/watch?v=oecI26cWqzk&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=7&ab_channel=Codevolution')} className="border-b border-color-[#5c5c5c] pb-2 cursor-pointer">Lesson 6</div>
                        <div onClick={() => setPlayUrl('https://www.youtube.com/watch?v=7fPXI_MnBOY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=8&ab_channel=Codevolution')} className="border-b border-color-[#5c5c5c] pb-2 cursor-pointer">Lesson 7</div>
                        <div onClick={() => setPlayUrl('https://www.youtube.com/watch?v=m7OWXtbiXX8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=9&ab_channel=Codevolution')} className="border-b border-color-[#5c5c5c] pb-2 cursor-pointer">Lesson 8</div>
                    </div>
                </div>
                <div className="h-[300px]">Description</div>
            </div>
            <Footer/>
        </div>

    )

}