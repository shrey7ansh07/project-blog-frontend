import axios from "axios";


const postBlog = async (data) => {
    try {
        const response = await axios.post("/api/v1/blogs/addblog", data)
        console.log(response)
    } catch (error) {
        throw error.response.data
    }
}

const getBlogs = async (userId) => {
    try {
        const response = await axios.get(`/api/v1/blogs/getblogs/${userId}`)
        return response.data.data.blogs
    }
    catch
    {
        return error.response.data
    }
}

const editBlogs = async (userId, data) => {
    try {
        const response = await axios.patch(`/api/v1/blogs/editblog/${userId}`, data)
        return response.data.data.blogs
    }
    catch
    {
        return error.response.data
    }
}

const deleteBlog = async (blogId) => {
    try {
        const response = await axios.post(`/api/v1/blogs/deleteblog/${blogId}`)
        return response.data.data.blogs
    } catch (error) {
        throw error.response.data
    }
}

const updatestatus = async (blogId) => {
    try {
        const response = await axios.patch(`/api/v1/blogs/updatestatus/${blogId}`)
        return response.data.data
    } catch (error) {
        return error.response.data
    }
}

const getPopular = async () => {
    try {
        const response = await axios.get('/api/v1/blogs/getpopular')
        return response.data.data.aggregateBlogs
    } catch (error) {
        throw error.response.data
    }
}
export {
    postBlog,
    getBlogs,
    editBlogs,
    deleteBlog,
    updatestatus,
    getPopular
}