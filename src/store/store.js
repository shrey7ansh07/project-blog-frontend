import {configureStore} from "@reduxjs/toolkit"
import {persistReducer,persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"
import authAnduserReducer from "./authSlice.js"
import blogReducer from "./blogSlice.js"
import blogDataReducer from "./blogDataSlice.js"
import viewBlogReducer from "./viewBlogSlice.js"

const persistConfig = {
    key: 'blogData',
    storage
}

const viewBlogPersistConfig = {
    key: 'viewBlog',
    storage
}

const persistedblogDataReducer = persistReducer(persistConfig,blogDataReducer)
const persistedViewBlogReducer = persistReducer(viewBlogPersistConfig,viewBlogReducer)

export const store = configureStore({
    reducer: {
        authAnduser: authAnduserReducer,
        myblogs: blogReducer,
        blogData: persistedblogDataReducer,
        viewBlog: persistedViewBlogReducer

    }
})

export const persistor = persistStore(store)

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