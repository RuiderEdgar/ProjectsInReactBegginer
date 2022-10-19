/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QuestionsContextProvider } from './context/QuestionsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuestionsContextProvider>
      <App />
    </QuestionsContextProvider>
  </React.StrictMode>
)
