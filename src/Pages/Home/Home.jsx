
import Banner from "./Banner";
import GalarySection from "./GalarySection";
import OurPricing from "./OurPricing/OurPricing";
import PeopleLike from "./PeopleLike";
import ShopByCategory from "./ShopByCategory/ShopByCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GalarySection></GalarySection>
            <ShopByCategory></ShopByCategory>
            <PeopleLike/>
            <OurPricing/>
        </div>
    );
};

export default Home;