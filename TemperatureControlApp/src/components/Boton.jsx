import React, { useEffect, useState } from 'react'

export const Boton = ({ icon, onHandleAdd, onHandleLess }) => {
    const [icono, setIcono] = useState()
    useEffect(() => {
        setIcono(icon)
    }, [icon])
    return (
        <button className='bg-blue-700 rounded-full w-20 h-20 grid place-content-center border-solid border-2 border-slate-800 shadow-2xl shadow-black hover:bg-blue-800 focus:outline-none' onClick={icono === 'plus' ? onHandleAdd : onHandleLess}>
            <img src={`./src/assets/${icono}.png`} alt="icono" className='w-12 h-12  p-1' />
        </button>
    )
}
