// configuring redux store
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authReducer.js";
import { api } from "../services/api/api.js";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})


