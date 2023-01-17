import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";

const  { createBrowserRouter} = require("react-router-dom") ;
const { default: Main } = require("../layouts/Main");
const { default: Home } = require("../pages/home/Home");


const router =createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
          {
            path:'/',
            element: <Home></Home>
          },
          {
            path:'/login',
            element: <Login></Login>
          },
          {
            path:'/signup',
            element: <SignUp></SignUp>
          }
        
        ]
    }
]);

export default router;

