import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import MyToy from "../Pages/MyToy/MyToy";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/AddToy/AddToy";
import ErrorPage from "../Pages/ErrorPage";
import AllToy from "../Pages/AllToy/AllToy";
import SingleToyDetails from "../Pages/SingleToyDetails/SingleToyDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
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
                    element:<AllToy></AllToy>
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
                    element:<PrivateRoute><MyToy></MyToy></PrivateRoute>
                },
                {
                    path:'allToys/:id',
                    element:<PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
                    // loader:({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
                }
                
            ]
        }
])
export default router;