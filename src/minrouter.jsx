import React, { Suspense } from "react";
import { Router, createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Header from './CommanComponent/Header';
import Contact from './Contact';
import About from './About';


const MinRouter = createBrowserRouter([
    {
        path:"/",
        element:<><Header /><Home/></>
    },
    {
        path:"/contact",
        element:<><Header /><Contact/></>
    },
    {
        path:"/abou",
        element:<><Header /><About /></>

    }
])

export default MinRouter;