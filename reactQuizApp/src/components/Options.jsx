import React from 'react'
import { Buton } from './Buton'
export const Options = ({ options, nextQuestion, className, arrayLogRespuestas, preguntasArray, correctAswer, numberQuestion }) => {

    return (
        <section className={'w-1/2 h-full flex flex-col place-content-center ' + className}>
            <Buton respuesta={options && options[0]} nextQuestion={nextQuestion} arrayLogRespuestas={arrayLogRespuestas} preguntasArray={preguntasArray} correctAswer={correctAswer} numberQuestion={numberQuestion} />
            <Buton respuesta={options && options[1]} nextQuestion={nextQuestion} arrayLogRespuestas={arrayLogRespuestas} preguntasArray={preguntasArray} correctAswer={correctAswer} numberQuestion={numberQuestion} />
            <Buton respuesta={options && options[2]} nextQuestion={nextQuestion} arrayLogRespuestas={arrayLogRespuestas} preguntasArray={preguntasArray} correctAswer={correctAswer} numberQuestion={numberQuestion} />
            <Buton respuesta={options && options[3]} nextQuestion={nextQuestion} arrayLogRespuestas={arrayLogRespuestas} preguntasArray={preguntasArray} correctAswer={correctAswer} numberQuestion={numberQuestion} />
        </section>
    )
}
