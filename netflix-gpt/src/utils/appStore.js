import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"; // Assuming userSlice exports the userReducer

const appStore = configureStore({
    reducer: {
        user: userReducer,  // Adding user reducer to the store
    },
});

export default appStore;
