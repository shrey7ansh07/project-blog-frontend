import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from 'react-router-dom'
import { router } from "./components/index"
import { Provider } from 'react-redux'
import {store} from "./store/store.js"
import App from './app'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>    
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)
