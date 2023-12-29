import { createSlice } from "@reduxjs/toolkit";


const blogSlice = createSlice({
    name: "myblogs",
    initialState: {defaultBlogsUser:[]},
    reducers: 
    {
        loadBlogs: (state,action) => {
            state.defaultBlogsUser = action.payload.blogs
        },
        unloadBlogs: (state,action) => {
            state.defaultBlogsUser = []
        }
    }
})

export const {loadBlogs,unloadBlogs} = blogSlice.actions
export default blogSlice.reducer