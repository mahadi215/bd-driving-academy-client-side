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
                loader:({params}) => fetch(`http://localhost:5000/categorie/${params.id}`),
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
                loader: ({params}) => fetch(`http://localhost:5000/s-cources/${params.id}`)
                
            }
        ]
    }
])