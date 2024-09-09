import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent} from "@/components/ui/card"
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export function MainSlider() {
    return (
        <div className="flex flex-col items-center p-28">
            <div className="mb-10 w-9/12" >
                <Carousel>
                    <CarouselContent >
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card >
                                        <CardContent className="flex h-[500px]  items-center justify-center p-6 ">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="flex gap-6">
                <Card className="w-[200px] h-[270px] flex justify-center items-center bg-[#C0E3E6] rounded-[50px] capitalize text-xl cursor-pointer">
                    <CardContent>
                      <Link to='video-traning'>Video Traning</Link>
                    </CardContent>
                </Card>
                <Card className="w-[200px] h-[270px] flex justify-center items-center bg-[#C0E3E6] rounded-[50px] capitalize text-xl cursor-pointer">
                    <CardContent>
                        <Link to='toolbox'>Tool Box</Link>
                    </CardContent>
                </Card>
                <Card className="w-[200px] h-[270px] flex justify-center items-center bg-[#C0E3E6] rounded-[50px] capitalize text-xl cursor-pointer">
                    <CardContent>
                    <Link to='masterclasses'>Masterclasses</Link>
                    </CardContent>
                </Card>
                <Card className="w-[200px] h-[270px] flex justify-center items-center bg-[#C0E3E6] rounded-[50px] capitalize text-xl cursor-pointer">
                    <CardContent>
                    <Link to='mentorship'>Mentorship</Link>
                    </CardContent>
                </Card>
            </div>
        </div>
        
    )
}