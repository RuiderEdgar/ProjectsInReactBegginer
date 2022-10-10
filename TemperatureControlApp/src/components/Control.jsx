import React, { useState } from 'react'
import "../css/control.css";
import { Pantalla } from './Pantalla';
import { Boton } from './Boton';

export const Control = () => {
    const [temperature, setTemperature] = useState(24)
    const onHandleAdd = () => {
        setTemperature((temperature + 1))
    }
    const onHandleLess = () => {
        setTemperature((temperature - 1))
    }
    return (
        <section className='bg-rose-600 control rounded-lg shadow-2xl shadow-rose-400 drop-shadow-lg flex flex-col'>
            <section className='w-full flex justify-center'>
                <Pantalla temperature={temperature} />
            </section>
            <section className='w-full h-full grid grid-cols-2 place-content-around justify-items-center'>
                <Boton icon="plus" onHandleAdd={onHandleAdd} />
                <Boton icon="minus" onHandleLess={onHandleLess} />
            </section>
        </section>
    )
}
