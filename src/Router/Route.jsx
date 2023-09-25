import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Error from "../Pages/ErrorPage/Error";
import CardDetails from "../Pages/CardDetails/CardDetails";

  
 const myCreateRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=> fetch('cards.json')
            },
            {
                path:"/donation",
                element: <Donation></Donation>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/card/:id",
                element:<CardDetails></CardDetails>,
                loader: () => fetch('cards.json')
            }
        ]
    }   
 ])

export default myCreateRoute;