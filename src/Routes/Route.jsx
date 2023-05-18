import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import MyToy from "../Pages/MyToy/MyToy";
import AllToys from "../Pages/AllToys/AllToys";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/AddToy/AddToy";


const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'login',
                    element:<Login></Login>
                },
                {
                    path:'signUp',
                    element:<SignUp></SignUp>
                },
                {
                    path:'allToys',
                    element:<AllToys></AllToys>
                },
                {
                    path:'blog',
                    element:<Blog></Blog>
                },
                {
                    path:'addToy',
                    element:<AddToy></AddToy>
                },
                {
                    path:'myToy',
                    element:<MyToy></MyToy>
                }
                
            ]
        }
])
export default router;