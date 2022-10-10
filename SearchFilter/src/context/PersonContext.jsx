/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { createContext, useEffect, useState } from 'react'

export const PersonContext = createContext()

export const PersonContextProvider = (props) => {
    const [data, setData] = useState(null)
    const [filter, setFilter] = useState([])

    const getData = (gettingData) => {
        setData(gettingData)
    }

    return (
        <PersonContext.Provider value={{
            getData,
            data,
            setData,
            filter,
            setFilter
        }}>
            {props.children}
        </PersonContext.Provider>
    )
}
