import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store} from './store/store.js'; // adjust the path as needed
// import { PersistGate } from 'redux-persist/integration/react';
import App from './app'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>    
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <App/>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
)
