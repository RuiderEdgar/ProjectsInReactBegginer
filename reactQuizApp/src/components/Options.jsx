import React, { useContext } from 'react'
import { Buton } from './Buton'
import { QuestionsContext } from '../context/QuestionsContext'

export const Options = () => {
    const { questions } = useContext(QuestionsContext)
    let arrayOpciones = []

    arrayOpciones = questions.preguntas && questions.preguntas[0] && Object.keys(questions.preguntas[0]['¿cuantos años tengo?'])

    // arrayOpciones = arrayOpciones.flat()
    // console.log(arrayOpciones)
    // console.log(questions.preguntas && questions.preguntas[0])
    return (
        <section className='w-1/2 h-full flex flex-col place-content-center'>
            <Buton />
            <Buton />
            <Buton />
            <Buton />
        </section>
    )
}
