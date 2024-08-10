import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
const Navbar = () => {
    return (
        <div className='flex z-20 max-w-screen-[1127px] mx-auto justify-between pt-8  items-center'style={{ maxWidth: '1127px' }}>
            <div>
                <Link><img src={logo} className='w-[233px] h-[61px]' alt="" /></Link>
            </div>
            <div className='justify-center items-center'>
                <ul className='flex flex-row gap-6 justify-center items-center'>
                    <NavLink> <li>Home</li></NavLink>
                    <NavLink> <li>About</li></NavLink>
                    <NavLink> <li>Appoinment</li></NavLink>
                    <NavLink> <li>Login</li></NavLink>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;