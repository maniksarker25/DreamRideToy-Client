import { Outlet } from "react-router-dom";
import Navbar from "../SharedPage/Navbar";
import Footer from "../SharedPage/Footer";

const Main = () => {
  return (
    <div className="bg-[#E3E6E6]">
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto md:min-h-[calc(100vh-500px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
