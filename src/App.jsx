import { createBrowserRouter } from "react-router-dom";
import { Error, Features, Landing, Login, Pricing, Register } from "./pages";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>,
    errorElement: <Error/>
  },
  {
    path: '/features',
    element: <Features/>,
    errorElement: <Error/>
  },
  {
    path: '/pricing',
    element: <Pricing/>,
    errorElement: <Error/>
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <Error/>
  },
  {
    path: '/register',
    element: <Register/>,
    errorElement: <Error/>
  }
])

export default router;
