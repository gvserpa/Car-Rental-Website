// src/routes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import PaymentPage from "../pages/payment/PaymentPage.jsx";
import AboutUs from "../pages/Aboutus/AboutUs.jsx";
import CarsPage from "../pages/cars/CarsPage.jsx"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/cars" element={<CarsPage />} />
    </Routes>
  );
}


export default AppRoutes;