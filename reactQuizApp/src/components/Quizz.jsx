import React from 'react'
import { Preguntas } from './Preguntas'
import { Options } from './Options'

export const Quizz = () => {
    return (
        <div className='m-auto h-80 w-2/3 bg-cyan-900 rounded-md flex p-4 shadow-lg shadow-black'>
            {/* numero de pregunta y pregunta */}
            <Preguntas />
            {/* preguntas */}
            <Options />
        </div>
    )
}
