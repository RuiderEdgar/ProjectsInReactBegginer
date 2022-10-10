/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react'
import { PersonContext } from '../context/PersonContext'

export const Show = () => {
    // const { isLoading, data } = useContext(PersonContext)
    const [isLoading, setIsLoading] = useState(true)
    // const [data, setData] = useState(null)
    const { getData, data, filter } = useContext(PersonContext)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                getData(json)
                setIsLoading(false)
            })
            .catch(() => console.log('Algo salio mal en el fetch'))
    }, [])

    if (isLoading) {
        return (
            <section>
                <h1>Loading ...</h1>
            </section>
        )
    } else {
        if (filter == undefined || filter == null) {
            return (
                <section className='grid grid-cols-2 py-4 bg-orange-400 gap-x-4 gap-y-2'>
                    {data.map((person, i) => {
                        if (person !== undefined) {
                            return (
                                <p key={i} className='text-center text-gray-50 border-solid border-2 border-black' >
                                    {person.name}
                                </p>
                            )
                        }
                    })}
                </section>
            )
        } else {
            return (
                <section className='grid grid-cols-2 py-4 bg-orange-400 gap-x-4 gap-y-2'>
                    {filter.map((person, i) => {
                        if (person !== undefined) {
                            return (
                                <p key={i} className='text-center text-gray-50 border-solid border-2 border-black' >
                                    {person.name}
                                </p>
                            )
                        }
                    })}
                </section>
            )
        }

    }

}
