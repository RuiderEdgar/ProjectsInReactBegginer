/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import { dataQuizz } from '../data/preguntas'

//nombre del contexto
export const QuestionsContext = createContext()

export const QuestionsContextProvider = (props) => {
    const [questions, setQuestions] = useState({})
    useEffect(() => {
        setQuestions(dataQuizz)
    }, [])

    return (
        <QuestionsContext.Provider value={{ questions }}>
            {props.children}
        </QuestionsContext.Provider>
    )
}
