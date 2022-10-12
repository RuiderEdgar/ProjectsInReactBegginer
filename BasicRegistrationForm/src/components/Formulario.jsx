import React from 'react'
import { Input } from './Input'

export const Formulario = () => {
    return (
        <section className='m-auto bg-slate-300 h-96 w-80 rounded-md flex flex-col'>
            <h1 className='text-center mt-4 font-bold text-2xl'>Sing up</h1>
            <form action="" className='flex flex-col'>
                <Input type='text' name='name' placeHolder='E.g. Edgar' label='First Name' />
                <Input type='text' name='lastname' placeHolder='E.g. Rivera' label='Last Name' />
                <Input type='email' name='email' placeHolder='your.email@example.com' label='Email' />
                <button className='mt-6 bg-sky-800 mx-auto px-24 py-2 rounded-md font-bold text-neutral-50'>Register</button>
            </form>
        </section>
    )
}
