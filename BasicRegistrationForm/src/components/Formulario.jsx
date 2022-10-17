import React, { useEffect, useState } from 'react'
import { Input } from './Input'

export const Formulario = () => {
    const [datos, setDatos] = useState([])
    const [auxDatos, setAuxDatos] = useState({})
    const [banderaDatos, setBanderaDatos] = useState(false)
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [visibility, setVisibility] = useState(false)
    const onHandleRegister = () => {
        const objectInformation = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        for (const [key, value] of Object.entries(objectInformation)) {
            if (value == '' || value == null) {
                Object.defineProperty(objectInformation, key, { value: false })
                setBanderaDatos(false)
                setAuxDatos(objectInformation)
            } else {
                setBanderaDatos(true)
                setAuxDatos(objectInformation)
            }
        }
        const array = Object.values(objectInformation)
        if (array.includes(false)) {
            setBanderaDatos(false)
        } else {
            setBanderaDatos(true)
        }
        if (banderaDatos) {
            setDatos(objectInformation)
            setVisibility(true)
        }

    }
    const getFirtsName = (firstName) => {
        setFirstName(firstName)
    }
    const getLastName = (lastName) => {
        setLastName(lastName)
    }
    const getEmail = (email) => {
        setEmail(email)
    }
    return (
        <React.Fragment>
            {/*formulario*/}
            <section className={visibility ? 'invisible h-0 w-0' : 'visible m-auto bg-slate-300 h-fit w-80 rounded-md flex flex-col'}>
                <h1 className='text-center mt-4 font-bold text-2xl'>Sing up</h1>
                <form action="" className='flex flex-col'>
                    <Input type='text' name='firstname' placeHolder='E.g. Edgar' label='First Name' onHandleRegister={getFirtsName} requerido={auxDatos.firstName} />
                    <Input type='text' name='lastname' placeHolder='E.g. Rivera' label='Last Name' onHandleRegister={getLastName} requerido={auxDatos.lastName} />
                    <Input type='email' name='email' placeHolder='your.email@example.com' label='Email' onHandleRegister={getEmail} requerido={auxDatos.email} />
                    <button className='mt-6 bg-sky-800 mx-auto px-24 py-2 rounded-md font-bold text-neutral-50 mb-4' onClick={(e) => {
                        e.preventDefault()
                        onHandleRegister()
                    }}>Register</button>
                </form>
            </section >

            {/*mostrar datos*/}
            <section className={visibility ? 'visible m-auto bg-slate-300 h-96 w-80 rounded-md flex flex-col pl-2 pt-2' : 'invisible'}>
                <h2 className='font-bold'>First name</h2>
                <p>{datos.firstName}</p>
                <h2 className='font-bold'>Last name</h2>
                <p>{datos.lastName}</p>
                <h2 className='font-bold'>Email</h2>
                <p>{datos.email}</p>
            </section >
        </React.Fragment>
    )
}
