import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Home from "./pages/Home/Home"
import MoreInfo from "./pages/MoreInfo/MoreInfo"
import Success from "./pages/Success/Success"
import Confirmation from "./pages/Confirmation/Confirmation"
import ErrorPage from './pages/Error/Error'
import Layout from "./pages/Layout"
import { ErrorBoundary } from "./pages/ErrorBoundary"
import Terms from "./pages/Terms/Terms"

const RoutesJSX = (
  <Route path='/' element={<Layout />} errorElement={<ErrorBoundary />}>
    <Route index element={<Home />} />
    <Route path="more-info" element={<MoreInfo />} />
    <Route path="confirmation" element={<Confirmation />} />
    <Route path="success" element={<Success />} />
    <Route path="error" element={<ErrorPage />} />
    <Route path="terms" element={<Terms />} />
  </Route>
)

const routes = createRoutesFromElements(RoutesJSX)

const router = createBrowserRouter(routes)

function App() {
  return <RouterProvider router={router} />
}

export default App
