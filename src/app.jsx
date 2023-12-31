import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Layout,
  Home,
  About,
  Report,
  Login,
  Signin,
  DisplayBlog,
  Privacy
} from './components/index.js';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import EditProfile from './components/EditProfile/EditProfile.jsx';
import Editor from './components/Editor/Editor.jsx';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from './store/authSlice.js';
import { isLoggedIn } from './services/authServices.js';
import { getBlogs } from './services/blogServices.js';
import { loadBlogs } from './store/blogSlice.js';
import DisplayBlogPopular from './components/DisplayBlog/CardComponents/DisplayBlogPopular.jsx';
import LoadingComp from './components/partialcomponent/LoadingComp.jsx';

function App() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const checkAuth = async () => {
      try {
        const response = await isLoggedIn()
        const newUser = {
          fullname: response.fullname,
          userId: response._id,
          email: response.email,
          username: response.username,
          quote: response.quote,
          bio: response.bio,
          coverimage: response.coverimage,
          links: response.links,
          followers: response.followers || 0,
          following: response.following || 0,
          //* here we will have one 
        }
        dispatch(setAuthenticated({ user: newUser }))
        const userBlogs = await getBlogs(newUser.userId)
        dispatch(loadBlogs({ blogs: userBlogs }))
        setIsLoading(false)

      } catch (error) {
        setIsLoading(false)
        console.log("error while authenticating");
      }

    };

    checkAuth();
  }, []);
  if (isLoading) {
    return (<LoadingComp />)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="report" element={<Report />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="edit_profile" element={<EditProfile />} />
          <Route path="writeBlog" element={<Editor />} />
          <Route path="readblog" element={<DisplayBlog />} />
          <Route path="blog" element={<DisplayBlogPopular />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;