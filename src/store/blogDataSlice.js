import { createSlice } from "@reduxjs/toolkit"; 

const blogDataSlice = createSlice({
    name: "blogData",
    initialState: {blogData: null},
    reducers: {
        loadBlogData: (state,action) => {
            state.blogData = action.payload.blogdata
        },
        unloadBlogData: (state,action) => {
            state.blogData = null
        }
    }
})

export const {loadBlogData,unloadBlogData} = blogDataSlice.actions
export default blogDataSlice.reducer