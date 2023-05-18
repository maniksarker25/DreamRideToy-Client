import galary1 from "../../assets/galary1.jpg";
import galary2 from "../../assets/galary2.jpg";
import galary3 from "../../assets/galary3.jpg";
import galary4 from "../../assets/galary4.jpg";
import galary5 from "../../assets/galary5.jpg";
import galary6 from "../../assets/galary6.jpg";

const GalarySection = () => {
  return (
    <div className="mt-20">
        <h1 className="text-center text-4xl font-semibold">Our Gallery</h1>
        <p className="text-center my-8">Welcome to our mesmerizing Car Toy Gallery, where automotive wonders come to life!  Immerse yourself in a visual feast <br /> of miniature masterpieces, showcasing an exquisite assortment of car toys from around the world.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <img className="w-96 h-96 rounded-md p-3 lg:p-0" src={galary1} alt="" />
        </div>
        <div>
          <img className="w-96 h-96 rounded-md p-3 lg:p-0" src={galary2} alt="" />
        </div>
        <div>
          <img className="w-96 h-96 rounded-md p-3 lg:p-0" src={galary3} alt="" />
        </div>
        <div>
          <img className="w-96 h-96 rounded-md p-3 lg:p-0" src={galary4} alt="" />
        </div>
        <div>
          <img className="w-96 h-96 rounded-md p-3 lg:p-0" src={galary5} alt="" />
        </div>
        <div>
          <img className="w-96 h-96" src={galary6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GalarySection;
