import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/MainPage";
import Component from "./components/id";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pizza" element={<Component />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default App;
