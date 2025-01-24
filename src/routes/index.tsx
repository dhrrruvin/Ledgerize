import React from "react"
import { Navigate, useRoutes } from "react-router-dom"

// data
import { resourcesData } from "../components/Resources/data";
import { coreValuesData, whyLedgerizesData } from "../components/AboutUs/data";
import { servicesData } from "../components/Services/data";

// home page
const HomePage = React.lazy(() => import("../components/HomePage"));

// about us
// const AboutUs = React.lazy(() => import("../components/AboutUs"));

// services
// const Services = React.lazy(() => import("../components/Services"));

// resources
// const Resources = React.lazy(() => import("../components/Resources"));
const EMICalculator = React.lazy(() => import("../components/Resources/EMICalculator"));

// contact us
// const contactUs = React.lazy(() => import("../components/ContactUs"));

const AllRoutes = () => {
     return useRoutes([
          { path: '/', element: <Navigate to='/home' replace /> },
          { path: "/home/resources/EMICalculator", element: <EMICalculator /> },
          { path: "/home/*", element: <HomePage /> },
     ])
}

export default AllRoutes