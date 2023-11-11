
import { Helmet } from "react-helmet-async";
import FeaturedFoods from "./FeaturedFoods";
import Slider from "./Slider";
import Sponsor from "./Sponsor";
import Team from "./Team";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Plate-2-Plate | Home</title>
            </Helmet>
            <h2 className="mt-20 mb-6 text-center text-5xl font-bold">A small contribution can bring a smile</h2>
            <Slider></Slider>
            <FeaturedFoods></FeaturedFoods>
            <Team></Team>
            <Sponsor></Sponsor>
        </div>
    );
};

export default Home;