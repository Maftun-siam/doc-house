/* eslint-disable no-unused-vars */
import React from 'react';
import doctor from "../../../assets/womanPluss.png"
import plus from "../../../assets/plusplus.png"
const SignUp = () => {
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
                    <h2 className="text-2xl font-bold text-black mb-6 text-center">Sign Up to Doc House</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-black mb-1 text-left">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label className="block text-black mb-1 text-left">Username</label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label className="block text-black mb-1 text-left">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label className="block text-black mb-1 text-left">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition duration-300"
                        >
                            Create Account
                        </button>
                    </form>
                    <p className="text-center mt-4 text-black">
                        Already registered? Go to <a href="/signin" className="text-orange-400">SIGN IN</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;