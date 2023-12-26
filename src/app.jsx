import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Home, About, Report, Login, Signin } from './components/index.js';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import EditProfile from './components/Dashboard/EditProfile.jsx';
import Editor from './components/Dashboard/Editor.jsx';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from './store/authSlice.js';
import { isLoggedIn } from './services/authServices.js';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await isLoggedIn()
        const newUser = {
          fullname : response.fullname,
          userId : response._id,
          email : response.email,
          username : response.username,
          quote : response.quote,
          bio : response.bio,
          coverimage : response.coverimage,
          links : response.links,
          followers : response.followers,
          following : response.following,
          //* here we will have one 
      }
        dispatch(setAuthenticated({user:newUser}))
      } catch (error) {
        console.error('Failed to check auth', error);
      }
    };

    checkAuth();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="report" element={<Report />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="edit_profile" element={<EditProfile/>}/>
          <Route path="writeBlog" element={<Editor/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;