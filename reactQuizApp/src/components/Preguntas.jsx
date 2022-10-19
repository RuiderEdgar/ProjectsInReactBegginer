import React, { useContext } from 'react'
import { QuestionsContext } from '../context/QuestionsContext'

export const Preguntas = () => {
    const { questions } = useContext(QuestionsContext)
    const propiedadesPreguntas = Object.getOwnPropertyNames(questions)
    console.log(questions.preguntas[0])
    return (
        <section className='w-1/2 border-r-2 border-red-800'>
            <article>
                <h2 className='text-2xl font-bold text-gray-50 mb-8'>Question 1 of 4</h2>
            </article>
            <article>
                <h3>{propiedadesPreguntas[0]}</h3>
            </article>
        </section>
    )
}
