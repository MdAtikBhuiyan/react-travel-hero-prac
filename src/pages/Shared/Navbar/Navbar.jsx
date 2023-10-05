import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo-2.png"
import { FaSearch } from "react-icons/fa";


const Navbar = () => {

    const navLinks = <>
        <li>
            <NavLink to='/'> News </NavLink>
        </li>
        <li>
            <NavLink to='/destination'> Destination </NavLink>
        </li>
        <li>
            <NavLink to='/blog'> Blog </NavLink>
        </li>
        <li>
            <NavLink to='/contact'> Contact </NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-transparent justify-between text-white text-lg">
            <div className="w-full lg:w-auto flex justify-between items-center">
                <div className="dropdown order-2">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="flex flex-col gap-4 dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 right-0 text-black">
                        {
                            navLinks
                        }

                        <div className="relative mt-2">
                            <input type="text" placeholder="Search here" className="input input-bordered w-full pl-8 bg-[#ffffff77] placeholder:text-black text-black" />
                            <FaSearch className="absolute inset-y-4 left-2 text-black " />
                        </div>
                    </ul>
                </div>
                <Link className="order-1" to='/'>
                    <img className="w-40" src={logo} alt="" />
                </Link>
            </div>
            <div className="hidden lg:flex lg:items-center lg:gap-4">
                <div className="relative">
                    <input type="text" placeholder="Search here" className="input input-bordered w-full pl-8 bg-[#ffffff77] placeholder:text-white" />
                    <FaSearch className="absolute inset-y-4 left-2 text-white " />
                </div>
                <ul className="inline-flex gap-6 items-center px-1">
                    {
                        navLinks
                    }
                    <button className="btn btn-warning">Login</button>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;