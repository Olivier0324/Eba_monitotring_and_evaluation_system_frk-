// auth reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user")),
    tempEmail: null, // to store email temporarily for OTP verification
}

const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));

        }
        // adding logout reducer
        ,
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.tempEmail = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
        setTempEmail: (state, action) => {
            state.tempEmail = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
    }
})
export const { login, logout, setTempEmail, setUser } = authReducer.actions;
export default authReducer.reducer;