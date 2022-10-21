/* eslint-disable no-undef */
import React from 'react'

export const Preguntas = ({ preguntas }) => {

    return (
        <section className='w-1/2 border-r-2 border-red-800'>
            <article>
                <h2 className='text-2xl font-bold text-gray-50 mb-8'>Question 1 of 4</h2>
            </article>
            <article>
                <h3>{preguntas[0]}</h3>
            </article>
        </section>
    )
}
