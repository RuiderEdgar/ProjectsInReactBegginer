import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import classes from './loginButton.module.css'

export const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0()
    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()} className={classes.botonLogin}>
                Log In
            </button>
        )
    )
}
