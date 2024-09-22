import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'; // Import useLocation
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../providers/AuthProvider'; // Importing AuthContext to access authentication state
import useAppointment from '../../../Components/hooks/useAppointment';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext); // Destructuring user and logOut from AuthContext
    const location = useLocation(); // Get the current route
    const [myappointment] = useAppointment()
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('User logged out');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className='flex z-20 max-w-screen-[1127px] mx-auto justify-between pt-8 items-center' style={{ maxWidth: '1127px' }}>
            <div>
                <Link to='/'>
                    <img src={logo} className='w-[233px] h-[61px]' alt="Logo" />
                </Link>
            </div>
            <div className='justify-center items-center'>
                <ul className='flex flex-row gap-6 justify-center items-center'>
                    <NavLink to='/'> <li>Home</li></NavLink>
                    <NavLink to='/doc'> <li>Doc</li></NavLink>
                    <NavLink to='/about'> <li>About</li></NavLink>

                    {/* Conditionally render "Appointment" or "My Appointment" based on the route and user login status */}
                    {user && location.pathname === '/appointment' ? (
                        <NavLink to='/myappointment'>
                            <li className='badge badge-secondary'>My Appointment{myappointment.length}</li> {/* Created "My Appointment" link */}
                        </NavLink>
                    ) : (
                        <NavLink to='/appointment'>
                            <li>Appointment</li> {/* Keep "Appointment" when not on the appointment page */}
                        </NavLink>
                    )}

                    {/* Conditionally render the "Secret" link only if the user is logged in */}
                    {user && (
                        <NavLink to='/secret'> <li>Secret</li></NavLink>
                    )}


                    {/* Conditional rendering for Login/Logout */}
                    {user ? (
                        <>
                            <span>{user.email}</span> {/* Display user email if logged in */}
                            <button onClick={handleLogout} className='ml-4'>Logout</button>
                        </>
                    ) : (
                        <NavLink to='/login'> <li>Login</li></NavLink>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
