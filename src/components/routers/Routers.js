import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Cources from "../pages/courses/Cources"
import Paq from "../pages/paq/Paq";
import Blog from "../pages/blog/Blog";
import Login from "../login/login/Login";



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
                path:'/cources',
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
        ]
    }
])