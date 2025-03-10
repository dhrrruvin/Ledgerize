import React from "react"
import { Navigate, useRoutes } from "react-router-dom"

// home page
const HomePage = React.lazy(() => import("../components/HomePage"));

// resources
const EMICalculator = React.lazy(() => import("../components/Resources/EMICalculator"));

const AllRoutes = () => {
     return useRoutes([
          { path: "/home/resources/EMICalculator", element: <EMICalculator /> },
          { path: "/home", element: <HomePage /> },
          { path: "/home/*", element: <HomePage /> },
          { path: '/', element: <Navigate to='/home' replace /> },
     ])
}

export default AllRoutes