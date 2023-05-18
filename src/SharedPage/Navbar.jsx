import { Link, NavLink } from "react-router-dom";
import logo from "../assets/dreamLogo.png";

const Navbar = () => {
  const navItems = (
    <>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
        <li>Home</li>
      </NavLink>
      <NavLink to="/allToys" className={({ isActive }) => (isActive ? 'active' : 'default')}>
        <li>All Toys</li>
      </NavLink>
      <NavLink to="blog" className={({ isActive }) => (isActive ? 'active' : 'default')}>
        <li>Blog</li>
      </NavLink>
      <NavLink to="myToy" className={({ isActive }) => (isActive ? 'active' : 'default')}>
        <li>My Toy</li>
      </NavLink>
      <NavLink to="addToy" className={({ isActive }) => (isActive ? 'active' : 'default')}>
        <li>Add Toy</li>
      </NavLink>
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
            className="menu menu-compact space-y-2 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center ">
            <img className=" h-10 w-10 lg:w-20 lg:h-20" src={logo} alt="" />
            <h3 className="lg:text-2xl  font-semibold">DreamRideToy</h3>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-8 menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="primary-btn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
