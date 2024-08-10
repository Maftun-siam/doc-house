import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { router } from "./Routes/Routes.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=' bg-[#07332F] mx-auto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)


export default router;