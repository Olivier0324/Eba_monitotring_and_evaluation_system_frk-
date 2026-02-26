import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { isTokenExpired,isverified} from "../utils/utils";

function ProtectedRoutes() {
  const { token, user } = useSelector((state) => state.auth);

  // 1. Check if logged in
  if (!token || isTokenExpired(token)) {
    return <Navigate to="/login" replace />;
  }

  // 2. Check if verified
  if (!user?.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  // 3. Check if active (The Block Logic)
  if (user?.isActive === false) {
    return <Navigate to="/unauthorized" replace />;
    // Or create a "Banned" page
  }

  return <Outlet />;
}

export default ProtectedRoutes