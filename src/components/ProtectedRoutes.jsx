import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { isTokenExpired,isverified} from "../utils/utils";

function ProtectedRoutes() {
    const {token, user} = useSelector(state => state.auth);
    if (!token || isTokenExpired(token)) {
        return <Navigate to="/login" replace />;
    }
    if (!isverified(user)) {
        return <Navigate to="/verify-email" replace />;
    }
  return (
    <Outlet />
  )
}

export default ProtectedRoutes