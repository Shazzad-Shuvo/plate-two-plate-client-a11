import { Link } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <li className="mr-3"><Link to='/' className="bg-red-400 text-white">Home</Link></li>
        <li className="mr-3"><Link to='/' className="bg-red-400 text-white">Available Food</Link></li>
        <li className="mr-3"><Link to='/' className="bg-red-400 text-white">Add Food</Link></li>
        <li className="mr-3"><Link to='/' className="bg-red-400 text-white">Manage My Food</Link></li>
        <li><Link to='/' className="bg-red-400 text-white">My Food Request</Link></li>
    </>

    return (
        <div className="navbar bg-gray-200">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Plate2Plate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Register/Login</a> */}
                <Link to='/register'>
                    <button className="btn">Register/Login</button>
                </Link>
            </div>

        </div>
    );
};

export default Navbar;