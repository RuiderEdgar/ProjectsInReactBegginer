/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import { dataQuizz } from '../data/preguntas'

//nombre del contexto
export const QuestionsContext = createContext()

export const QuestionsContextProvider = (props) => {
    const [questions, setQuestions] = useState({})
    const [logRespuestas, setLogRespuestas] = useState([]);

    useEffect(() => {
        setQuestions(dataQuizz)
    }, [dataQuizz])

    const registrandoRespuestas = (respuesta) => {
        setLogRespuestas([...logRespuestas, respuesta])
    }

    return (
        <QuestionsContext.Provider value={
            {
                questions,
                registrandoRespuestas,
                logRespuestas
            }}>
            {props.children}
        </QuestionsContext.Provider>
    )
}
