import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (token) => {
    if (!token) return true;
    if (token === "undefined") return true;
    if (token === "null") return true;
    if (token) {
        {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            return decoded.exp < currentTime;
        }
    }
}
// Function to check if user has a specific role
export const hasRole = (user, role) => {
    if (!user || !user.role || !user.role.name) return false;
    return user.role === role|| user.role.name === role;
}
//function to check if user is verified
export const isverified = (user) => {
    if (!user || !user.isVerified) return false;
    return user.isVerified;
}