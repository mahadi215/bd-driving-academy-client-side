import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Cources from "../pages/courses/Cources"
import Paq from "../pages/paq/Paq";
import Blog from "../pages/blog/Blog";
import Login from "../login/login/Login";
import Register from "../login/register/Register";
import CourseDetails from "../courseDetails/CourseDetails";
import PrivateRout from "../PrivateRoute/PrivateRout";
import Booking from "../booking/Booking";
import FourOFour from "../pages/FourO4/FourOFour";



export const routus = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/cources/:id',
                loader:({params}) => fetch(`https://educational-app-server.vercel.app/categorie/${params.id}`),
                element:<Cources></Cources>
            },
            {
                path:'/paq',
                element:<Paq></Paq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
        
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '/courseDetails/:id',
                element:<PrivateRout><CourseDetails></CourseDetails></PrivateRout>,
                loader: ({params}) => fetch(`https://educational-app-server.vercel.app/s-cources/${params.id}`)
                
            },
            {
                path: '/booking/:id',
                element: <Booking></Booking>,
                loader: ({params}) => fetch(`https://educational-app-server.vercel.app/s-cources/${params.id}`)
            },
            {
                path:'*',
                element:<FourOFour></FourOFour>
            }
        ]
    }
])