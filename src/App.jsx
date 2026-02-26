import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import UserDashboardLayout from "./pages/user-dashboard/UserDashboardLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Overview from "./pages/user-dashboard/Overview";
import Settings from "./pages/user-dashboard/settings";
import Orders from "./pages/user-dashboard/Orders";
import Profile from "./pages/user-dashboard/Profile";
import Analytics from "./pages/user-dashboard/Analytics";
import Unauthorized from "./pages/Unauthorized";
import PublicLayout from "./components/PublicLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// App.js
function App() {
  return (
    <Routes>
      {/* GROUP 1: Public Pages with Navbar */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      {/* GROUP 2: Auth Pages (Usually no Navbar for a clean look) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="verify-otp" element={<VerifyEmail />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:resetToken" element={<ResetPassword />} />
      {/* GROUP 3: Protected Dashboard (Already has its own Layout) */}
      <Route path="/user-dashboard" element={<ProtectedRoutes />}>
        <Route element={<UserDashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}

export default App;
