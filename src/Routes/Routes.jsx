import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home"
import DoctorsProfile from "../Pages/DoctorsProfile/DoctorsProfile";
import SignUp from "../Pages/DoctorsProfile/Signup/SignUp";
import Login from "../Pages/DoctorsProfile/login/Login";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Appointment from "../Pages/Appointment/Appointment";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/doc',
                element: <DoctorsProfile></DoctorsProfile>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
        ]
    },
]);


66-8