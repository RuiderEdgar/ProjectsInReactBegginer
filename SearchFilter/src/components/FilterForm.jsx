/* eslint-disable no-undef */
import React, { useContext } from 'react'
import { PersonContext } from '../context/PersonContext'

export const FilterForm = () => {
    //Todo necesitamos de data y setData para el filtrado
    const { data, setFilter } = useContext(PersonContext)

    const filtrar = (word) => {
        let arrayFiltrado
        if (word !== '') {
            arrayFiltrado = data.map(person => {
                if (person.name.toLowerCase().includes(word.toLowerCase())) {
                    return person
                }
            });
            setFilter(arrayFiltrado)
        } else {
            setFilter(null)
        }
    }
    return (
        <form action="" className='bg-slate-800 flex'>
            <label htmlFor="search" className='mx-auto'>
                <span className='font-bold text-gray-50 mr-4'>Buscar</span>
                <input type="text" name='search' className='my-2 rounded-md focus:outline-orange-400 outline-none' onChange={(e) => {
                    filtrar(e.target.value)
                }} />
            </label>
        </form>
    )
}
