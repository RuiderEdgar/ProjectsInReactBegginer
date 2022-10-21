import React, { useContext, useEffect, useState } from 'react'
import { Preguntas } from './Preguntas'
import { Options } from './Options'
import { QuestionsContext } from '../context/QuestionsContext'


export const Quizz = () => {
    const { questions } = useContext(QuestionsContext)
    const [arrayPreguntas, setArrayPreguntas] = useState([])
    const [options, setOptions] = useState([])
    const [auxKey, setAuxKey] = useState('')
    const [numberQuestion, setNumberQuestion] = useState(1)


    useEffect(() => {
        //bloque para meter cada key del array de objetos en un array
        let auxPreguntas = []
        for (let pregunta in questions.preguntas) {
            auxPreguntas.push(questions.preguntas && Object.keys(questions.preguntas[pregunta]))
        }
        auxPreguntas = auxPreguntas.flat()
        //------------------------------------------------------------
        //guardamos el array en un useState
        setArrayPreguntas(auxPreguntas)

    }, [questions])
    //------------------------------------------------------------

    //cree un useState para que se vaya guardando una sola key osea una pregunta para asi acceder a sus respuestas
    useEffect(() => {
        setAuxKey(arrayPreguntas[numberQuestion] ?? '¿cuantos años tengo?')
    }, [numberQuestion])
    //----------------------------------------------------------------------

    //Cree otro useState para guardar las key de las preguntas dependiendo en que pregunta nos encontremos
    useEffect(() => {
        let auxOptions = questions.preguntas && questions.preguntas[numberQuestion] && Object.keys(questions.preguntas[numberQuestion][auxKey] ?? questions.preguntas[0]['¿cuantos años tengo?'])
        setOptions(auxOptions)
    }, [auxKey])
    //Todo veremos si podemos renderizar el componente
    //Todo pasar todo a context

    // console.log(auxKey)
    console.log(options)
    // console.log(auxOptions)


    return (
        <div className='m-auto h-80 w-2/3 bg-cyan-900 rounded-md flex p-4 shadow-lg shadow-black'>
            {/* numero de pregunta y pregunta */}
            <Preguntas preguntas={arrayPreguntas} />
            {/* preguntas */}
            <Options />
        </div>
    )
}
