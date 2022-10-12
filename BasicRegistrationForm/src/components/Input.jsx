import React from 'react'
import PropTypes from 'prop-types';


export const Input = ({ type, name, placeHolder, label }) => {
    return (
        <label htmlFor={name} className='mx-auto mt-4 flex flex-col'>
            <span className='mb-1'>{label}</span>
            <input type={type} name={name} id={name} placeholder={placeHolder} className='outline-none rounded-md pl-2 h-10' />
        </label>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}