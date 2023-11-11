import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logged out successfully');
            })
            .catch(error => {
                console.error(error);
            })
    };

    const navLinks = <>
        <li className="mr-3"><Link to='/' className="bg-cyan-400 hover:bg-cyan-500 text-white">Home</Link></li>
        <li className="mr-3"><Link to='/availableFood' className="bg-cyan-400 hover:bg-cyan-500 text-white">Available Food</Link></li>
        <li className="mr-3"><Link to='/addFood' className="bg-cyan-400 hover:bg-cyan-500 text-white">Add Food</Link></li>
        <li className="mr-3"><Link to='/manage' className="bg-cyan-400 hover:bg-cyan-500 text-white">Manage My Food</Link></li>
        <li><Link to='/requests' className="bg-cyan-400 hover:bg-cyan-500 text-white">My Food Request</Link></li>
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
                <img className="w-40" src={'https://i.ibb.co/DgLTVGf/rsz-1plate-2-plate-removebg-preview.png'} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="flex flex-col md:flex-row items-center">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
                                    <div className="w-8 md:w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <p className="text-sm md:text-base mr-4 dark:text-slate-200">{user.displayName}</p>
                            </div>
                            <button onClick={handleLogOut} className="btn bg-emerald-400 hover:bg-emerald-500 ">Log Out</button>
                        </> :
                        <Link to='/login'>
                            <button className="btn bg-emerald-400 hover:bg-emerald-500 ">Register/Login</button>
                        </Link>
                }

            </div>

        </div>
    );
};

export default Navbar;