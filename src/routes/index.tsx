import React from "react"
import { Navigate, useRoutes } from "react-router-dom"

// home page
const HomePage = React.lazy(() => import("../components/HomePage"));

// resources
const EMICalculator = React.lazy(() => import("../components/Resources/EMICalculator"));

const AllRoutes = () => {
     return useRoutes([
          { path: '/', element: <Navigate to='/home' replace /> },
          { path: "/home/resources/EMICalculator", element: <EMICalculator /> },
          { path: "/home/*", element: <HomePage /> },
     ])
}

export default AllRoutes