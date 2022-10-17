import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { AiFillWarning } from "react-icons/ai";

export const Input = ({ type, name, placeHolder, label, onHandleRegister, requerido }) => {
    const [input, setInput] = useState(null)
    useEffect(() => {
        onHandleRegister(input)
    }, [input])

    return (
        <label htmlFor={name} className='mx-auto mt-4 flex flex-col'>
            <span className='mb-1'>{label}</span>
            <input type={type} name={name} id={name} placeholder={placeHolder} className={requerido == false ? 'outline-none rounded-md pl-2 h-10 border-red-500 border-2' : 'outline-none rounded-md pl-2 h-10 '} onChange={(e) => setInput(e.target.value)} />
            {requerido == false ? <p className='text-sm text-red-500 flex ml-1 m-auto items-center'><AiFillWarning className='mr-1' />Llena los campos</p> : ''}
        </label>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onHandleRegister: PropTypes.func.isRequired
}