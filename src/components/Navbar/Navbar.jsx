import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import image from "../../assets/images/logo.png";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
        .catch(error=>console.error(error))
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        {user && <>
            <li><NavLink to="/addProduct">Add Product</NavLink></li>
        </>}
        <li><NavLink to="/myCart">My Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown lg:hidden">
      <label tabIndex={0} className="btn btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <div className="flex gap-2 items-center">
      <img className="w-[32px] h-[32px]" src={image} alt="" />
      <p className="text-2xl font-medium">Automotive</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {user ? (
      <div className="hidden lg:flex items-center">
        <span className="mr-4">{user.email}</span>
        <a onClick={handleLogOut} className="btn btn-sm">Logout</a>
      </div>
    ) : (
      <Link to="/login">
        <button className="btn btn-sm">Login</button>
      </Link>
    )}
  </div>
</div>

    );
};

export default Navbar;