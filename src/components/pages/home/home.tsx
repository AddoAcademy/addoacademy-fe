import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { MainSlider } from "./main-slider/main-slider";
import { Trends } from "./trends/trends";



export function Home() {
    return (
        <div>
            <Header />
            <MainSlider />
            {/* <Ads /> */}
            <Trends/>
            <div className="h-[700px] bg-white">

            </div>
            <Footer/>
        </div>
    )

}