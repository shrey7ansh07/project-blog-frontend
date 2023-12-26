import {configureStore} from "@reduxjs/toolkit"
import authAnduserReducer from "./authSlice.js"
export const store = configureStore({
    reducer: {
        authAnduser: authAnduserReducer
    }
})

// import { configureStore } from '@reduxjs/toolkit';
// import { persistReducer, persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER, } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';
// import authAnduserReducer from './authSlice.js';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedAuthReducer = persistReducer(persistConfig, authAnduserReducer);

// export const store = configureStore({
//   reducer: {
//     authAnduser: persistedAuthReducer,
//     // middleware: getDefaultMiddleware =>
//     // getDefaultMiddleware({
//     //   serializableCheck: false,
//     // })
// }});

// export const persistor = persistStore(store);