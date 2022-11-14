import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = import.meta.env.USER_LOGIN_AUTH_DOMAIN
const clientId = import.meta.env.USER_LOGIN_AUTH_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-b1rlwmc7rorpmntv.us.auth0.com"
    clientId="79DOhFL3l0liU8rZy3akozs7TSBCCIYk"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
)
