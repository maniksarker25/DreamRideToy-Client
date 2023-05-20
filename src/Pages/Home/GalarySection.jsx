import { useEffect } from "react";
import galary1 from "../../assets/galary1.jpg";
import galary2 from "../../assets/galary2.jpg";
import galary3 from "../../assets/galary3.jpg";
import galary4 from "../../assets/galary4.jpg";
import galary5 from "../../assets/galary5.jpg";
import galary6 from "../../assets/galary6.jpg";
import galary7 from "../../assets/galary7.jpg";
import galary8 from "../../assets/galary8.jpg";
import galary9 from "../../assets/galary9.jpg";
import galary10 from "../../assets/galary10.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const GalarySection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-20">
      <h1 className="text-center text-4xl font-semibold">Our Gallery</h1>
      <p className="text-center my-8">
        Welcome to our mesmerizing Car Toy Gallery, where automotive wonders
        come to life! Immerse yourself in a visual feast <br /> of miniature
        masterpieces, showcasing an exquisite assortment of car toys from around
        the world.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
        <div  data-aos="fade-left"   data-aos-offset="100">
          <img
            className="w-full h-[400px] rounded-md p-3 lg:p-0"
            src={galary1}
            alt=""
          />
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div data-aos="flip-left" data-aos-offset="100">
            <img
              className="w-full  h-56 rounded-md p-3 lg:p-0"
              src={galary2}
              alt=""
            />
          </div>
          <div  data-aos="flip-up" data-aos-offset="100" >
            <img
              className="w-full h-56 rounded-md p-3 lg:p-0"
              src={galary3}
              alt=""
            />
          </div>
          <div data-aos-offset="100" data-aos="flip-up" >
            <img
              className="w-full h-48 rounded-md p-3 lg:p-0"
              src={galary4}
              alt=""
            />
          </div>
          <div data-aos-offset="100" data-aos="flip-down">
            <img
              className="w-full h-48 rounded-md p-3 lg:p-0"
              src={galary5}
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div data-aos-offset="100" data-aos="flip-down">
            <img className="h-56 w-full" src={galary7} alt="" />
          </div>
          <div data-aos="zoom-in" data-aos-offset="100">
            <img className="h-56 w-full" src={galary8} alt="" />
          </div>
          <div data-aos-offset="100" data-aos="zoom-in">
            <img className="h-56 w-full" src={galary9} alt="" />
          </div>
          <div data-aos-offset="100" data-aos="zoom-in-down">
            <img className="h-56 w-full" src={galary10} alt="" />
          </div>
        </div>
        <div data-aos-offset="100" data-aos="zoom-in-down">
          <img
            className="w-full h-[460px] rounded-md p-3 lg:p-0"
            src={galary6}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GalarySection;
