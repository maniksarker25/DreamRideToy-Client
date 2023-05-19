import Banner from "./Banner";
import GalarySection from "./GalarySection";
import PeopleLike from "./PeopleLike";
import ShopByCategory from "./ShopByCategory/ShopByCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GalarySection></GalarySection>
            <ShopByCategory></ShopByCategory>
            <PeopleLike/>
        </div>
    );
};

export default Home;