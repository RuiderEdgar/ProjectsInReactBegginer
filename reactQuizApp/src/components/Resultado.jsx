import React from 'react'

export const Resultado = ({ className, score, numeroPreguntas }) => {
    return (
        <section className={'w-full h-full ' + className}>
            <h2 className={'text-2xl font-bold text-gray-50 m-auto'}>Score: {score} of {(parseInt(numeroPreguntas) + 1)} </h2>
        </section>
    )
}
