import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const { loginUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('location in the login page',location);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);

        setLoginError('');

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations!',
                    text: 'Logged in successfully!'
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                setLoginError(error.message);
            })
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }



    return (
        <div>
            <div className=" min-h-screen mt-20 pb-10 lg:py-10 mx-5">
                <div className=" flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg mx-auto shadow-2xl  mt-6 backdrop-blur-3xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-emerald-400 hover:bg-emerald-500">Login</button>
                            </div>
                            <div>
                                {
                                    loginError && <p className="text-red-600 font-semibold">{loginError}</p>
                                }
                            </div>
                            <div>
                                <p>New user? <span><Link className="text-blue-700 font-semibold hover:underline" to='/register'>Register</Link> here</span></p>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGoogleSignIn} className="btn bg-emerald-200 hover:bg-emerald-400 font-semibold  flex items-center"><span className="text-xl"><FcGoogle></FcGoogle></span>Login with Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;