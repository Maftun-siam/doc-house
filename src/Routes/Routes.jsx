import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home"
import DoctorsProfile from "../Pages/DoctorsProfile/DoctorsProfile";
import SignUp from "../Pages/DoctorsProfile/Signup/SignUp";



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
        ]
    },
]);


