/* eslint-disable no-undef */
import React from 'react'

export const Preguntas = ({ preguntas, numberQuestion, className, numberQuestions }) => {

    return (
        <section className={'w-1/2 border-r-2 border-red-800 ' + className}>
            <article>
                <h2 className='text-2xl font-bold text-gray-50 mb-8'>Question {numberQuestion + 1} of 4</h2>
            </article>
            <article>
                <h3>{preguntas[numberQuestion]}</h3>
            </article>
        </section>
    )
}
