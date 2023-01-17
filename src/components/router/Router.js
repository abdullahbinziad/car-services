import CheckOut from "../pages/checkOut/CheckOut";
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
          },
          {
            
            path:'/checkout/:id',
            element: <CheckOut></CheckOut>,
            loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`) ,
          },
        
        ]
    }
]);

export default router;

