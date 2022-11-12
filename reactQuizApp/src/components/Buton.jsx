import React, { useContext, useEffect } from 'react'
import { QuestionsContext } from '../context/QuestionsContext'

export const Buton = ({ respuesta, nextQuestion, arrayLogRespuestas, preguntasArray, correctAswer, numberQuestion }) => {
    const { registrandoRespuestas, questions } = useContext(QuestionsContext)
    const handleOption = () => {
        registrandoRespuestas(respuesta)
    }
    useEffect(() => {
        for (let pregunta in questions.preguntas) {
            if (questions.preguntas && questions.preguntas[pregunta] && questions.preguntas[pregunta][preguntasArray[pregunta]] && questions.preguntas[pregunta][preguntasArray[pregunta]][arrayLogRespuestas[pregunta]] === true) {
                correctAswer()
            }
        }
    }, [registrandoRespuestas])

    return (
        <button onClick={(e) => {
            e.preventDefault()
            handleOption()
            nextQuestion()
        }} className='h-14 bg-gray-900 my-2 m-auto w-5/6 text-slate-50 rounded-full border-2 border-red-800 shadow-lg shadow-gray-900/50 hover:bg-gray-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-100 hover:border-red-600 hover:font-bold outline-none focus:outline-none active:outline-none'>{respuesta}</button>
    )
}
