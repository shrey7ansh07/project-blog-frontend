import axios from "axios"

const emailChecker = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const isEmail = (userdata) => {
   return emailChecker.test(userdata)
}

const register = async (userData) => 
{
    try
    {
        const response = await axios.post(`/api/v1/users/register`,userData)
        return response
    }
    catch(error)
    {
        throw error.response.data    }
}

const login = async (userData) => 
{
    try {
        const response = await axios.post("/api/v1/users/login",userData)
        return response
    } catch (error) {
        throw error.response.data
    }
}
const logoutUser = async () => {
    try {
        const response = await axios.post("/api/v1/users/logout")
        return response
    } catch (error) {
        throw error.response.data
    }
}
const updateUser = async (data) => {
    try {
        const response = await axios.post("/api/v1/users/update",data)
        return response
    }
    catch {
        throw error.response.data
    }
}

const refreshAccessToken = async() => {
    try {
        const response = await axios.post("/api/v1/users/refreshtoken")
        return response

    } catch (error) {
        throw error
    }
}

const changePassword = async(data) => {
    try {
        const response = await axios.post("/api/v1/users/changepassword",data)
        return response
    } catch (error) {
        throw error.response.data
    }
}

const isLoggedIn = async () => {
  try {
      const response = await axios.post("api/v1/users/checkauth")
      return response.data.data.user
  }
  catch(error) {
        throw error.response.data
  }
}

const uploadImage = async (data) => {
    try {
        console.log(data);
        const response = await axios.post("api/v1/users/uploadimage",data, {headers: {"Content-Type": 'multipart/form-data'}})
        return response.data.data.user
    } catch (error) {
        throw error.response.data
    }
}

  

//* using the interceptor function that helps to manage request before they are middlewares
const api = axios.create({baseURL: "/api/v1"})
api.interceptors.response.use(
    response => response,
    async error => {
        console.log("here the error is ", error.response)
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._retry) {
        
            try {
                originalRequest._retry = true
                await refreshAccessToken()
                return api(originalRequest)
                }
            catch (error) 
            {
                if(error.response.status === 402)
                {
                    try {
                        await logoutUser()
                        //* reacher here implies successfull logout
                        dispatch(setunAuthenticated())
                        navigate("/Login")
                      
                      } catch (error) {
                        throw error
                      }
                }
                
            }
          }

        else {
            throw error
        }
        }
    
)
export {register,login,isEmail,logoutUser,updateUser,changePassword,isLoggedIn,uploadImage}
