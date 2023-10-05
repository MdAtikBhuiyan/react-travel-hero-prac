import Navbar from "../Shared/Navbar/Navbar";
import bgImg from "../../assets/images/Rectangle-1.png"
import Header from "../Shared/Header/Header";
import { useState } from "react";

const Home = () => {

    const [currentPlace, setCurrentPlace] = useState(null)

    console.log(currentPlace);

    // const { img } = currentPlace;
    // console.log(img);

    return (
        <div className="h-screen bg-no-repeat bg-center bg-cover" style={{
            backgroundImage: `url(${currentPlace?.img})`
        }}>
            <div className="bg-[#0c0c0cc2] h-full">
                <div className="w-[90%] mx-auto h-full">
                    <Navbar />
                    <Header currentPlace={currentPlace} setCurrentPlace={setCurrentPlace} />
                </div>
            </div>
        </div>
    );
};

export default Home;