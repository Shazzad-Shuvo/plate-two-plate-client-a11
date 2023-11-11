import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const [registerError, setRegisterError] = useState('');

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        const reEnterPassword = form.reEnterPassword.value;
        console.log(name, email, password, reEnterPassword);

        setRegisterError('');

        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters long');
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[@#$%^&*!])/.test(password)) {
            setRegisterError('Password must contain uppercase letter and special character');
            return;
        }

        if (password === reEnterPassword) {
            createUser(email, password)
                .then(result => {
                    console.log(result.user);
                    e.target.reset();
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulations!',
                        text: 'Registered successfully!'
                    })
                    navigate('/');

                    // update username and image:
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: image
                    })
                        .then(() => console.log('Profile Updated'))
                        .catch(error => {
                            console.log(error);
                        })
                })
                .catch(error => {
                    console.error(error);
                    setRegisterError(error.message);
                })
        }
        else {
            setRegisterError('Password did not match');
        }

    }
    return (
        <div className="min-h-screen mt-20 pb-10 lg:py-10 mx-5 ">
            <Helmet>
                <title>Plate-2-Plate | Register</title>
            </Helmet>
            <div className="flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg mx-auto shadow-lg backdrop-blur-3xl mt-6">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name='name' placeholder="username" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name='image' placeholder="profile image" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Re-enter Password</span>
                            </label>
                            <input type="password" name='reEnterPassword' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-emerald-400 hover:bg-emerald-500">Register</button>
                        </div>
                        <div>
                            {
                                registerError && <p className="text-red-600 font-semibold">{registerError}</p>
                            }
                        </div>
                        <div>
                            <p>Have an account? <span><Link className="text-blue-700 font-semibold hover:underline" to='/login'>Login</Link> here</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;