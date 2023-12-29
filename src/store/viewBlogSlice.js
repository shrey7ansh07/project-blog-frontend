import {createSlice} from "@reduxjs/toolkit"

const viewBlogSlice = createSlice({
    name: "viewBlog",
    initialState: {blogRead: null},
    reducers: {
        loadBlogRead : (state,action) => {
            state.blogRead = action.payload.blog
        },
        unloadBlogRead : (state,action) => {
            state.blogRead = null
        }
    }

})

export const {loadBlogRead,unloadBlogRead} = viewBlogSlice.actions

export default viewBlogSlice.reducer