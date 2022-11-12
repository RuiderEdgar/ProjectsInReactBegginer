import React, { useContext, useEffect, useState } from 'react'
import { Preguntas } from './Preguntas'
import { Options } from './Options'
import { QuestionsContext } from '../context/QuestionsContext'
import { Resultado } from './Resultado'


export const Quizz = () => {
    const { questions, logRespuestas } = useContext(QuestionsContext)
    const [arrayPreguntas, setArrayPreguntas] = useState([])
    const [auxKey, setAuxKey] = useState('')
    const [options, setOptions] = useState([])
    const [numberQuestion, setNumberQuestion] = useState(0)
    const [fin, setFin] = useState(false)
    const [score, setScore] = useState(0)
    const [numeroPreguntas, setnumeroPreguntas] = useState(0)

    //Guardando todas las preguntas en un array
    useEffect(() => {
        //bloque para meter cada key del array de objetos en un array
        let auxPreguntas = []
        for (let pregunta in questions.preguntas) {
            auxPreguntas.push(questions.preguntas && Object.keys(questions.preguntas[pregunta]))
            setnumeroPreguntas(pregunta)
        }
        auxPreguntas = auxPreguntas.flat()

        //guardamos el array en un useState
        setArrayPreguntas(auxPreguntas)

        // setFin
        setFin(false)
    }, [questions])

    //use effect para guardar la pregunta actual
    useEffect(() => {
        setAuxKey(arrayPreguntas[numberQuestion] ?? arrayPreguntas['¿Cuál es la velocidad de la luz?'])
        //al final ?? si es nulo, de momento va a tomar la primera pregunta para renderizar y no renderize null o undefined
    }, [numberQuestion])

    //use effect para guardar cada key respuesta, osea la respuesta a mostrar
    useEffect(() => {
        let auxOptions = questions.preguntas && questions.preguntas[numberQuestion] && Object.keys(questions.preguntas[numberQuestion][auxKey] ?? questions.preguntas[0]['¿Cuál es la velocidad de la luz?'])
        // al final ?? si es nulo, de momento va a tomar la primera pregunta para renderizar y no renderize null
        setOptions(auxOptions)
    }, [auxKey])

    const correctAswer = () => {
        setScore(score + 1)
    }

    const siguientePregunta = () => {
        if (numberQuestion <= (arrayPreguntas.length - 2)) {
            setNumberQuestion(numberQuestion + 1)
        } else {
            setFin(true)
        }
    }

    return (
        <div className='m-auto h-80 w-2/3 bg-cyan-900 rounded-md flex p-4 shadow-lg shadow-black'>
            {/* numero de pregunta y pregunta */}
            <Preguntas preguntas={arrayPreguntas} numberQuestion={numberQuestion} className={fin ? 'hidden' : 'block'} />

            {/* preguntas */}
            <Options options={options} nextQuestion={siguientePregunta} className={fin ? 'hidden' : 'flex'} arrayLogRespuestas={Object.values(logRespuestas)} preguntasArray={Object.values(arrayPreguntas)} correctAswer={correctAswer} numberQuestion={numberQuestion} />

            <Resultado className={fin ? 'flex' : 'hidden'} score={score} numeroPreguntas={numeroPreguntas} />
        </div>
    )
}
