import { configureStore } from "@reduxjs/toolkit";
import CartProducts from "./slices/CartProducts";
import users from "./slices/users";

export default configureStore({
    reducer: {
        CartProducts,
        users
    }
})

// ACTION REDUCER STORE