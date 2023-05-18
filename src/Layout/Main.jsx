import { Outlet } from "react-router-dom";
import Navbar from "../SharedPage/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
