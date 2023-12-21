import {configureStore} from "@reduxjs/toolkit"
import authAnduserReducer from "./authSlice.js"
export const store = configureStore({
    reducer: {
        authAnduser: authAnduserReducer
    }
})
