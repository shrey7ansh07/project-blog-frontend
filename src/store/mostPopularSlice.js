import { createSlice } from "@reduxjs/toolkit"

const mostPopularSlice = createSlice({
    name: "mostPopular",
    initialState: { popularblogs: null },
    reducers: {
        loadPopularBlogs: (state, action) => {
            state.popularblogs = action.payload.popularblogs
        },
        unloadPopularBlogs: (state, action) => {
            state.popularblogs = null
        }
    }
})

export const { loadPopularBlogs, unloadPopularBlogs } = mostPopularSlice.actions
export default mostPopularSlice.reducer


