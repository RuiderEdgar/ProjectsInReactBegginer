import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PersonContextProvider } from './context/PersonContext'
import './index.css'


// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById('root')).render(

  // <PersonContextProvider>
  //   < App />
  // </PersonContextProvider>
  <React.StrictMode>
    <PersonContextProvider>
      <App />
    </PersonContextProvider>
  </React.StrictMode>

)
