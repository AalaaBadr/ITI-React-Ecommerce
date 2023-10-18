import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// import ProductsList from '../Pages/ProductsList'
// import ProductDetails from '../Pages/ProductDetails'
// import Register from '../Pages/Register'
// import LogIn from '../Pages/LogIn'
// import Cart from '../Pages/Cart'
// import NotFound from '../Pages/NotFound'

const ProductsList = React.lazy(() => import('../Pages/ProductsList'));
const ProductDetails = React.lazy(() => import('../Pages/ProductDetails'));
const Register = React.lazy(() => import('../Pages/Register'));
const LogIn = React.lazy(() => import('../Pages/LogIn'));
const Cart = React.lazy(() => import('../Pages/Cart'));
const NotFound = React.lazy(() => import('../Pages/NotFound'));

export default function Router() {
    return (
        <Suspense fallback={<h3>Loading...</h3>}>
            <Routes>
                <Route path="/" element={<ProductsList />} />
                <Route path="/Product-details/:id" element={<ProductDetails />} />
                <Route path="/register" element={<Register />} />
                <Route path="/log-in" element={<LogIn />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}