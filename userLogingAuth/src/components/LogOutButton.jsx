import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import classes from './logOut.module.css'

export const LogOutButton = () => {
    const { logout, isAuthenticated } = useAuth0()
    return (
        isAuthenticated && (
            <button onClick={() => logout()} className={classes.botonLogOut}>
                Log Out
            </button>
        )
    )
}
