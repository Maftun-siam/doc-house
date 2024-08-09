import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
const Navbar = () => {
    return (
        <div>
            <div>
                <Link><img src={logo} alt="" /></Link>
            </div>
            <div>
                <ul>
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