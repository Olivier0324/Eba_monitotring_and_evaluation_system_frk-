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

// App.js
function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="verify-otp" element={<VerifyEmail />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:resetToken" element={<ResetPassword />} />
      <Route path="/user-dashboard" element={<ProtectedRoutes />}>
        <Route element={<UserDashboardLayout />} >
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
