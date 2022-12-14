import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "../Pages/Login/login";
import Registration from "../Pages/Registartion/registration";
import Products from "../Pages/Products/products";
import Header from "../Components/header";
import Profile from "../Pages/Profile/profile";
import Cart from "../Pages/Cart/cart";

const Router = () => {
    return (
        <BrowserRouter basename="/shoppingCart">
              <Header />
            <Routes>              
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
