import { Link } from "react-router-dom";
import logo from "../assets/dreamLogo.png";

const Navbar = () => {
  const navItems = (
    <>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/allToys'>
        <li>All Toys</li>
      </Link>
      <Link>
        <li>Blog</li>
      </Link>
      <Link>
        <li>Add Toy</li>
      </Link>
      <Link>
        <li>My Toys</li>
      </Link>
    </>
  );
  return (
    <div className="navbar max-w-screen-xl mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to='/'>
          <div className="flex items-center ">
            <img className="w-20 h-20" src={logo} alt="" />
            <h3 className="text-2xl font-semibold">DreamRide</h3>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-8 menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link><button className="bg-orange-500 text-white font-bold px-6 py-2 rounded-md">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
