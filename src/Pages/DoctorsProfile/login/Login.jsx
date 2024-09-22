import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import doctor from '../../../assets/womanPluss.png'
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {

    const { SignInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        SignInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch()
    }
    return (
        <div className="flex min-h-screen">
            {/* Left Side */}
            <div className="flex-1 flex items-center justify-center bg-teal-900 p-10">
                <div className="text-center">
                    {/* Replace these with your images */}
                    <img src={doctor} alt="Doctor" className="mx-auto h-[700px] w-[600px]" />

                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex items-center justify-center bg-white p-10">
                <div className="w-full max-w-md bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-black mb-6 text-center">Sign In to Doc House</h2>
                    <form onSubmit={handleLogin} className="space-y-4">


                        <div>
                            <label className="block text-black mb-1 text-left">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name='email'
                                className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label className="block text-black mb-1 text-left">Password</label>
                            <input
                                type="password"
                                name='password'
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-orange-400 text-white text-black rounded-md hover:bg-orange-500 transition duration-300"
                        >
                            Log In
                        </button>
                    </form>
                    <p className="text-center mt-4 text-black">
                        Dont have any account? Go to <a href="/signup" className="text-orange-400">SIGN UP</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;